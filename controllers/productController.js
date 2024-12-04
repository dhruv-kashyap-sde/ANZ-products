const Product = require('../models/Products');
const Category = require('../models/Category');

// Add a product
exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, categoryID } = req.body;
    const image = req.file.path;
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
        let allProducts = await Product.find(); 
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};
