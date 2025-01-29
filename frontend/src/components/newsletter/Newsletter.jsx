import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h1>Get 20% OFF On Your First Purchase</h1>
        <p>Sign up for our newsletter and never miss any offers</p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">
            REGISTER NOW
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;