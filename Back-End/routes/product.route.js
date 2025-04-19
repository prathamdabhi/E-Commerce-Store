import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.post("/addproduct", addProduct);
productRouter.get("/getproducts", getProducts);
productRouter.get("/getproduct/:id", getProductById);
productRouter.put("/updateproduct/:id", updateProduct);
productRouter.delete("/deleteproduct/:id", deleteProduct);

export default productRouter;
