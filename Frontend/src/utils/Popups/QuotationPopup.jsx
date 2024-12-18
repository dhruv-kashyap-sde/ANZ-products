import React, { useState } from "react";
import "./QuotationPopup.css";

const QuotationPopup = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="popup-title">{product.name}</h2>
        <hr />

        <div className="popup-content">
          <div className="image-container">
            <img
              src={product.images[0]} // Replace with your image path
              alt={product.name}
            />
          </div>
          <div className="form-container">
            <p className="product-description">{product.description}</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                maxLength={10}
                name="phone"
                placeholder="Enter mobile number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <button type="submit" className="basic-button">
                Send A Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationPopup;
