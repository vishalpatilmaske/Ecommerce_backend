import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  unitQuantity: {
    type: String,
    enum: ["kg", "liter"],
    required: true,
  },
  pricePerUnit: {
    type: Number,
    required: true,
  },
});

export const Product = mongoose.model("Product", productSchema);
