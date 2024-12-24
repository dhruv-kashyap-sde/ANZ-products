import React from "react";
import "./DetailedPopup.css";

const DetailedPopup = () => {
  return (
    <>
      <div className="detailed-popup-overlay">
        <div className="detailed-popup-container">
          <div className="product-section">
            <div className="product-image">IMAGE</div>
            <div className="product-details">
              <h3 className="italic-text">Product Name <span >$250</span></h3>
              
              <p className="secondary-text italic-text">Category: HOME DECOR</p>
              <p className="italic-text">Product ID:</p>
              <p className="client-message italic-text">Description</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="client-section">
            <div className="client-header">
              <h3>Client Name <span className="client-date">24-12-23</span></h3>
            </div>
            <p className="client-email italic-text">client@email.com</p>
            <p className="client-phone italic-text">+91-1234567890</p>
            <p className="client-message italic-text"> Message</p>
          </div>
          <button className="basic-button">Close</button>
        </div>
      </div>
    </>
  );
};

export default DetailedPopup;
