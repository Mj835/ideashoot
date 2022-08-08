import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiUserFill, RiMailFill } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import validator from "validator";
import SignupNav from "../Navbar/signupNav";

const SignupComplete = () => {
  const location = useLocation();
  const { nameValue, emailValue } = location?.state;

  console.log(nameValue, emailValue);
  const navigate = useNavigate();

  const [name, setName] = useState(nameValue);
  const [email, setEmail] = useState(emailValue);
  const [address, setAddress] = useState("");
  const [mobNum, setMobNum] = useState("");
  const [emailError, setEmailError] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const submitSignup = () => {
    localStorage.setItem("Address", address);

    navigate("/checkout", {
      state: { nameValue: name, addressValue: address },
    });
  };

  return (
    <div className="signupCompleteWrapper">
      <div className="container">
        <SignupNav />

        <div className="signupBox">
          <div className="signupDiv">
            <h1>Sign Up to Proceed</h1>

            <form onSubmit={submitSignup} action="">
              <div className="inputBox">
                <RiUserFill size={16} color="#FFFFFF" />
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={nameChange}
                  required
                />
              </div>

              <div className="inputBox">
                <RiMailFill size={16} color="#FFFFFF" />
                <input
                  type="email"
                  placeholder="Email ID"
                  onChange={(e) => validateEmail(e)}
                  required
                  value={email}
                />
              </div>

              <div className="inputBox">
                <MdCall size={16} color="#FFFFFF" />
                <input
                  type="number"
                  placeholder="Mobile Number"
                  required
                  value={mobNum}
                  onChange={(e) => setMobNum(e.target.value)}
                />
              </div>

              <div className="addressBox">
                <TiLocation size={16} color="#FFFFFF" />
                <textarea
                  placeholder="Address"
                  id=""
                  cols="10"
                  rows="10"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>

              {/* <Link
                to="/checkout"
                state={{
                  nameValue: name,
                  addressValue: address,
                }}
                style={{ textDecoration: "none" }}
              >
                
              </Link> */}
              <button type="submit" className="finalSubmit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupComplete;
