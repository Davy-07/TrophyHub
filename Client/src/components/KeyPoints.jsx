import React from "react";
import customized from "../assets/personalized.png";
import trust from "../assets/Trust.png";
import affordable from "../assets/dollar_coin.png";
import shipping from "../assets/Shipped.png";
export const KeyPoints = () => {
  return (
    <div className="banner points__banner">
      <div className="key__points">
        <img src={customized} alt="" />
        <span>Customizable</span>
      </div>
      <div className="key__points">
        <img src={trust} alt="" />
        <span>Affordable Bulk Discounts</span>
      </div>
      <div className="key__points">
        <img src={affordable} alt="" />
        <span>Trustworthy</span>
      </div>
      <div className="key__points">
        <img src={shipping} alt="" />
        <span>Free Shipping Across India</span>
      </div>
    </div>
  );
};
