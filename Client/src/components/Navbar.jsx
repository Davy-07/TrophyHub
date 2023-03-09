import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TrophyHubLogo from "../assets/trophies-hub-logo.png";

export const Navbar = () => {
  //   Logs out & Removes access token from local storage
  async function handleLogout() {
    localStorage.removeItem("token");
    const token = localStorage.getItem("token");
    console.log(`token - ${token} Logged out`);
    navigate("/");
  }

  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img src={TrophyHubLogo} className="" />
      <div className="nav-search">
        <input type="text" />
        <button className="btn">Search</button>
      </div>
      <div className="nav-links">
        <Link>Login / Register</Link>
        <Link>My Cart</Link>
        <Link>My Wishlist</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};
