import React from "react";
import monotshirt from "../../assets/monotshirts.jpg";
import graphichoodie from "../../assets/graphichoodies.jpg";
import animetshirt from "../../assets/animetshirt.png";
import "./Category.css";

const Category = () => {
  const products = [
    { 
        id: 1, 
        title: "ANIME T-SHIRTS", 
        image: animetshirt 
    },
    { 
        id: 2, 
        title: "MONO T-SHIRTS", 
        image: monotshirt 
    },
    { 
        id: 3, 
        title: "GRAPHIC HOODIES", 
        image: graphichoodie 
    }
  ];

  return (
    <div className="product-section">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="overlay">
            <h3 className="product-title">{product.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
