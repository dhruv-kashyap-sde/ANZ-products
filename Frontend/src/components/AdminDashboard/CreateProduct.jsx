import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CreateProduct.css";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    categoryID: '',
    image: null,
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        let response = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
        setCategories(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.log(`Error fetching Categories: ${error}`);
      }
    }

    getCategories();
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setProduct({
      ...product,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('categoryID', product.categoryID);
    formData.append('image', product.image);

    try {
      const response = await axios.post('http://localhost:5000/api/add-products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error adding product', error);
    }
  };


  return (
    <>
      <div className="create-product-container">
        <h1>Create Product</h1>
        <hr />
        <div className="product-details">
          <form onSubmit={handleSubmit} className="product-form">
            <p>
              <span>Product Image</span>
              <input
                required
                type="file"
                name="image"
                onChange={handleImageChange}
              />
            </p>
            <input
              required
              type="text"
              name="name"
              placeholder="Product Name"
              value={product.name}
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="Product Description"
              value={product.description}
              onChange={handleChange}
            ></textarea>
            <input
              required
              type="number"
              name="price"
              min={0}
              placeholder="Product Price"
              value={product.price}
              onChange={handleChange}
            />
            <select
              name="categoryID"
              value={product.categoryID}
              onChange={handleChange}
            >
              <option defaultChecked value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category._id}>{category.name}</option>
              ))}
            </select>
            <button type="submit" className="basic-button">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;