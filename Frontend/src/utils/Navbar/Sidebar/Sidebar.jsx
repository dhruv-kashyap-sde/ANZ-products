import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
        <div className="sidebar-container">
            <div className="sidebar-links">
                <a href="/" className="sidebar-link">Home</a>
                <a href="/about" className="sidebar-link">About</a>
                <a href="/contact" className="sidebar-link">Contact</a>
                <a href="/products" className="sidebar-link">Products</a>
            </div>
        </div>
    </>
  )
}

export default Sidebar