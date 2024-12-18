import React, { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import QuotationPopup from "../../../utils/Popups/QuotationPopup";

const ProductCard = ({ product }) => {

  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  return (
    <>
    <div className="product-card">
      <div className="product-card-img">
        <Link to={`/products/${product._id}`}>
          <img src={product.images[0]} alt={product.name} />
        </Link>
      </div>
      <div className="product-card-info">
        <Link to={`/products/${product._id}`}>
          <h3>{product.name}</h3>
        </Link>
      </div>
      <div className="product-card-footer">
        <p className="secondary-text">₹ {product.price}</p>
      </div>
      <button onClick={handleOpenPopup} className="mail-button">
        Get <i class="ri-mail-line"></i>
      </button>
    </div>
    {isPopupVisible && <QuotationPopup product={product} onClose={handleClosePopup} />}    
    </>
  );
};

export default ProductCard;
