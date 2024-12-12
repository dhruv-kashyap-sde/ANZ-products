import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">

        <div className="product-card-img">
          <img src={product.images[0]} alt={product.name} />
      </div>
      <div className="product-card-info">
        <h3>{product.name}</h3>
      </div>
      <div className="product-card-footer">
        <p className="secondary-text">₹ {product.price}</p>
      </div>
      <button className="mail-button">
        Get <i class="ri-mail-line"></i>
      </button>
    </div>
  );
};

export default ProductCard;
