import {
  createOrder,
  deleteOrder,
  getYourOrder,
  selectOneOrder,
  selectOrder,
  updateOrder,
} from "../controller/orderController.js";
import { Router } from "express";
const router = Router();

router.route("/create").post(createOrder);
router.route("/select").get(selectOrder);
router.route("/selectone/:id").get(selectOneOrder);
router.route("/delete/:id").delete(deleteOrder);
router.route("/update").put(updateOrder);
router.route("/retailerorders/:id").get(getYourOrder);

export default router;
