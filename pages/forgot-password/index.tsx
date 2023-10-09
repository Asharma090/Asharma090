import Header from "@/shared/Header";
import Image from "next/image";
import BANNER from "../../public/images/forgot-banner.png"
import { Email, Key } from "@/icons";
import Base from "@/template/base";



const ForgotPassword = () => {

  return (
    <Base isNeedHelp hideFooter>
      <div className="p-4 forgot-password">
        <div className="container">
          <div className="wrap">
            <div className="forgot-content">
              <Key />
              <h1 className="mt-3">Forgot Password</h1>

              <div className="form-group mb-4">
                <label>Mobile Number / Email Address</label>
                <input type="text" className="form-control" placeholder="Enter Mobile Number / Email" />
              </div>

              <button className="btn btn-primary px-5">Submit</button>
            </div>


            {/* <div className="forgot-content">
              <Email />
              <h1 className="mt-3">Forgot Password</h1>

              <h4>Check your Email</h4>
              <p>Password reset link has been sent on johndoe121@gmail.com</p>

              <button className="btn btn-primary px-5 mt-5">Resend Link</button>
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

export default ForgotPassword;