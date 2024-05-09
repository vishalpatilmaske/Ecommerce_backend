import jwt from "jsonwebtoken";
import Retailer from "../models/retailer.model.js";

const Authentication = async (req, res, next) => {
  try {
    //get token from localStorage of Frontend
    const token = req.headers.authorization;
    const verifyToken = jwt.verify(token, process.env.SECERATE_TOKEN_CODE); //verify token

    if (verifyToken) {
      const user = await Retailer.findById(verifyToken._id);
      if (user) {
        return res
          .status(200)
          .json({ message: "successfull authorization", user: user });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "not authorization" });
  }
};

export default Authentication;
