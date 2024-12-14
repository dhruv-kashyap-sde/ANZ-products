import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import { ProductContext } from "../../../context/ProductContext";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${URL}/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="curved-banner scroll-container">OUR PRODUCTS</div>
      <div className="single-product">
        <div className="single-product-img">
          <img src={`${product.images[0]}`} alt={product.name} />
        </div>
        <div className="single-product-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span>${product.price}</span>
          <button>Do Something</button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
