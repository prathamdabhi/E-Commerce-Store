import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  date: Date,
  items: Array(any),
  status: Number,
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
