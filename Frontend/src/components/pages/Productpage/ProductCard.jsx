import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card-body">
        <div className="product-card-img">
          <img alt="" />
        </div>
      </div>
        <div className="product-card-info">
          <h3>product.name</h3>
        </div>
      <div className="product-card-footer">
        <p className="secondary-text">product.price</p>
      </div>
      <button className="mail-button">
        Get <i class="ri-mail-line"></i>
      </button>
    </div>
  );
};

export default ProductCard;
