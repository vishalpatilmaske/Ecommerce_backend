import Retailer from "../models/retailer.model.js";
import bcrypt from "bcryptjs";
import retailerValidationSchema from "../validation/retailerValidation.js";

// retailer signup
export const signupHandler = async (req, res) => {
  try {
    console.log("hello");
    const userData = await retailerValidationSchema.validateAsync(req.body);
    const user = await Retailer(userData);
    console.log(userData);
    await user.save();
    console.log(user);
    if (user) {
      return res.status(200).json("Successfully registration");
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

// retailer login
export const loginHandler = async (req, res) => {
  try {
    const { mobile, password } = req.body;
    const user = await Retailer.findOne({ mobile: mobile });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = await user.generateAuthToken(); //call generateAuthToken() inside the userSchema and generate and store token
        res.status(200).json({ message: "success", access_token: token });
      } else {
        res.status(400).json("invalid password");
      }
    } else {
      res.status(400).json("invalid mobile number");
    }
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

//logout retailer
export const deleteretailer = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedretailer = await Retailer.findByIdAndDelete(id);

    if (!deletedretailer) {
      return res.status(400).json({ message: "Record not found" });
    }

    res
      .status(200)
      .json({ message: "Retailer deleted successfully", deletedretailer });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
