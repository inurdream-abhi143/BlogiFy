import mongoose from "mongoose";
import app from "./app.js";

mongoose
  .connect("mongodb://localhost:27017/Blogs")
  .then(() => {
    console.log("mongoDb connected");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("error", err);
  });
