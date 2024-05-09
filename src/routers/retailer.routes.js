import { Router } from "express";
import {
  signupHandler,
  loginHandler,
  deleteretailer,
} from "../controller/retailerController.js";
// import cookieParser from "cookie-parser";
import Authentication from "../controller/Authentication.js";

const router = Router();
router.route("/singup").post(signupHandler);
router.route("/login").post(loginHandler);
router.route("/logout/:id").delete(deleteretailer);
router.route("/auth").get(Authentication);

export default router;
