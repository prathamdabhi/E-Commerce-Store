import express from "express";
import {
  addCategory,
  deletecategory,
  getById,
  getCategory,
  updatecategory,
} from "../controllers/category.controller.js";

const categoryRouter = express.Router();

categoryRouter.get("/getcategory", getCategory);
categoryRouter.post("/addcategory", addCategory);
categoryRouter.put("/updatecategory/:id", updatecategory);
categoryRouter.delete("/deletecategory/:id", deletecategory);
categoryRouter.get("/getbyidcategory/:id", getById);

export default categoryRouter;
