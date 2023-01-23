import React from "react";
import { Link } from "react-router-dom";
import addAvatar from "/assets/addAvatar.png";
import { AuthSidebar } from "../components/AuthSidebar";
export const Signup = () => {
  return (
    <div>
      <div className="wrapper">
        <AuthSidebar />
        <div className="form">
          <span className="form__logo">Trophy Hub</span>
          <span className="form__title">Sign-up</span>
          <form action="">
            {/* Textfields */}
            <input
              className="form__field"
              type="text"
              placeholder="User name"
            />
            <input className="form__field" type="email" placeholder="Email" />
            <input
              className="form__field"
              type="password"
              placeholder="Password"
            />
            {/* Choose a file */}
            <input id="file" type="file" className="file__input" />
            <label className="file__label" htmlFor="file">
              <img src={addAvatar} alt="Add an Avatar" />
              <span>Add an avatar</span>
            </label>
            {/* Sign-up Button */}
            <button>Sign up</button>
          </form>
          <p className="form__switch">
            Don't have an Account?{" "}
            <Link className="switch__link" to="/log-in">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
