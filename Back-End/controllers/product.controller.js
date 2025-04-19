import Product from "../models/product.model.js";

const addProduct = async (req, res) => {
  try {
    const body = req.body;
    const product = new Product({
      ...body,
    });
    await product.save();
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, body);
    return res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export {
  getProducts,
  getProductById,
  deleteProduct,
  addProduct,
  updateProduct,
};
