import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(
        ".hero-section-container"
      ).offsetHeight;
      setScrolled(window.scrollY > heroHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={`navbar heading-text ${scrolled ? "scrolled" : ""}`}>
      {/* <Sidebar isOpen={isOpen}/> */}
      <div className="logo">logo </div>
      <div className="navlinks">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
        {/* <button className="basic-button" onClick={() => navigate("/login")}>
          Login
        </button> */}
      </div>

      <div className="sidebar-buttons">
        {/* <button className="basic-button sidebar-login" onClick={() => navigate("/login")}>
          Login
        </button> */}
        <div onClick={toggleSidebar} className="hamburger">
          <i class="ri-menu-line basic-button"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
