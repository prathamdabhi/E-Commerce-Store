import Brand from "../models/brand.model.js";

const getBrands = async (req, res) => {
  try {
    let brands = await Brand.find();
    res.status(200).json(brands);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getBrand = async (req, res) => {
  try {
    let id = req.params.id;
    const brand = await Brand.findById(id);
    res.status(200).json(brand);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addBrand = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(404).json({ message: "Brand name is required" });
    }
    const brand = new Brand({
      name: name,
    });
    await brand.save();
    res.status(200).json(brand);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateBrand = async (req, res) => {
  try {
    const { name } = req.body;
    let id = req.params.id;
    const brand = await Brand.findByIdAndUpdate(id, { name });
    res.status(200).json({ message: "Brand updated Successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteBrand = async (req, res) => {
  try {
    let id = req.params.id;
    const brand = await Brand.findByIdAndDelete(id);
    res.status(200).json({ message: "Brand deleted Successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getBrands, getBrand, addBrand, updateBrand, deleteBrand };
