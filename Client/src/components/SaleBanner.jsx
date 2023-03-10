import React from "react";
import sale from "../assets/sale.png";

export const SaleBanner = () => {
  return (
    <div className="banner sale__banner">
      <div className="banner__left">
        <span className="">30% OFF*</span>
        <span className="">YEAR-END SALE</span>
        <span>* terms and conditions applied</span>
      </div>
      <div className="banner__right">
        <img src={sale} alt="" />
      </div>
    </div>
  );
};
