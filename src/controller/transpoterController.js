import { Transporter } from "../models/transpoter.model.js";
import { transpoterValidation } from "../validation/transpoterValidation.js";
// Create a transpoter api
export const createtranspoter = async (req, res) => {
  try {
    await transpoterValidation.validateAsync(req.body);
    const { name, location, mobile } = req.body;
    const newTranspoter = new Transporter({
      name,
      location,
      mobile,
    });
    await newTranspoter.save();
    res.status(201).json({ message: "transpoter create Successfully " });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

// Delete a transpoter api
export const deletetranspoter = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedtranspoter = await Transporter.findByIdAndDelete(id);

    if (!deletedtranspoter) {
      return res.status(400).json({ message: "Record not found" });
    }

    res
      .status(200)
      .json({ message: "traspoter deleted successfully", deletedtranspoter });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
