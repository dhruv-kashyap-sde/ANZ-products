import React, { useEffect, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.png",
    "img4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section-container scroll-container heading-text">
      <div className="hero-section-image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`hero-section-image ${index === currentImage ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="hero-section-overlay">
        <div className="overlay">
          <h1>ANZ PRODUCTS LTD</h1>
          <p>Innovative Craftsmanship, Sustainable Solutions</p>
          <button className="basic-button">View Products</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
