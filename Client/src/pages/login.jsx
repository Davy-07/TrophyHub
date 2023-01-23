import React from "react";
import { Link } from "react-router-dom";
import { AuthSidebar } from "../components/AuthSidebar";
export const Login = () => {
  return (
    <div>
      <div className="wrapper">
        <AuthSidebar />
        <div className="form">
          <span className="form__logo">Trophy Hub</span>
          <span className="form__title">Log in</span>
          <form action="">
            {/* Textfields */}
            <input className="form__field" type="email" placeholder="email" />
            <input
              className="form__field"
              type="password"
              placeholder="password"
            />
            {/* Log-in Button */}
            <button>Log in</button>
          </form>
          <p className="form__switch">
            Already have an Account?{" "}
            <Link className="switch__link" to="/sign-up">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
// <div class="container">
//   <h1 id="heading">Form validation using javascript</h1>
//   <form novalidate action="" id="info">
//     <h1>Registration</h1>
//     <div class="fields">
//       <label for="name">User-name</label>
//       <input
//         type="text"
//         name="name"
//         id="name"
//         value=""
//         placeholder="steve rogers"
//       />
//       <div class="error"></div>
//     </div>
//     <div class="fields">
//       <label for="age">Age</label>
//       <input type="text" name="age" id="age" value="" placeholder="112" />
//       <div class="error"></div>
//     </div>
//     <div class="fields">
//       <label for="email">Email</label>
//       <input
//         type="email"
//         name="email"
//         id="email"
//         value=""
//         placeholder="firstavenger@gmail.com"
//       />
//       <div class="error"></div>
//     </div>
//     <div class="fields">
//       <label for="pass">Password</label>
//       <input
//         type="password"
//         name="pass"
//         id="pass"
//         value=""
//         placeholder="must have atleast 6 characters"
//       />
//       <div class="error"></div>
//     </div>
//     <div class="fields">
//       <label for="confirm">Confirm Password</label>
//       <input
//         type="password"
//         name="confirm"
//         id="confirm"
//         value=""
//         placeholder="Retype password"
//       />
//       <div class="error"></div>
//     </div>
//     <button id="btn" type="submit">Submit</button>
//   </form>
// </div>
