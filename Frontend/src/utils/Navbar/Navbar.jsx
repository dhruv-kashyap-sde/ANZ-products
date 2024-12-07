import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(
        ".scroll-container"
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
      <div className="logo">
        <img src="logo.png" alt="logo" />
      </div>
      <div className="navlinks">
      <NavLink exact to="/" activeClassName="active" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active" className="nav-link">
        About
      </NavLink>
      <NavLink to="/contact" activeClassName="active" className="nav-link">
        Contact
      </NavLink>
      <NavLink to="/products" activeClassName="active" className="nav-link">
        Products
      </NavLink>
      </div>

      <div className="sidebar-buttons">
        <button className="basic-button sidebar-login" onClick={() => navigate("/login")}>
          Login
        </button>
        <div onClick={toggleSidebar} className="hamburger">
          <i class="ri-menu-line basic-button"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
