import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: Array(String),
  },
  discount: {
    type: Number,
  },
  price: {
    type: Number,
  },
  categoryid: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
  },
  categoryid: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
  },
  brandid: {
    type: mongoose.Schema.ObjectId,
    ref: "Brand",
  },
});
const Product = mongoose.model("Product", productSchema);
export default Product;
