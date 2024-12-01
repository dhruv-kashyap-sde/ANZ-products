const express = require('express')
const categoryController = require('../controllers/categoryController');
const router = express.Router();

// Create a new category
router.post('/categories', categoryController.createCategory);

// Add a product to a category
router.post('/products', categoryController.addProductToCategory);

// Get all categories
router.get('/categories', categoryController.getAllCategories);

module.exports = router;
