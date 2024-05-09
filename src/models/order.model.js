import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  retailer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Retailer",
    required: true,
  },
  manufacturer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manufacturer",
  },
  transporter_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Transporter",
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  quantity: {
    type: Number,
    required: true,
  },
  orderValue: {
    type: Number,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["ordered", "manufactured", "delevered", "canceled"],
  },
});

export const Order = mongoose.model("Order", orderSchema);
