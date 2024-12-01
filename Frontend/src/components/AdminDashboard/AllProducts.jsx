import React from 'react'
import './AllProducts.css'

const AllProducts = () => {
  return (
    <div className='all-products'>
        <h1>All Products</h1>
        <div className="product-card-container">
           <div className="card">
             <div className="card-img">
                <img src="" alt="" />
             </div>
             <div className="card-info">
               <p className="text-title">Product title </p>
               <p className="text-body">Product description and details</p>
             </div>
             <div className="card-footer">
               <span className="text-title">$499.49</span>
             </div>
            </div>
        </div>
    </div>
  )
}

export default AllProducts