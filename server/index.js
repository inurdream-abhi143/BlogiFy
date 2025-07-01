import express from "express";
import mongoose from "mongoose";
// import cors from "cors";
// import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commnetRoutes from "./routes/commentRoutes.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/Blogs")
  .then(() => {
    console.log("mongoDb connected");
  })
  .catch((err) => {
    console.error("error", err);
  });
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commnetRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
