import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connection from "./src/Config/connection.js";
import productrouter from "./src/routers/product.routes.js";
import transportRoutes from "./src/routers/transpoter.routes.js";
import manufacturerRoutes from "./src/routers/manufacturer.routes.js";
import retailerRoutes from "./src/routers/retailer.routes.js";
import orderRoutes from "./src/routers/order.routes.js";
const app = express();
dotenv.config();

//database connection`
connection();

// cros origin access
let originAllow = {
  origin: "*",
  methods: "PUT,GET,POST,DELETE,PATCH,HEAD",
  credentials: true,
};

// midellware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(originAllow));
app.use(productrouter);

app.use("/transpoter", transportRoutes);
app.use("/order", orderRoutes);
app.use("/manufacturer", manufacturerRoutes);
app.use("/retailer", retailerRoutes);

app.listen(process.env.PORT || 5000, (err) => {
  console.log("server is running on " + process.env.PORT);
});
