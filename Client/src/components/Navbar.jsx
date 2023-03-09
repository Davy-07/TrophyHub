import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="">Logo</div>
      <input type="text" />
      <Link>Login / Register</Link>
      <Link>My Cart</Link>
      <Link>My Wishlist</Link>
    </div>
  );
};
