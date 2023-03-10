import React from "react";
import instagram from "../assets/instagram.png";
import { SearchBar } from "./SearchBar";
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    // [ ] : Make Footer Responsive
    <div className="footer">
      <div className="newsletter">
        <span>Sign up to our News Letter</span>
        <SearchBar />
      </div>
      <div className="footer-sec-padding">
        <div className="footer-links">
          <div className="footer-links-div">
            <h4>MY ACCOUNT</h4>
            <a href="/">
              <p>My Account</p>
            </a>
            <a href="/">
              <p>My Orders</p>
            </a>
            <a href="/">
              <p>Transactions</p>
            </a>
          </div>
          <div className="footer-links-div">
            <h4>SHOP</h4>
            <a href="/">
              <p>Awards</p>
            </a>
            <a href="/">
              <p>Medals</p>
            </a>
            <a href="/">
              <p>Momento</p>
            </a>
            <a href="/">
              <p>Wooden Plaques</p>
            </a>
          </div>
          <div className="footer-links-div">
            <h4>ABOUT</h4>
            <a href="/">
              <p>About us</p>
            </a>
            <a href="/">
              <p>Policies</p>
            </a>
          </div>
          <div className="footer-links-div">
            <h4>HELP</h4>
            <a href="/">
              <p>Help Center</p>
            </a>
            <a href="/">
              <p>FAQs</p>
            </a>
          </div>
          <div className="footer-links-div">
            <h4>CONTACT US</h4>
            <a href="/">
              <p>+91 123456789</p>
            </a>
            <a href="/">
              <p>trophieshub@gmail.com</p>
            </a>
            <a className="social" href="/">
              <img src={instagram} alt="" />
              <p>@TrophyHub</p>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-below">
        <div className="footer-below-padding">
          <div className="footer-copyright">
            <div className="inr">India | INR ₹</div>
            <div>@{year} TrophiesHub.Inc</div>
          </div>
        </div>
      </div>
    </div>
  );
};
