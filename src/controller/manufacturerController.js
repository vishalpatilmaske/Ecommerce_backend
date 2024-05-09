import { Manufacturer } from "../models/manufacturer.model.js";
import { manufacturerValidation } from "../validation/manufacturerValidation.js";

// Create manufacturer api
export const createManufacturer = async (req, res, next) => {
  try {
    await manufacturerValidation.validateAsync(req.body);

    const { name, location, mobile, products } = req.body;
    console.log(name, location, mobile, products);

    const manufacturer = new Manufacturer({
      name,
      location,
      mobile,
      products,
    });

    await manufacturer.save();

    return res.status(200).json({
      success: true,
      message: "Manufacture created successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      error: error.message,
    });
  }
};

//delete manufacturer
export const deleteManufacturer = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteManufacturer = await Manufacturer.findByIdAndDelete(id);
    if (!deleteManufacturer) {
      res.status(404).send({ message: "Record not found" });
    } else {
      res.status(200).json({ message: "Delete successfully" });
    }
  } catch (error) {
    return res.status(400).json({
      status: false,
      error: error.message,
    });
  }
};
