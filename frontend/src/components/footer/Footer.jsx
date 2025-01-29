import React from "react";
import { FaFacebook, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>LazyLevel</h2>
          <div className="footer-socials">
          <i><FaFacebook /></i>
          <i><FaXTwitter /></i>
          <i><FaPinterest /></i>
          <i><FaInstagram /></i>
          <i><FaYoutube /></i>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h3>QUICK LINKS</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Offer</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3>ABOUT</h3>
            <ul>
              <li>How It Work</li>
              <li>Our Packages</li>
              <li>Promotions</li>
              <li>Refer A Friend</li>
            </ul>
          </div>
          <div>
            <h3>HELP CENTER</h3>
            <ul>
              <li>Payments</li>
              <li>Shipping</li>
              <li>Product Returns</li>
              <li>FAQs</li>
              <li>Checkout</li>
              <li>Other Issues</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 LAZYLEVEL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;