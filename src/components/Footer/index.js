import React from "react";
import { Link } from "react-router-dom";

import footerLogo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="container">
        <div className="footer">
          <Link to="/">
            <img src={footerLogo} alt="Footer Logo" width={200} />
          </Link>
          <p>2022, Copyright of Ideashoots Technology LLP</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
