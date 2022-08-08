import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Navbar from "../Navbar";
import Footer from "../Footer";
import itemImage from "../../assets/images/productImage.png";
import authorProfile from "../../assets/images/profile.png";

const Orders = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="checkoutWrapper">
          <Link
            to="/checkout"
            style={{ textDecoration: "none" }}
            className="backButton"
          >
            <MdKeyboardArrowLeft size={20} color="#82798B" />
            <span>Back</span>
          </Link>

          <h1>Your Orders</h1>

          <div className="orderItems">
            <div className="orderedItemWrapper">
              <img
                src={itemImage}
                alt="Ordered Item"
                width={180}
                height={180}
              />

              <div className="orderDetail">
                <p className="orderDate">Ordered on 22-Dec-2021 </p>
                <span className="orderName">Seamless Printed Neck T-shirt</span>
                <div className="authorProfile">
                  <img
                    src={authorProfile}
                    alt="Author Profile"
                    width={40}
                    height={40}
                  />
                  <span>Lara</span>
                </div>
                <p>
                  Brand Name:{" "}
                  <span className="brandName" style={{ marginLeft: 5 }}>
                    HRX
                  </span>
                </p>
                <span>Price: Rs. 220</span>
              </div>
            </div>

            <div className="orderedItemWrapper">
              <img
                src={itemImage}
                alt="Ordered Item"
                width={180}
                height={180}
              />

              <div className="orderDetail">
                <p className="orderDate">Ordered on 22-Dec-2021 </p>
                <span className="orderName">Seamless Printed Neck T-shirt</span>
                <div className="authorProfile">
                  <img
                    src={authorProfile}
                    alt="Author Profile"
                    width={40}
                    height={40}
                  />
                  <span>Lara</span>
                </div>
                <p>
                  Brand Name:{" "}
                  <span className="brandName" style={{ marginLeft: 5 }}>
                    HRX
                  </span>
                </p>
                <span>Price: Rs. 220</span>
              </div>
            </div>

            <p className="note">
              If you’ve any queries regarding your order, please contact
              support@ideashoots.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
