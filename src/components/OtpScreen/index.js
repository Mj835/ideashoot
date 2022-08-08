import React, { useState } from "react";
import SignupNav from "../Navbar/signupNav";
import OtpInput from "react-otp-input";
import { Link, useLocation } from "react-router-dom";

const OtpScreen = () => {
  const location = useLocation();
  const { nameValue, emailValue } = location?.state;

  const [otp, setOtp] = useState("");
  const [name, setName] = useState(nameValue);
  const [email, setEmail] = useState(emailValue);

  const otpInput = (otp) => {
    setOtp(otp);

    console.log(otp);
  };

  return (
    <div className="otpscreenWrapper">
      <div className="container">
        <SignupNav />

        <div className="signupBox">
          <div className="otpDiv">
            <h1>Enter the OTP received in your email inbox.</h1>

            <OtpInput
              value={otp}
              numInputs={4}
              onChange={otpInput}
              isInputNum="true"
            />

            <div className="resendWrapper">
              <Link
                to="/signup-complete"
                state={{ nameValue: name, emailValue: email }}
                style={{ textDecoration: "none" }}
              >
                <button className="otpSubmit">Submit</button>
              </Link>
              <span className="resend">Resend OTP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpScreen;
