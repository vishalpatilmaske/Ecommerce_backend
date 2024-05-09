import mongoose from "mongoose";
const connection = async () => {
  mongoose
    .connect(process.env.Mongo_DB)
    .then(() => {
      console.log("connection successful ");
    })
    .catch(() => {
      console.log("filed !!!!!!!");
    });
};

export default connection;
