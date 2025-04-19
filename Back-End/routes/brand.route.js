import express from "express";
import {
  addBrand,
  deleteBrand,
  getBrand,
  getBrands,
  updateBrand,
} from "../controllers/brand.controller.js";

const brandRouter = express.Router();

brandRouter.get("/getbrand/:id", getBrand);
brandRouter.get("/getbrands", getBrands);
brandRouter.post("/addbrand", addBrand);
brandRouter.put("/updatebrand/:id", updateBrand);
brandRouter.delete("/deletebrand/:id", deleteBrand);

export default brandRouter;
