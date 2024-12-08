import React from 'react'
import './Productpage.css'
import ProductCard from './ProductCard';

const Productpage = () => {
  return (
    <>
      <div className="curved-banner scroll-container">
        OUR PRODUCTS
      </div>
      <div className="product-container">
        <div className="product-sidebar">
          <ul>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
          </ul>
        </div>
        <div className="product-list-container">
          <h1>All Products</h1>
          <hr />
          <div className="product-card-container">
            <ProductCard/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Productpage;