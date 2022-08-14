import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/actions";

import { RiShoppingCart2Fill, RiCheckFill } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";

// import ProductImage from "../../assets/images/productImage.png";
import UserImage from "../../assets/images/profile.png";
import OtherProducts from "../OtherProducts";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
// import { ColorData } from "../../assets/data/ColorData";

import { SizeData } from "../../assets/data/SizeData";
import { ProductData } from "../../assets/data/ProductData";
import { ColorData } from "../../assets/data/ColorData";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const proid = useParams();
  const proDetail = ProductData.filter((x) => x.id == proid.id);
  const product = proDetail[0];
  // console.log(product);

  const dispatch = useDispatch();

  const handleCart = (product) => {
    dispatch(addItem(product));
  };

  const selectSize = (data) => {
    // console.log(data);
    setSelectedSize(data);
  };

  const selectColor = (data) => {
    setSelectedColor(data);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="productDetailWrapper">
          <div className="row">
            <div className="col">
              <img
                src={product.imgSrc}
                alt="ProductImage"
                className="firstImage"
                width={580}
                height={570}
              />

              <div className="smallImages">
                <img
                  src={product.imgSrc}
                  alt="ProductImage"
                  width={170}
                  height={170}
                />

                <img
                  src={product.imgSrc}
                  alt="ProductImage"
                  width={170}
                  height={170}
                  className="centerImage"
                />

                <img
                  src={product.imgSrc}
                  alt="ProductImage"
                  width={170}
                  height={170}
                />
              </div>
            </div>

            <div className="col">
              <div className="productDetails">
                <h2>{product.itemTitle}</h2>
                <h4>{product.itemName}</h4>

                <div className="userProfile">
                  <img src={UserImage} alt="UserImage" width={40} height={40} />
                  <span>Lara</span>
                </div>

                <div className="productData">
                  <p>Brand Name:</p>
                  <span>{product.brandName}</span>
                </div>

                <div className="productData">
                  <p>Exclusive price:</p>
                  <span> {product.itemSalePrice}/-</span>

                  <p className="sp">Original price: {product.itemPrice}/-</p>
                </div>

                <span>Description</span>
                <p className="descript">{product.description}</p>

                <span>Size:</span>
                <div className="sizeBtn">
                  {SizeData.map((e) => {
                    return (
                      <button
                        onClick={() => selectSize(e.sizeName)}
                        className={
                          selectedSize === e.sizeName ? "selected" : null
                        }
                        // className={e.available === false ? "disable" : ""}
                        key={e.id}
                      >
                        {e.sizeName}
                      </button>
                    );
                  })}
                </div>

                <br />

                <span>Color :</span>
                <div className="colorsBtn">
                  {ColorData.map((e) => {
                    return (
                      <button
                        onClick={() => selectColor(e.color)}
                        className={e.color}
                      >
                        {selectedColor === e.color ? (
                          <span>
                            <RiCheckFill size={30} color="#ffffff" />
                          </span>
                        ) : null}
                      </button>
                    );
                  })}

                  {/* <button className="clr2" />
                  <button className="clr3" />
                  <button className="clr4" />
                  <button className="clr5" /> */}
                  {/* <div class="form-group">
                    <input type="checkbox" id="clr1" />
                    <label for="clr1"></label>
                  </div> */}
                </div>

                <div className="twoButtons">
                  <Link to="/checkout" style={{ textDecoration: "none" }}>
                    <button
                      onClick={() => handleCart(product)}
                      className="buyButton"
                    >
                      <RiShoppingCart2Fill
                        size={20}
                        style={{ marginRight: "12px" }}
                      />
                      BUY NOW
                    </button>
                  </Link>

                  <button className="wishlistButton">
                    <FiHeart size={20} style={{ marginRight: "12px" }} />
                    WISHLIST
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <OtherProducts />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
