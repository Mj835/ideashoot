import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/actions";

import { RiShoppingCart2Fill } from "react-icons/ri";

import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

import { SizeData } from "../../assets/data/SizeData";
import { ProductData } from "../../assets/data/ProductData";
// import { ColorData } from "../../assets/data/ColorData";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("");
  // const [selectedColor, setSelectedColor] = useState("");

  const proid = useParams();
  const proDetail = ProductData.filter((x) => x.id == proid.id);
  const product = proDetail[0];

  const dispatch = useDispatch();

  const handleCart = (product) => {
    dispatch(addItem(product));
  };

  const selectSize = (data) => {
    setSelectedSize(data);
  };

  // const selectColor = (data) => {
  //   setSelectedColor(data);
  // };

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

                {/* <span>Color :</span>
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

                </div> */}

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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
