import { Router } from "express";
import { createProduct, getProducts } from "../controller/productHandler.js";
const router = Router();

router.post("/product/createproduct", createProduct);
router.get("/product/getproducts", getProducts);
export default router;
