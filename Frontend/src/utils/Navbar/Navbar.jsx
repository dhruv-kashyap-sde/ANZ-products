import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.querySelector(".scroll-container").offsetHeight;
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
    <>
      <nav className={`navbar heading-text ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
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
          <div onClick={toggleSidebar} className="hamburger">
            <i class="ri-menu-line basic-button"></i>
          </div>
        </div>
      {isOpen && <Sidebar isOpen={isOpen} />}
      </nav>
    </>
  );
};

export default Navbar;
