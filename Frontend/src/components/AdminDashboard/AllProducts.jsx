import React, { useEffect, useState } from 'react'
import './AllProducts.css'
import axios from 'axios'

const AllProducts = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        let response = await axios.get(`${import.meta.env.VITE_API_URL}/get-all-products`);
        setProducts(response.data);
      } catch (error) {
        console.log('Error fetching products: ' + error);
      }
    }

    fetchAllProducts();
  }, [])
  return (
    <div className='all-products'>
        <h1>All Products</h1>
        <hr />
        <div className="product-card-container">
           {Products.map((product, index) => (
            <div className="card">
              <div className="card-img">
                <img src={product.images[0]} alt="" />
              </div>
              <div className="card-info">
                <p className="text-title">{product.name}</p>
                <p className="text-body">{product.description}</p>
              </div>
              <div className="card-footer">
                <span className="text-title">{product.price}</span>
              </div>
           </div>
           ))}
        </div>
    </div>
  )
}

export default AllProducts