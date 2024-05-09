import mongoose from "mongoose";

const manufacturerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

// Middleware to check if manufacturer already exists before saving
manufacturerSchema.pre("save", async function (next) {
  const existingTransporter = await Manufacturer.findOne({
    mobile: this.mobile,
    name: this.name,
    location: this.location,
  });
  if (existingTransporter) {
    const err = new Error("A manufaturer already exists");
    return next(err);
  } else {
    next();
  }
});
export const Manufacturer = mongoose.model("Manufacturer", manufacturerSchema);
