import React, { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <div className="signup__section">
      <div className="common_section">
        <h1>Account</h1>
      </div>
      <div className="signup__container">
        <div className="signup_title">
          <div>
            <Link to="/login">
              <h1
                className={activeTab === "login" ? "active" : ""}
                onClick={() => setActiveTab("login")}
              >
                Log In
              </h1>
            </Link>
          </div>
          <div>
            <Link>
              <h1
                className={activeTab === "signup" ? "active" : ""}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </h1>
            </Link>
          </div>
        </div>
        <div className="signup_socials">
          <button>
            <FaGoogle /> Google
          </button>
          <button>
            <FaFacebookF /> Facebook
          </button>
        </div>
        <div className="signup_form">
          <h1>Or Sign-Up With Email</h1>
          <form>
            <input type="text" placeholder="Enter Your Full Name" />
            <input type="text" placeholder="Enter Your Username" />
            <input type="email" placeholder="Enter Your Email" />
            <input type="password" placeholder="Enter Your Password" />
            <input type="number" placeholder="Enter Your Phone Number" />
            <input type="text" placeholder="Enter Your Full Address" />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
