import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer-waves">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
          </defs>
          <g className="parallax">
            <use to="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use to="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use to="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use to="#gentle-wave" x="48" y="7" fill="#070713" />
          </g>
        </svg>
      </div>
      <div className="footer-content">
        <div className="footer-section logo">
          <img src="/logo.png" alt="ANZ Products LTD" />
        </div>
        <div className="footer-section informations">
          <h3>INFORMATIONS</h3>
          <ul>
            <li><i class="ri-arrow-right-s-line"></i>&nbsp;<Link to="/shipping-policy">Shipping Policy</Link></li>
            <li><i class="ri-arrow-right-s-line"></i>&nbsp;<Link to="/returns-refunds">Returns & Refunds</Link></li>
            <li><i class="ri-arrow-right-s-line"></i>&nbsp;<Link to="/cookies-policy">Cookies Policy</Link></li>
            <li><i class="ri-arrow-right-s-line"></i>&nbsp;<Link to="/faq">Frequently Asked Questions</Link></li>
            <li><i class="ri-arrow-right-s-line"></i>&nbsp;<Link to="/dashboard">Admin</Link></li>
          </ul>
        </div>
        <div className="footer-section company">
          <h3>COMPANY</h3>
          <ul>
            <li><i class="ri-arrow-right-s-line"></i>&nbsp;<Link to="/about">About Us</Link></li>
            <li><i class="ri-arrow-right-s-line"></i>&nbsp;<Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><i class="ri-arrow-right-s-line"></i>&nbsp;<Link to="/terms-conditions">Terms & Conditions</Link></li>
            <li><i class="ri-arrow-right-s-line"></i>&nbsp;<Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section follow-us">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <Link target='_blank' to="https://www.facebook.com"><i class="ri-facebook-fill"></i></Link>
            <Link target='_blank' to="https://www.instagram.com"><i class="ri-instagram-line"></i></Link>
            <Link target='_blank' to="https://www.linkedin.com"><i class="ri-linkedin-fill"></i></Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 ANZ Products LTD. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
