const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../config/multerConfig');

// Add a product with file upload
router.post('/add-products', upload.single('image'), productController.addProduct);

// Get all products
router.get('/get-all-products', productController.getAllProducts)

// Other routes...

module.exports = router;
