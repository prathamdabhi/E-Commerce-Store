import Category from "../models/category.model.js";

//region Get Category
const getCategory = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//region Add Category
const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = new Category({
      name: name,
    });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    console.log(err.message);
    res.status(404).send(err.message);
  }
};
//endregion

//region U[pdate Category
const updatecategory = async (req, res) => {
  try {
    const { name } = req.body;
    let id = req.params.id;

    // Ensure that the update is structured properly
    const category = await Category.findByIdAndUpdate(id, { name });

    // Handle case when category is not found
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({ message: "Category updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  try {
    let id = req.params.id;
    const category = await Category.findById(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(401).json(error.message);
  }
};
//endregion

//region Delete Category
const deletecategory = async (req, res) => {
  try {
    let id = req.params.id;

    // Ensure that the update is structured properly
    const category = await Category.findByIdAndDelete(id);

    // Handle case when category is not found
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({ message: "Category deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//endregion

export { addCategory, updatecategory, deletecategory, getCategory, getById };
