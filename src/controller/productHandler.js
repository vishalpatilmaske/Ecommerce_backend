import mongoose from "mongoose";
import { Product } from "../models/product.model.js";
import { Manufacturer } from "../models/manufacturer.model.js";

export const createProduct = async (req, res, next) => {
  try {
    const { name, unitQuantity, pricePerUnit } = req.body;
    const product = await Product({ name, unitQuantity, pricePerUnit });
    await product.save();
    if (product) {
      return res.status(200).json({ message: "product create successfully !" });
    }
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const product = await Product.find({});
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json(error.message);
  }
  s;
};
