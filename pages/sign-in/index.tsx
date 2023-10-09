import Header from "@/shared/Header";
import { Email, Key } from "@/icons";
import React, { useState } from "react";
import Base from "@/template/base";
import { Steps } from "antd";

const STEPS = [
    {
        title: "Email",
       
    },
    {
        title: "Mobile Number",
       
    },

];

const Signin = () => {
    const [current, setCurrent] = useState(0);
    const onChange = (value: any) => {
        setCurrent(value);
    };
    return (
        <Base isNeedHelp hideFooter>
            <div className="p-4 forgot-password sign-in">
                <div className="container">

                    <div className="wrap">
                        <div className="forgot-content">

                            <h1 className="mt-0 mb-0">Welcome back</h1>
                            <p>Enter your credentials to access your account</p>
                            <Steps
                                current={current}
                                onChange={onChange}
                                items={STEPS}
                            />
                            {current === 0 &&
                                <div className="form">
                                    <div className="form-group mb-4">
                                        <label>Email Address</label>
                                        <input type="email" className="form-control" placeholder="Enter  Email" />
                                    </div>
                                    <div className="form-group mb-4">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <label>Password</label>
                                            <label><a href="#" className="forgot-pass">Forgot Password?</a></label>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Enter Password" />
                                    </div>

                                    <button className="btn btn-primary px-5 w-100">Log In</button>
                                </div>
                            }
                            {current === 1 &&
                                
                                    <div className="form">
                                        <div className="form-group mb-4">
                                            <label>Mobile Number</label>
                                            <input type="email" className="form-control" placeholder="Enter  Mobile Number" />
                                        </div>
                                        <div className="form-group mb-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <label>Password</label>
                                                <label><a href="#" className="forgot-pass">Forgot Password?</a></label>
                                            </div>
                                            <input type="password" className="form-control" placeholder="Enter Password" />
                                        </div>

                                        <button className="btn btn-primary px-5 w-100">Log In</button>
                                    </div>


                                   
                              
                                
                            }
                             <span className="Signlink mt-5">Don’t have an account ? <a href="">Sign Up</a> </span>

             </div>        

</div>
</div>
</div>
        </Base>
                        )
};

export default Signin;