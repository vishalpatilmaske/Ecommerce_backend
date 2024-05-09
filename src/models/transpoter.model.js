import mongoose from "mongoose";

const transporterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
});

// Middleware to check if transporter already exists before saving
transporterSchema.pre("save", async function (next) {
  const existingTransporter = await Transporter.findOne({mobile:this.mobile});

  if (existingTransporter) {
    const err = new Error("A transporter already exists");
    return next(err);
  }

  next();
});

export const Transporter = mongoose.model("Transporter", transporterSchema);
