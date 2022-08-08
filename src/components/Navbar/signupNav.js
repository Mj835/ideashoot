import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/signupLogo.png";

const SignupNav = () => {
  return (
    <div className="signup-navWrapper">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{ marginBottom: "15px", marginTop: "15px" }}
        />
      </Link>
    </div>
  );
};

export default SignupNav;
