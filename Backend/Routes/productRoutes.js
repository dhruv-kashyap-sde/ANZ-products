const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../config/multerConfig');

// Add a product with file upload
router.post('/add-products', upload.single('image'), productController.addProduct);

// Get all products
router.get('/get-all-products', productController.getAllProducts);

//edit a product
router.put('/products/:id', productController.editProduct);

//delete selected products
router.delete('/products/:id', productController.deleteProduct);
// Other routes...

module.exports = router;
