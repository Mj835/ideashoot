import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div key={props.card.id} className="productCard">
      <img src={props.card.imgSrc} alt={props.card.imgAlt} />

      <div className="cardDetail">
        <p>{props.card.itemName}</p>

        <span className="productPrice">
          SOL {props.card.itemSalePrice}
          <br />
          <del>SOL {props.card.itemPrice}</del>
        </span>

        <Link to={`/product-detail/${props.card.id}`}>
          <button className="buyBtn">{props.card.button}</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
