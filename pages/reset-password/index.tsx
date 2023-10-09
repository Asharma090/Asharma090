import Header from "@/shared/Header";
import Image from "next/image";
import BANNER from "../../public/images/forgot-banner.png"
import { Info, PasswordChanged, PasswordHidden } from "@/icons";
import Base from "@/template/base";

const ResetPassword = () => {
  return (
    <Base hideFooter isNeedHelp>
      <div className="p-4 forgot-password">
        <div className="container">
          <div className="wrap">
            <div className="forgot-content">
              <h1 className="mt-3">Reset Password</h1>

              <div className="form-group mb-4">
                <label>Create New Password</label>

                <div className="password-input">
                  <input type="password" className="form-control" placeholder="Enter Password" />
                  <PasswordHidden />
                </div>

                <div className="helper-text">
                  <Info />
                  At least 8 characters, 1 number, 1 uppercase letter, 1 special character.
                </div>
              </div>

              <div className="form-group mb-4">
                <label>Create New Password</label>
                <div className="password-input">
                  <input type="password" className="form-control" placeholder="Enter Password" />
                  <PasswordHidden />
                </div>
                <div className="helper-text">
                  <Info />
                  At least 8 characters, 1 number, 1 uppercase letter, 1 special character.
                </div>
              </div>

              <button className="btn btn-primary px-5">
                Reset Password
              </button>
            </div>


            {/* <div className="forgot-content">
              <PasswordChanged />
              <h1 className="mt-3">Password Updated</h1>

              <p>You have successfully updated your Password. Click below to Sign In.</p>

              <button className="btn btn-primary px-5 mt-5">
                Sign In
              </button>
            </div> */}



            <div className="forgot-banner">
              <Image src={BANNER} alt="forgot-password" />

              <div className="content">
                <h3>Start your journey with us</h3>
                <p>
                  A Platform that saves COSTS, GUIDES, REMINDS you for your Family Court Hearings! Experience the smooth processing while drafting the list of forms with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  )
};

export default ResetPassword;