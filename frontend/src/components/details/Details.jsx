import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";
import { CiDollar } from "react-icons/ci";
import "./Details.css";

const features = [
  {
    icon: <FaShoppingCart />,
    title: "Free Delivery",
    description: "Enjoy fast and free shipping on all orders, no matter the size or location.",
  },
  {
    icon: <MdOutlineVerifiedUser />,
    title: "Secure Payment",
    description: "Shop with confidence knowing your transactions are safe and protected.",
  },
  {
    icon: <LiaAwardSolid />,
    title: "Quality Guarantee",
    description: "We ensure top-notch quality in every product to meet your expectations.",
  },
  {
    icon: <CiDollar />,
    title: "Daily Offer",
    description: "Discover huge deals and discounts every day on your favorite items.",
  },
];

const Details = () => {
    return (
        <div className="features-section">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      )
}

export default Details;
