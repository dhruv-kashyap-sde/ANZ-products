import React from "react";
import "./AboutSection.css";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="svg-container">
        <img src="svg-design.png" alt="" />
      </div>
      <div className="about-section-container">
        
        <div className="about-section-left">
          
          <img
            src="logo_transparent.png"
            alt="ANZ Products Ltd Logo"
            className="about-section-logo"
          />
        </div>
        <div className="about-section-right">
          <div className="about-section-heading">ABOUT ANZ PRODUCTS</div>
          <div className="about-section-text italic-text">
            ANZ PRODUCTS LTD TAKES PRIDE IN BEING A RENOWNED MANUFACTURER AND
            EXPORTER OF SUPERIOR METAL HANDICRAFTS, HOME DECOR, AND FURNITURE.
            OPERATING IN BOTH INDIA AND THE UK, OUR DIVERSE PRODUCT SELECTION
            MARRIES TRADITIONAL ARTISANSHIP WITH CONTEMPORARY DESIGN. OUR
            CATALOG INCLUDES WOODEN AND METAL FURNITURE, LIGHTING SOLUTIONS,
            DECORATIVE ITEMS, BARWARE, KITCHENWARE, AMONG OTHERS. SKILLED
            ARTISANS CAREFULLY CRAFT EACH PRODUCT, GUARANTEEING EXCEPTIONAL
            QUALITY AND METICULOUS ATTENTION TO DETAIL. <br />
            <br /> OUR DEDICATION TO SUSTAINABILITY AND INNOVATION DISTINGUISHES
            US, AS ECO-FRIENDLY PRACTICES ARE FUNDAMENTAL TO OUR PRODUCTION
            PROCESS. WHETHER SEEKING TO ENHANCE YOUR HOME DECOR OR FIND
            DISTINCTIVE GIFTING OPTIONS, ANZ PRODUCTS LTD OFFERS SOLUTIONS THAT
            ACCOMMODATE DIVERSE PREFERENCES AND REQUIREMENTS. <br />
            <br /> EXPLORE OUR COLLECTIONS TODAY AND DISCOVER HOW WE CAN BRING
            ELEGANCE AND SOPHISTICATION INTO YOUR SPACES.
          </div>
          <button onClick={() => navigate("/about")} className="basic-button">Know more</button>
        </div>
      </div>
      <div className="svg-container">
        <img src="svg-design.png" alt="" />
      </div>
    </>
  );
};

export default AboutSection;
