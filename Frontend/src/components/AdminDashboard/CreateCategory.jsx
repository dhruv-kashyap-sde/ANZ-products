import React, { useEffect, useState } from "react";
import "./CreateCategory.css";
import axios from "axios";

const CreateCategory = () => {
    const [categories, setCategories] = useState([]);
    const[categoryData, setCategoryData] = useState({
        categoryName: '',
        categoryDescription: '',
    })

    const getCategories = async () => {
      try {
        let response = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
        setCategories(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.log(`Error fetching Categories: ${error}`);
      }
    }

    const getRealDate = (inputDate) => {
        const date = new Date(inputDate);
      
        // Extract hours, minutes, and format them into AM/PM
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format, 0 becomes 12
      
        // Extract day, month, and year
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
        const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year
      
        // Return the formatted date
        return `${hours}:${minutes} ${ampm} ${day}-${month}-${year}`;
      }
      
    useEffect(() => {
      getCategories();
    }, []);

  return (
    <>
      <div className="categories-container">
        <h1>All Categories</h1>
        <hr />
        <div className="category-body">
            <div className="create-category">
                <h3>Create a Category</h3>
                <input name="categoryName" type="text" placeholder="Category Name"/>
                <textarea name="categoryDescription" placeholder="Enter Description..." maxLength={100}></textarea>
                <button className="basic-button">Create</button>
            </div>
            <div className="all-categories">
            <div className="category-header">
                <span>
                Available Categories
                <button onClick={getCategories} className="restart-button">
                    <i class="ri-reset-right-line"></i>
                </button>
                </span>
            </div>
            <hr />
            <ul>
                {categories.map((category, index) => (
                <li key={index}>{category.name} <span className="secondary-text">{getRealDate(category.createdAt)}</span></li>
              ))}
            </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default CreateCategory;
