import { Router } from "express";
const router = Router();
import {
  createtranspoter,
  deletetranspoter,
} from "../controller/transpoterController.js";

router.route("/create").post(createtranspoter);
router.route("/delete/:id").delete(deletetranspoter);

export default router;
