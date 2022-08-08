import React from "react";

const OtherCards = (props) => {
  return (
    <div className="otherPWrap">
      <img src={props.otherCard.imgSrc} alt={props.otherCard.imgAlt} />

      <div className="otherPdetails">
        <span>{props.otherCard.itemName}</span>
        <p>
          {props.otherCard.itemSalePrice} <del>{props.otherCard.itemPrice}</del>
        </p>

        <button className="otherBuy">{props.otherCard.button}</button>
      </div>
    </div>
  );
};

export default OtherCards;
