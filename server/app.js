import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commnetRoutes from "./routes/commentRoutes.js";
import auth from "./routes/auth.js";
import userBlogs from "./routes/usersBlogs.js";
import blogComments from "./routes/blogsComment.js";
import activityLogRouter from "./routes/adminLogsRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static("uploads"));

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/auth", auth);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/usersblogs", userBlogs);
app.use("/comments", commnetRoutes);
app.use("/blogComments", blogComments);
app.use("/adminlog", activityLogRouter);

export default app;
