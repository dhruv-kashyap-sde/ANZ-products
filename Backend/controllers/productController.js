const Product = require("../models/Products");

// Add a product
exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, categoryID } = req.body;
    const image = req.file.path;
    image = image.replace(/\\/g, '/');
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

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({message: "Deleted Successfully"});
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}