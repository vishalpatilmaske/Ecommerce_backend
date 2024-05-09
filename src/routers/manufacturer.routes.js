import { Router } from "express";
import {
  createManufacturer,
  deleteManufacturer,
} from "../controller/manufacturerController.js";

const router = Router();

router.route("/create").post(createManufacturer);
router.route("/delete/:id").delete(deleteManufacturer);

export default router;
