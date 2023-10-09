import actionTypes from "../actionTypes";

const initialState = { user: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
      };
    case actionTypes.REGISTER_VENDOR_SUCCESS:
      return { ...state, user: action.payload.user }
    case actionTypes.VENDOR_SIGNIN_SUCCESS:
      return { ...state, user: action.payload.user }
    case actionTypes.OTP_VERIFICATION_SUCCESS:
      let otpVerified = false;
      if (action.payload && action.payload.user)
      otpVerified = true
      const user = { ...state.user, otpVerified }
      return { ...state, user }
    default:
      return state;
  }
};
