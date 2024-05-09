import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Define the schema
const retailerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    location: {
      type: String,
    },
    password: {
      type: String,
      require: true,
      unique: true,
    },
    tokens: [],
  },
  {
    timestamps: true,
  }
);

retailerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

retailerSchema.methods.generateAuthToken = async function (next) {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.SECERATE_TOKEN_CODE);
    this.tokens.push(token);
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
    next();
  }
  next();
};

const Retailer = mongoose.model("Retailer", retailerSchema);

export default Retailer;
