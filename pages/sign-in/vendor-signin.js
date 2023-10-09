import React, { useState } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { vendorSignIn } from "../../store/actions/user";
import { Email, Key } from "@/icons";
import Base from "@/template/base";

const VendorSigninModal = ({ visible, onCancel, otpVerified }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSignIn = () => {
    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      return;
    }

    dispatch(vendorSignIn(email, password));
    if (otpVerified) onCancel();
  };

  const validateEmail = (email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return isValid;
  };

  return (
    <Modal
      visible={visible}
      onCancel={() => {
        onCancel();
        setEmailError("");
      }}
      footer={null}
      width={470}
      centered
    >
      <div
        className="p-4 forgot-password sign-in"
        style={{ maxHeight: "70vh", overflowY: "auto" }}
      >
        <div className="container">
          <div className="wrap">
            <div className="forgot-content">
              <h1 className="mt-0 mb-0">Welcome back</h1>
              <p>Enter your credentials to access your account</p>
              <div className="form">
                <div className="form-group mb-4">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter  Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && (
                    <small style={{ color: "#F67832", fontSize: "13px" }}>
                      {emailError}
                    </small>
                  )}
                </div>
                <div className="form-group mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <label>Password</label>
                    <label>
                      <a href="#" className="forgot-pass">
                        Forgot Password?
                      </a>
                    </label>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-primary px-5 w-100"
                  onClick={handleSignIn}
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default VendorSigninModal;
