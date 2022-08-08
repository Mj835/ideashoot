import React from "react";
import { OtherProductData } from "../../assets/data/OtherProductData";
import OtherCards from "./otherCard";

const OtherProducts = () => {
  return (
    <div className="otherProducts">
      <h1>Other products from Lara</h1>

      <div className="otherProductWrapper">
        {OtherProductData.map((otherCard) => {
          return <OtherCards otherCard={otherCard} key={otherCard.id} />;
        })}
      </div>
    </div>
  );
};

export default OtherProducts;
