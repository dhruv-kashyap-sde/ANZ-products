import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
        <div className="sidebar-container">
            <div className="sidebar-links">
                <Link to="/" className="sidebar-link">Home</Link>
                <Link to="/about" className="sidebar-link">About</Link>
                <Link to="/contact" className="sidebar-link">Contact</Link>
                <Link to="/products" className="sidebar-link">Products</Link>
            </div>
        </div>
    </>
  )
}

export default Sidebar