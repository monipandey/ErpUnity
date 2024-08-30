import React, { useState } from "react";
import "../App.css";

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleLoginClick = () => {
    setIsLoginMode(true);
  };

  const handleSignupClick = () => {
    setIsLoginMode(false);
  };

  return (
    <div className="main-container">
      <div className="wrapper">
        <div className="title-text">
          <div className={`title ${isLoginMode ? "login" : "signup"}`}>
            Login Form
          </div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              checked={isLoginMode}
              readOnly
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={!isLoginMode}
              readOnly
            />
            <label
              htmlFor="login"
              className="slide login"
              onClick={handleLoginClick}
            >
              Admin
            </label>
            <label
              htmlFor="signup"
              className="slide signup"
              onClick={handleSignupClick}
            >
              Employee
            </label>
            <div
              className="slider-tab"
              style={{ left: isLoginMode ? "0%" : "50%" }}
            ></div>
          </div>
          <div className="form-inner">
            <form className={`login ${isLoginMode ? "" : "hidden"}`}>
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <a href="/adminDashboard">
                  <input type="submit" value="Login" />
                </a>
              </div>
              <div className="signup-link">
                Not a member? <a href="/signup">Signup now</a>
              </div>
            </form>

            <form className={`signup ${!isLoginMode ? "" : "hidden"}`}>
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member? <a href="/signup">Signup now</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
