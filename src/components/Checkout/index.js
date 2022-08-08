import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { MdKeyboardArrowLeft, MdEdit } from "react-icons/md";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Checkout = () => {
  const location = useLocation();

  const addressValue =
    location?.state === null ? "" : Object.values(location?.state);

  const [address, setAddress] = useState(
    addressValue !== undefined ? addressValue : ""
  );

  const [disabled, setDisabled] = useState(true);

  const state = useSelector((state) => state.addItem);

  const cartItems = (cartItem) => {
    return (
      <div className="checkoutItem" key={cartItem.id}>
        <input type="checkbox" name="" id="" />
        <img
          src={cartItem.imgSrc}
          alt="cartItemImage"
          width={173}
          height={173}
          className="cartItemImg"
        />
        <div className="itemName">
          <h2>{cartItem.itemTitle}</h2>
          <p>{cartItem.itemName}</p>
          <div className="priceDiv">
            <p>
              Exclusive price: <span>{cartItem.itemSalePrice}/-</span>
            </p>
            <p className="originalPrice">
              Original price: {cartItem.itemPrice}/-
            </p>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="div">
        <p>Your Cart is Empty</p>
      </div>
    );
  };

  // var total = 0;
  // const itemList = (item) => {
  //   total = parseInt(total) + parseInt(item.itemSalePrice);
  //   return item.itemSalePrice;
  // };

  const totalFinalAmount = state.reduce(
    (a, c) => a + parseInt(c.itemSalePrice),
    0
  );

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="checkoutWrapper">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="backButton"
          >
            <MdKeyboardArrowLeft size={20} color="#82798B" />
            <span>Back</span>
          </Link>

          <div className="checkout-row">
            <div className="col-left">
              <h1>Checkout</h1>

              {/* Cart Item Logic Here */}
              {state.length === 0 && emptyCart()}
              {state.length !== 0 && state.map(cartItems)}
            </div>

            <div className="col-right">
              <div className="addressWrapper">
                <div className="addressHead">
                  <p>Address</p>
                  <MdEdit
                    color="#82798B"
                    size={18}
                    style={{ cursor: "pointer" }}
                    onClick={() => setDisabled(!disabled)}
                  />
                </div>

                <div className="address">
                  <textarea
                    placeholder="Your Address Here..."
                    id=""
                    cols="10"
                    rows="10"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    disabled={disabled}
                  ></textarea>
                </div>
              </div>
              <div className="billWrapper">
                <p>Billing Summary</p>

                <div className="priceCount">
                  <p>Subtotal</p>
                  <p>Rs.{totalFinalAmount === "" ? 0 : totalFinalAmount}</p>
                </div>

                <div className="priceCount">
                  <p>Discount</p>
                  <p>Rs. 20</p>
                </div>

                <div className="priceCount">
                  <p>Shipping</p>
                  <p>Rs. 00</p>
                </div>

                <div className="priceCount">
                  <p>Tax</p>
                  <p>Rs. 20</p>
                </div>

                <hr />

                <div className="totalPrice">
                  <p>Total</p>
                  <p>Rs. {totalFinalAmount === "" ? 0 : totalFinalAmount}</p>
                </div>

                <Link
                  to="/orders"
                  style={{ textDecoration: "none" }}
                  className="backButton"
                >
                  <button className="payBtn">
                    PAY Rs. {totalFinalAmount === "" ? 0 : totalFinalAmount}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
