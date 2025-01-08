import React from "react";
import "../Pages/css/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button>Continue</button>
        </div>

        <p className="login-signup-text">
          Already have an account? <span>Login here</span>
        </p>
        <div className="login-signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
