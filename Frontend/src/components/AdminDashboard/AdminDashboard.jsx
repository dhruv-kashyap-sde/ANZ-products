import React, { useContext, useEffect, useState } from 'react';
import './AdminDashboard.css';
import AllProducts from './AllProducts';
import CreateProduct from './CreateProduct';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';
import CreateCategory from './CreateCategory';
import Mails from './Inquiry';
import DetailedPopup from '../../utils/Popups/DetailedPopup';
import { ProductContext } from '../../context/ProductContext';

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('AllProducts');
  const { selectedInquiry, visible, setVisible } = useContext(ProductContext);
  const close = () => setVisible(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'AllProducts':
        return <AllProducts />;
      case 'CreateProduct':
        return <CreateProduct />;
      case 'EditProduct':
        return <EditProduct />;
      case 'DeleteProduct':
        return <DeleteProduct />;
      case 'CreateCategory':
        return <CreateCategory/>;
      case 'Mails':
        return <Mails/>;
      default:
        return <p>Click a button to show its corresponding page</p>;
    }
  };

  return (
    <>
    <div className="dashboard-container">
      <div className="sidebar">
        <button
          className={`sidebar-button ${activeComponent === 'AllProducts' ? 'active' : ''}`}
          onClick={() => setActiveComponent('AllProducts')}
        >
          All Products
        </button>
        <button
          className={`sidebar-button ${activeComponent === 'CreateProduct' ? 'active' : ''}`}
          onClick={() => setActiveComponent('CreateProduct')}
        >
          Create Product
        </button>
        <button
          className={`sidebar-button ${activeComponent === 'EditProduct' ? 'active' : ''}`}
          onClick={() => setActiveComponent('EditProduct')}
        >
          Edit Product
        </button>
        <button
          className={`sidebar-button ${activeComponent === 'DeleteProduct' ? 'active' : ''}`}
          onClick={() => setActiveComponent('DeleteProduct')}
        >
          Delete Product
        </button>
        <button
          className={`sidebar-button ${activeComponent === 'CreateCategory' ? 'active' : ''}`}
          onClick={() => setActiveComponent('CreateCategory')}
        >
          Categories
        </button>
        <button
          className={`sidebar-button ${activeComponent === 'Mails' ? 'active' : ''}`}
          onClick={() => setActiveComponent('Mails')}
        >
          Inquiries
        </button>
        
      </div>
      <div className="main-body">{renderComponent()}

      </div>
    </div>
      {visible && <DetailedPopup inquiry={selectedInquiry} close={close} />}
      </>
  );
};

export default AdminDashboard;
