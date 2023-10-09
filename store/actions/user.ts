import actionTypes from "../actionTypes";
import { toastSuccess, toastError } from "../../service/toastMessage"


interface BusinessFormData {
  email: string;
  otpVerified: Boolean,
  businessEmail: string;
  businessName: string;
  mobileNumber: string;
  businessWebsite: string;
  operatingYear: string;
  licensedCertified: string;
  startTime: string;
  endTime: string;
  locallyOwned: boolean;
  businessDescription: string;
  selectedImage: string;
  category: string;
  subCategories: Array<string>
}

export const getUserData = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.FETCH_USERS_SUCCESS,
      payload: [],
    });
    // api call
  } catch (error) {
    dispatch({
      //
    });
  }
};

export const registerVendor = (email: String, password: String) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.REGISTER_VENDOR_START,
      payload: [],
    });
    const response = await fetch(`api/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (response.ok) {
      const data = await response.json(); // Parse the response body as JSON
      console.log(data)
      dispatch({
        type: actionTypes.REGISTER_VENDOR_SUCCESS,
        payload: data, // Use the parsed data
      });
    } else {
      const data = await response.json();
      toastError(data.message);
      dispatch({
        type: actionTypes.REGISTER_VENDOR_FAILURE,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_VENDOR_FAILURE,
      payload: [],
    });
  }
};

export const OTPVerification = (email: String, enteredOTP: Number, password: String) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.OTP_VERIFICATION_START,
      payload: [],
    });
    const response = await fetch(`api/user/otp-verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        enteredOTP,
        password
      }),
    });

    if (response.ok) {
      const data = await response.json(); // Parse the response body as JSON
      console.log(data)
      dispatch({
        type: actionTypes.OTP_VERIFICATION_SUCCESS,
        payload: data, // Use the parsed data
      });
      // Show a success toast message
      toastSuccess('OTP Validation successful!')
      toastSuccess('Registration successful!')
    } else {
      // Handle error cases
      dispatch({
        type: actionTypes.OTP_VERIFICATION_FAILURE,
        payload: [],
      });
      // Show a success toast message
      toastError('OTP Validation is not successful!')
      // Show a success toast message
      toastError('Registration is not successful!');
    }
  } catch (error) {
    dispatch({
      type: actionTypes.OTP_VERIFICATION_FAILURE,
      payload: [],
    });
  }
};

export const vendorSignIn = (email: String, password: String) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.VENDOR_SIGNIN_START,
      payload: [],
    });
    const response = await fetch(`api/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (response.ok) {
      const data = await response.json(); // Parse the response body as JSON
      toastSuccess("You have loggedin Successfully");
      dispatch({
        type: actionTypes.VENDOR_SIGNIN_SUCCESS,
        payload: data, // Use the parsed data
      });
    } else {
      const data = await response.json();
      toastError("Please provide valid credentials");
      dispatch({
        type: actionTypes.VENDOR_SIGNIN_FAILURE,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.VENDOR_SIGNIN_FAILURE,
      payload: [],
    });
  }
};

export const vendorBusinessDetails = (businessDetails: BusinessFormData) => async (dispatch) => {
  try {
    const { email,
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
      selectedImage,
      selectedCity,
      category,
      subCategories
    } = businessDetails;

    dispatch({
      type: actionTypes.VENDOR_BUSINESS_DEATILS_START,
      payload: [],
    });

    if (!email) {
      toastError("Please register your account or login first")
      return;
    }

    if (email && !otpVerified) {
      toastError("Please verify your account first with OTP")
      return;
    }


    const response = await fetch(`api/user/business-details`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
        selectedImage,
        selectedCity,
        category,
        subCategories
      }),
    });
    if (response.ok) {
      const data = await response.json(); // Parse the response body as JSON
      toastSuccess("Business details is saved successfully");
      dispatch({
        type: actionTypes.VENDOR_BUSINESS_DEATILS_SUCCESS,
        payload: data, // Use the parsed data
      });
    } else {
      const data = await response.json();
      toastError("Something went wrong! Business details is not saved successfully");
      dispatch({
        type: actionTypes.VENDOR_BUSINESS_DEATILS_FAILURE,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.VENDOR_BUSINESS_DEATILS_FAILURE,
      payload: [],
    });
  }
};