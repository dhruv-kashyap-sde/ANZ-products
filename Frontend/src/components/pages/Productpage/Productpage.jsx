import React, { useContext, useEffect, useState } from 'react'
import './Productpage.css'
import ProductCard from './ProductCard';
import axios from 'axios';
import { ProductContext } from '../../../context/ProductContext';

const Productpage = () => {

  const URL = import.meta.env.VITE_API_URL;
  const {
    allProducts,
    setAllProducts,
    categories,
    setCategories
  } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      try {
        const [productsResponse, categoriesResponse] = await Promise.all([
          axios.get(`${URL}/get-all-products`),
          axios.get(`${URL}/categories`)
        ]);
        setAllProducts(productsResponse.data);
        setCategories(categoriesResponse.data);
        setFilteredProducts(productsResponse.data); // Initialize filtered products
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchProductsAndCategories();
  }, []);  

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const filtered = allProducts.filter(product => product.category.name === category.name);
    setFilteredProducts(filtered.length > 0 ? filtered : []);
  };

  const defaultSorting = () => {
    setFilteredProducts(allProducts);
    setActiveCategory(null);
  }
  
  // dummy data
//   {
//     "_id": "676174e91ff9fd5ee25c0ad9",
//     "name": "Hanging Bells",
//     "description": "Hanging bells made for decoration purpose only",
//     "price": 250,
//     "category": {
//         "_id": "67504ec9de8073ccf8c8b145",
//         "name": "Home-Decor"
//     },
//     "images": [
//         "http://192.168.1.171:5000/uploads/1734440169317.jpg"
//     ],
//     "createdAt": "2024-12-17T12:56:09.332Z",
//     "__v": 0
// }
  return (
    <>
      <div className="curved-banner scroll-container">
        OUR PRODUCTS
      </div>
      <div className="product-container">
        <div className="product-sidebar">
          <p>Sort by Category</p>
          <hr />
          <ul>
            <li onClick={defaultSorting}>All Products</li>
            {categories.length !== 0 
            ?categories.map(category => (
              <li key={category._id} className={activeCategory === category ? 'active' : ''} onClick={() => handleCategoryClick(category)}>{category.name}</li>
            ))
            : <li>Loading...</li>
            }
          </ul>
        </div>
        <div className="product-list-container">
          <div className="product-card-container">
          {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products in this category</p>
        )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Productpage;