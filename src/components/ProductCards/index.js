import React from "react";
import Card from "./card";
import { ProductData } from "../../assets/data/ProductData";

const ProductCards = () => {
  return (
    <div className="container">
      <div className="productCardWrapper">
        {ProductData.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductCards;
