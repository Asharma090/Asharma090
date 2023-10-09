import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerVendor, OTPVerification } from "../../store/actions/user";
import moment from "moment";
import VendorSignin from "../sign-in/vendor-signin";

const FirstStep = ({ style = {}, nextStep }: any) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [enteredOTP, setEnteredOTP] = useState(null);
  const [otpExpirationTime, setOtpExpirationTime] = useState(null);
  const [showSignInModal, setshowSignInModal] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  useEffect(() => {
    if (user.email && !user.otpVerified) {
      setShowOtpModal(true);
      setOtpExpirationTime(user.otpExpiry);
    }
    if (user.otpVerified) {
      setShowOtpModal(false);
      setEnteredOTP(null);
      setRegistrationSuccess(false);
      nextStep();
    }
  }, [user]);

  useEffect(() => {
    setEmail(user.email);
    // setPassword();
  }, []);

  const validateEmail = (email: String) => {
    // Basic email validation
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
    return isValid;
  };

  const validatePassword = (password) => {
    // Password validation: at least 6 characters, including special and capital letters
    const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(
      password
    );
    if (!isValid) {
      setPasswordError(
        "Password must be at least 6 characters long and contain special and capital letters"
      );
    } else {
      setPasswordError("");
    }
    return isValid;
  };

  const handleRegister = () => {
    // Validate email and password
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    if (isEmailValid && isPasswordValid) {
      // Call the registerVendor action with email and password
      dispatch(registerVendor(email, password));
      setRegistrationSuccess(true);
    }
  };

  const handleOtpSubmit = () => {
    // Handle OTP submission here
    dispatch(OTPVerification(email, enteredOTP, password));
    // setEmail("");
    // setPassword("");
  };

  const handleResendOtp = () => {
    // Handle OTP resend here
  };

  const handleShowSignInModal = () => {
    setshowSignInModal(true);
  };

  const handleTermsCheckboxChange = (e) => {
    setIsTermsAccepted(e.target.checked);
  };
  return (
    <div className={style["right-side"]}>
      <h3>Create Account</h3>
      <div>
        <div className={`${style["form-group"]} mb-4`}>
          <label>Email Address</label>
          <input
            type="email"
            className={style["form-control"]}
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <small style={{ color: "#F67832", font: "13px" }}>
              {emailError}
            </small>
          )}
        </div>
        <div className={`${style["form-group"]} mb-4`}>
          <label>Create Password</label>
          <input
            type="password"
            className={style["form-control"]}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <small style={{ color: "#F67832", font: "13px" }}>
              {passwordError}
            </small>
          )}
        </div>
        <div className={"form-check"}>
          <input className={"form-check-input"} type="checkbox" value="" onChange={handleTermsCheckboxChange}/>
          <label className={"form-check-label"}>
            I accept the{" "}
            <a href="#" className={style.arr}>
              Terms & Conditions
            </a>{" "}
            of XYZ Platform
          </label>
        </div>
        <div className={style["form-group"]}>
          <button
            type="button"
            className={style["login-btn"]}
            onClick={handleRegister}
            disabled={!email && !password && !isTermsAccepted }
            style={{
              backgroundColor: email && password && isTermsAccepted  ? "#F67832" : "#CCCCCC",
            }}
          >
            Create Account
          </button>
          <div style={{ display: "flex", alignItems: "center", margin: "5px" }}>
            <p style={{ fontSize: "14px" }}>Already registered?</p>
            <p style={{ fontSize: "14px", margin: "0 5px" }}>
              <span
                onClick={handleShowSignInModal}
                style={{
                  color: "#0047AB",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Please Login
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      {showOtpModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter OTP</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowOtpModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <h6>
                  We have sent an OTP to your email. Please enter the OTP below:
                </h6>
                <h6 style={{ font: "10px", padding: "2px" }}>
                  OTP will expire on:{" "}
                  <strong>{moment(otpExpirationTime).format("HH:mm")}</strong>
                </h6>
                <div style={{ width: "50%", padding: "2px" }}>
                  <input
                    type="tel"
                    className="form-control mb-2"
                    placeholder="Enter OTP"
                    value={enteredOTP}
                    onChange={(e) => {
                      const input = e.target.value;
                      if (/^\d{0,6}$/.test(input)) {
                        setEnteredOTP(input);
                      }
                    }}
                    maxLength={6}
                  />
                  <button className="btn btn-primary" onClick={handleOtpSubmit}>
                    Submit
                  </button>
                  <button
                    className="btn"
                    onClick={handleResendOtp}
                    style={{
                      color: "#0047AB",
                      font: "10px",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    Resend OTP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Vendor Sign in Modal*/}
      {showSignInModal && (
        <VendorSignin
          visible
          otpVerified={user.otpVerified}
          onCancel={() => setshowSignInModal(false)}
        />
      )}
    </div>
  );
};

export default FirstStep;
