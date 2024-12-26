import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./EditProduct.css";
import { ProductContext } from "../../context/ProductContext";
import toast from "react-hot-toast";

const EditProduct = () => {
  const URL = import.meta.env.VITE_API_URL;
  const { categories, allProducts, setAllProducts, setCategories } = useContext(ProductContext);

  
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

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    images: [],
  });

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category._id,
      images: product.images,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${URL}/products/${selectedProduct._id}`,
        formData
      );
      console.log("Product updated:", response.data);
      toast.success("Product updated successfully");
      setSelectedProduct(null);
      // Optionally refresh the product list or notify the user
    } catch (error) {
      console.error("Error updating product", error);
      toast.error("Error updating product");
    } finally {
      let response = await axios.get(`${URL}/get-all-products`);
      setAllProducts(response.data);
    }
  };

  return (
    <div className="edit-product-container">
      <h1>Edit Product</h1>
      <hr />
      <div className="product-list">
        {allProducts.length !== 0 ? (
          allProducts.map((product) => (
            <div className="card">
              <div
                onClick={() => handleProductSelect(product)}
                className="edit-button"
              >
                <i class="ri-pencil-line"></i>
              </div>
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
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {selectedProduct && (
        <div className="edit-product-form-overlay">
          <form onSubmit={handleSubmit} className="edit-product-form">
          <h1>Edit Product</h1>
          <button onClick={() => setSelectedProduct(null)} className="popup-no">X</button>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="description"
              placeholder="Product Description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Product Price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            <button className="basic-button" type="submit">
              Update Product
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditProduct;
