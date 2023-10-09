const axios = require("axios");
require("dotenv").config();

// // Function to check whether user is already registered or not in auth0
// async function isUserRegisteredInAuth0(email) {
//   try {
//     const auth0Response = await axios.get(
//         `https://${process.env.AUTH0_DOMAIN}/api/v2/users-by-email`,
//         {
//           params: {
//             email: email,
//           },
//           auth: {
//             username: process.env.AUTH0_CLIENT_ID,
//             password: process.env.AUTH0_CLIENT_SECRET,
//           },
//         }
//       );

//     return auth0Response.data.length > 0; // User is registered if response contains user data
//   } catch (error) {
//     console.error(
//       "Error while checking if user is registered in Auth0:",
//       error.response?.data || error.message
//     );
//     throw error;
//   }
// }

// Function to register a user using Auth0 Authentication API
async function registerUserInAuth0(email, password) {
  try {
    const auth0Response = await axios.post(
      `https://${process.env.AUTH0_DOMAIN}/dbconnections/signup`,
      {
        client_id: process.env.AUTH0_CLIENT_ID,
        email,
        password,
        connection: process.env.AUTH0_CONNECTION,
      }
    );

    console.log("Auth0 Response:", auth0Response.data);
    return auth0Response.data;
  } catch (error) {
    console.error(
      "Error during user registration:",
      error.response?.data || error.message
    );
    throw error;
  }
}

function generateOTP() {
  const otpLength = 6;
  const min = Math.pow(10, otpLength - 1);
  const max = Math.pow(10, otpLength) - 1;
  const otp = Math.floor(Math.random() * (max - min + 1)) + min;

  // Calculate expiration time (2 minutes from now)
  const otpExpiry = new Date();
  otpExpiry.setMinutes(otpExpiry.getMinutes() + 2);

  return { otp, otpExpiry };
}

// Function to validate user credentials against Auth0
const validateCredentialsWithAuth0 = async (email, password) => {
  try {
    const auth0Response = await axios.post(
      `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
      {
        grant_type: "password",
        username: email,
        password: password,
        audience: process.env.AUTH0_AUDIENCE,
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
      }
    );

    return auth0Response.data;
  } catch (error) {
    console.error(
      "Error during user authentication with Auth0:",
      error.response?.data || error.message
    );
    throw error;
  }
};

module.exports = {
  //   isUserRegisteredInAuth0,
  validateCredentialsWithAuth0,
  registerUserInAuth0,
  generateOTP,
};
