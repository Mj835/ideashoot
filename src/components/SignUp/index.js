import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiUserFill, RiMailFill } from "react-icons/ri";
import validator from "validator";
import SignupNav from "../Navbar/signupNav";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Name") && localStorage.getItem("Email")) {
      navigate("/checkout", { replace: true });
    }
  }, []);

  const handleSignup = () => {
    localStorage.setItem("Name", JSON.stringify(name));
    localStorage.setItem("Email", JSON.stringify(email));

    navigate(
      "/otpscreen",
      {
        state: { nameValue: name, emailValue: email },
      },
      { replace: true }
    );
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const validateEmail = (e) => {
    setEmail(e.target.value);

    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  return (
    <div className="signupWrapper">
      <div className="container">
        <SignupNav />

        <div className="signupBox">
          <div className="signupDiv">
            <h1>Sign Up to Proceed</h1>

            <form onSubmit={handleSignup} action="">
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

              <span
                style={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                {emailError}
              </span>

              {/* <Link
                to="/signup-complete"
                state={{ nameValue: name, emailValue: email }}
                style={{ textDecoration: "none" }}
              >
                
              </Link> */}
              <button
                type="submit"
                // onClick={handleSignup}
                className="submitBtn"
              >
                Submit & Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
