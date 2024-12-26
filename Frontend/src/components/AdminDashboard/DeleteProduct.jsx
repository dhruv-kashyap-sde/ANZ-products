import React, { useContext, useEffect, useState } from 'react';
import axios, { all } from 'axios';
import './DeleteProduct.css';
import { ProductContext } from '../../context/ProductContext';
import toast from 'react-hot-toast';

const DeleteProduct = () => {
  const {
    allProducts,
    setAllProducts,
    setCategories,
  } = useContext(ProductContext);

  const URL = import.meta.env.VITE_API_URL;

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

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

  const handleSelectProduct = (productId) => {
    setSelectedProducts(prevSelected =>
      prevSelected.includes(productId)
        ? prevSelected.filter(id => id !== productId)
        : [...prevSelected, productId]
    );
  };

  const handleDelete = async () => {
    try {
      await Promise.all(
        selectedProducts.map(productId => axios.delete(`${URL}/products/${productId}`))
      );
      setAllProducts(allProducts.filter(product => !selectedProducts.includes(product._id)));
      setSelectedProducts([]);
      setShowConfirmDialog(false);
      toast.success('Products deleted successfully');
    } catch (error) {
      console.error('Error deleting products', error);
      toast.error('Error deleting products');
    }
  };

  const handleConfirmDelete = () => {
    setShowConfirmDialog(true);
  };

  const handleCloseDialog = () => {
    setShowConfirmDialog(false);
  };

  return (
    <div className="delete-product-container">
      <h1>
        Delete Products
        <button onClick={handleConfirmDelete} disabled={!selectedProducts.length} className="delete-button">DELETE</button>
      </h1>
      <hr />
      <div className="product-list">
        {allProducts.length !== 0
        ? allProducts.map(product => (

          <div key={product._id} className="card">
            <input
              className='delete-checkbox'
              type="checkbox"
              checked={selectedProducts.includes(product._id)}
              onChange={() => handleSelectProduct(product._id)}
            />
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
      : <p>No products available</p>}
      </div>

      {showConfirmDialog && (
        <div className="confirm-dialog-overlay">
            <div className="confirm-dialog">
            <p>Are you sure you want to delete the selected products?</p>
            <button className='popup-yes' onClick={handleDelete}>Yes</button>
            <button className='popup-no' onClick={handleCloseDialog}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteProduct;
