import mongoose, { Schema } from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
