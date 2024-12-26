const path = require('path');
const Product = require("../models/Products");
// Add a product
exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, categoryID } = req.body;
    const image = `https://anzproductsltd.onrender.com/uploads/${req.file.filename}`;
    const newProduct = new Product({
      name,
      description,
      price,
      category: categoryID,
      images: [image],
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Show all products
exports.getAllProducts = async (req, res) => {
  try {
    let allProducts = await Product.find().populate("category", "name");
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Edit a product
exports.editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category, images } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price, category, images },
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const fs = require('fs');

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the product to get the image path
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Extract the relative path from the full URL
    const imageUrl = product.images[0];
    const imagePath = imageUrl.replace(/^http:\/\/.*:\d+\//, '');

    // Delete the product from the database
    await Product.findByIdAndDelete(id);

    // Remove the image file from the uploads folder
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error('Error deleting image file:', err);
      }
    });

    res.status(200).json({ message: 'Product and image deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//  Fetch a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate("category", "name");
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
