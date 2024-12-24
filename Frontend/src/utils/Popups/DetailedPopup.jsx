import React from "react";
import "./DetailedPopup.css";

const DetailedPopup = ({ inquiry, close }) => {
  return (
    <>
      <div className="detailed-popup-overlay">
        <div className="detailed-popup-container">
          <div className="product-section">
            <div className="product-image">
              <img src={inquiry.product.images[0]} alt={inquiry.product.name} />
            </div>
            <div className="product-details">
              <h3 className="italic-text">
                {inquiry.product.name} <span>${inquiry.product.price}</span>
              </h3>
              <p className="secondary-text italic-text">Category: {inquiry.product.category.name}</p>
              <p className="italic-text">Product ID: {inquiry.product._id}</p>
              <p className="client-message italic-text">{inquiry.product.description}</p>
            </div>
          </div>
          <hr className="divider"></hr>
          <div className="client-section">
            <div className="client-header">
              <h3>
                {inquiry.name} <span className="client-date">{inquiry.date}</span>
              </h3>
            </div>
            <p className="client-email italic-text">{inquiry.email}</p>
            <p className="client-phone italic-text">{inquiry.phone}</p>
            <p className="client-message italic-text">{inquiry.message}</p>
          </div>
          <button className="basic-button" onClick={close}>Close</button>
        </div>
      </div>
    </>
  );
};

export default DetailedPopup;
