import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import img1 from '../../../../public/img1.jpg';
import img2 from '../../../../public/img2.jpg';
import img3 from '../../../../public/img3.png';
import img4 from '../../../../public/img4.jpg';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    img1,
    img2,
    img3,
    img4,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section-container heading-text">
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
