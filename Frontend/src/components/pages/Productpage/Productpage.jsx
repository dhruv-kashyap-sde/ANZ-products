import React, { useContext, useEffect, useState } from 'react'
import './Productpage.css'
import ProductCard from './ProductCard';
import axios from 'axios';
import { ProductContext } from '../../../context/ProductContext';

const Productpage = () => {

  const URL = import.meta.env.VITE_API_URL;
  const {
    allProducts,
    setAllProducts
  } = useContext(ProductContext);

  const fetchProducts = async () => {
    try {
      let response = await axios.get(`${URL}/get-all-products`);
      setAllProducts(response.data);
    } catch (error) {
      console.log('Error fetching data', error); 
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <>
      <div className="curved-banner scroll-container">
        OUR PRODUCTS
      </div>
      <div className="product-container">
        <div className="product-sidebar">
          <p>title</p>
          <hr />
          <ul>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
          </ul>
        </div>
        <div className="product-list-container">
          <div className="product-card-container">
            {allProducts.length !== 0 
              ? allProducts.map(product => (
              <ProductCard product={product}/>
            ))
            : <h1>Loading...</h1>
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default Productpage;