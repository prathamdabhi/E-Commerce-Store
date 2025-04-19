import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDb from "./db/db.js";
import categoryRouter from "./routes/category.route.js";
import brandRouter from "./routes/brand.route.js";
import productRouter from "./routes/product.route.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//#region DBConnection
connectDb();
//#endregion

app.use("/api/category", categoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/product", productRouter);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
