import React, { useContext, useEffect, useState } from "react";
import "./AllProducts.css";
import { ProductContext } from "../../context/ProductContext";
import axios from "axios";

const AllProducts = () => {
  const { 
    allProducts,
    setAllProducts,
    setCategories,
   } = useContext(ProductContext);

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      try {
        const [productsResponse, categoriesResponse] = await Promise.all([
          axios.get(`${URL}/get-all-products`),
          axios.get(`${URL}/categories`)
        ]);
        setAllProducts(productsResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchProductsAndCategories();
  }, []);  

  const URL = import.meta.env.VITE_API_URL;

  return (
    <div className="all-products">
      <h1>All Products</h1>
      <hr />
      <div className="product-card-container">
        {allProducts.map((product, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <div className="card-img">
                <img src={product.images[0]} alt="" />
              </div>
              <div className="card-info">
                <p className="text-title">{product.name}</p>
              </div>
            </div>
            <div className="card-footer">
              <p className="text-title">$ {product.price}</p>
              <p className="secondary-text">{product.category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
