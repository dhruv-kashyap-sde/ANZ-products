import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card-body">
        <div className="product-card-img">
          <img alt="" />
        </div>
        <div className="product-card-info">
          <p className="text-title">product.name</p>
          <p className="text-body">product.description</p>
        </div>
      </div>
      <div className="product-card-footer">
        <p className="text-title">product.price</p>
        <p className="secondary-text">product.category.name</p>
      </div>
    </div>
  );
};

export default ProductCard;
