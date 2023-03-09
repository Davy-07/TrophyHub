import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TrophyHubLogo from "../assets/trophies-hub-logo.png";

export const Signup = () => {
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    console.log(username);
    const res = await fetch("http://localhost:3000/api/v1/user/register", {
      method: "POST",
      body: JSON.stringify({
        name: username,
        email: email,
        phone: `+91${phone}`,
        pwd: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result.state_id);
    navigate("/verification", {
      state: { stateId: result.state_id, userId: result },
    });
    console.log(result);
  }

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <div className="wrapper">
        <div className="form">
          <img src={TrophyHubLogo} alt="" className="logo" />
          <span className="form__title">Sign-up</span>
          <form onSubmit={handleSignup}>
            {/* Textfields */}
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="form__field"
              type="text"
              placeholder="User name"
            />
            <input
              onChange={(e) => setPhone(e.target.value)}
              className="form__field"
              type="text"
              placeholder="Phone Number"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="form__field"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="form__field"
              type="password"
              placeholder="Password"
            />
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
