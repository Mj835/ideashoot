import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.addItem);

  return (
    <div className="container">
      <div className="navWrapper">
        <Link to="/">
          <img src={logo} alt="logo" width={200} height={75} />
        </Link>

        <Link to="/checkout">
          <span className="fa-stack fa-2x has-badge" data-count={state.length}>
            <RiShoppingCart2Fill
              color="black"
              size={20}
              style={{ cursor: "pointer" }}
            />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
