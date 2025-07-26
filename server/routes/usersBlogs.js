import express from "express";
import verifyToken from "../middlewares/checkAuthmiddleware.js";
import Post from "../models/post.js"; // assuming your blog model is called Post

const userBlogs = express.Router();

// Get all blogs by a specific user
userBlogs.get("/:id", verifyToken, async (req, res) => {
  try {
    const userId = req.params.id;

    // Get all blogs by this user
    const blogs = await Post.find({ author: userId });

    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default userBlogs;
