const express = require("express");
const app = express();

const User = require("../models/user");
const auth0Config = require("../config/auth0Config");
const auth0 = require("auth0-js");
const axios = require("axios");
const userServices = require("../../service/user");
const UserType = require("../../constants/userType");
require("dotenv").config();

// #### --- User Registration - Create User Account	Input: EmailId, Phone Number, Password	Output: UniqueUserId
app.post("/register", async function (req, res) {
  try {
    //Get User Id  Email and Password from Req body
    const { email } = req.body;

    //check if email exists or not
    const checkUser = await User.findOne({ email });
    if (checkUser && checkUser.otpVerified) {
      console.log(`User is already there in db ${JSON.stringify(checkUser)}`);
      return res.status(400).json({
        message: "user account is already exists. Please login",
        user: {
          id: checkUser._id,
          email: checkUser.email,
          auth0ID: checkUser.auth0ID,
        },
      });
    }

    //Validate email thru regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail)
      return res.status(400).json({
        message: `Invalid Email Id ${email}. Please provide valid email`,
      });

    //Validate email or phone by sending OTP
    const { otp, otpExpiry } = userServices.generateOTP();
    console.log(
      `Generated OTP: ${otp} with expiry ${otpExpiry} for user ${email}`
    );

    //check if user is present but otp is not verified
    let user;
    if (checkUser && checkUser.email) {
      checkUser.otp = otp;
      checkUser.otpExpiry = otpExpiry;
      await checkUser.save();
    } else {
      user = new User({
        email,
        otp,
        otpExpiry,
        otpVerified: false,
        userType: UserType.VENDOR,
      });
      await user.save();
    }
    user = user || checkUser;
    console.log(`${JSON.stringify(user)}`);
    console.log(
      `User ${user._id} with email ${email} is saved in db successfully`
    );
    res.status(200).json({
      message: "user account is created successfully",
      user: { id: user._id, email, otpExpiry: user.otpExpiry },
    });
  } catch (error) {
    console.log(`error while registration of the user ${error}`);
    res.status(500).json({
      message: `error while registration of user ${error}`,
    });
  }
});

// #### --- OTP Verification - POST Registation need to verify the email through OTP
app.post("/otp-verify", async function (req, res) {
  try {
    //Get User Id  Email and Password from Req body
    const { email, enteredOTP, password } = req.body;

    //check if email exists or not
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      console.log(
        `User is not registered yet, not found in db ${JSON.stringify(
          checkUser
        )}`
      );
      return res.status(400).json({
        message: "user account is already exists. Please login",
        user: {
          email: checkUser.email,
        },
      });
    }

    //verify the OTP
    if (enteredOTP != checkUser.otp) {
      console.log(
        `Entered OTP ${enteredOTP} is wrong for user ${JSON.stringify(
          checkUser.email
        )}`
      );
      return res.status(400).json({
        message: `Entered OTP ${enteredOTP} is wrong for user ${JSON.stringify(
          checkUser.email
        )}`,
        user: {
          email: checkUser.email,
        },
      });
    }

    //Validate OTP durtation
    if (new Date() > checkUser.otpExpiry) {
      console.log(
        `Entered OTP ${enteredOTP} is wrong for user ${JSON.stringify(
          checkUser.email
        )}`
      );
      return res.status(400).json({
        message: `Entered OTP ${enteredOTP} is expired for user ${JSON.stringify(
          checkUser.email
        )}`,
        user: {
          email: checkUser.email,
        },
      });
    }

    //OTP is verified
    checkUser.otpVerified = true;

    //Call auth0 api to register and get the auth0 ID
    const auth0Response = await userServices.registerUserInAuth0(
      email,
      password
    );
    const auth0ID = auth0Response && auth0Response._id;
    if (!auth0ID)
      return res.status(400).json({
        message: `No auth0ID received`,
      });
    console.log(
      `User ${email} is registered in Auth0, with Auth0ID- ${auth0ID}`
    );
    checkUser.auth0ID = auth0ID;
    await checkUser.save();

    res.status(200).json({
      message: "OTP is validated successfully successfully",
      user: { id: checkUser._id, email: checkUser.email },
    });
  } catch (error) {
    console.log(`error while OTP verification ${error}`);
    res.status(500).json({
      message: `error while OTP verification ${error}`,
    });
  }
});

// #### ---- User Login - Capture and validate user details to login into system
app.post("/login", async function (req, res) {
  try {
    //Get User Id (Phone or Email) and Password from Req body
    const { email, password } = req.body;

    //check if email or phone exists or not
    const checkUser = await User.findOne({ email });
    console.log(`user found ${JSON.stringify(checkUser)}`);
    if (!checkUser)
      return res.status(400).json({
        message: "user account doesn't exists. Please create an account",
      });

    //Validate the auth0ID with password and email
    const auth0TokenResponse = await userServices.validateCredentialsWithAuth0(
      email,
      password
    );
    const accessToken = auth0TokenResponse.access_token;

    if (!accessToken) {
      return res.status(401).json({
        message: "Error in auth0 login, Invalid email or password.",
      });
    }

    console.log(
      `user ${checkUser._id} with email ${checkUser.email} is validated in auth0 successfully`
    );

    //Update the lastLoginAt date lastLogginAt
    checkUser.lastLoginAt = new Date();
    await checkUser.save();

    res.status(200).json({
      message: "user login is done successfully",
      user: checkUser,
    });
  } catch (error) {
    console.log(`error while login user ${error}`);
    res.status(500).json({
      message: `error while login user ${error}`,
    });
  }
});

//Business Details Capture business details and save to DB	UserId,
app.post("/business-details", async function (req, res) {
  const {
    email,
    otpVerified,
    businessEmail,
    businessName,
    mobileNumber,
    businessWebsite,
    operatingYear,
    licensedCertified,
    startTime,
    endTime,
    locallyOwned,
    businessDescription,
    selectedImage, //need to integrate with aws s3
    selectedCity,
    category,
    subCategories
  } = req.body;

  const currentUser = await User.findOne({ email });
  if (!currentUser) {
    console.log(`Email ${email} is not found in database`);
    return res
      .status(400)
      .json({ message: `Email ${email} is not found in database` });
  }

  const businessDetails = {
    businessEmail,
    businessName,
    mobileNumber,
    businessWebsite,
    operatingYear,
    licensedCertified,
    startTime,
    endTime,
    locallyOwned,
    businessDescription,
    logo: selectedImage,
    city:selectedCity,
    category,
    subCategories 
  };
  currentUser.vendor.businessDetails = businessDetails;
  await currentUser.save();
  res.status(200).json({
    message: "business details is saved successfully",
    data: currentUser.vendor,
  });
});

//Vendor Details Details Capture Vendor Details and save to DB	UserId,
app.post("/vendor-details", function (req, res) {
  res.status(200).json({ message: "vendor details is saved successfully" });
});

//Business Details Capture business details and save to DB	UserId,
app.post("/upload", function (req, res) {
  res.status(200).json({ message: "photo is uploaded successfully" });
});

//Business Details Capture business details and save to DB	UserId,
app.post("/social", function (req, res) {
  res.status(200).json({ message: "socials details is saved successfully" });
});

module.exports = app;
