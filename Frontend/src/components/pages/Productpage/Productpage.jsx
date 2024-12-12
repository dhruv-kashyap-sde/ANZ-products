import React, { useEffect, useState } from 'react'
import './Productpage.css'
import ProductCard from './ProductCard';
import axios from 'axios';

const Productpage = () => {

  const URL = import.meta.env.VITE_API_URL;
  const [products, setProducts] = useState([]);
  console.log(products);
  

  const fetchProducts = async () => {
    try {
      let response = await axios.get(`${URL}/get-all-products`);
      setProducts(response.data);
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
            {products.map(product => (
              <ProductCard product={product}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Productpage;