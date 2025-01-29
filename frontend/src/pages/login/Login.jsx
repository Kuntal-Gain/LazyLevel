import React, { useState } from "react";
import "./Login.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="login__section">
      <div className="common_section">
        <h1>Account</h1>
      </div>
      <div className="login__container">
        <div className="login_title">
          <div>
            <Link>
              <h1
                className={activeTab === "login" ? "active" : ""}
                onClick={() => setActiveTab("login")}
              >
                Log In
              </h1>
            </Link>
          </div>
          <div>
            <Link to="/signup">
              <h1
                className={activeTab === "signup" ? "active" : ""}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </h1>
            </Link>
          </div>
        </div>
        <div className="login_socials">
          <button>
            <FaGoogle /> Google
          </button>
          <button>
            <FaFacebookF /> Facebook
          </button>
        </div>
        <div className="login_form">
          <h1>Or Log-In With Email</h1>
          <form>
            <input type="email" placeholder="Enter Your Email" />
            <input type="password" placeholder="Enter Your Password" />
            <button>Log In</button>
          </form>
          <div className="forgot_password">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
