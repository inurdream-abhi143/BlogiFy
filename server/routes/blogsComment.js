import Comment from "../models/comment.js";
import express from "express";
import verifyToken from "../middlewares/checkAuthmiddleware.js";
const blogComments = express.Router();

blogComments.get("/blogsComment/:blogId", verifyToken, async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const comments = await Comment.find({ blogId }).populate(
      "userId",
      "username"
    );
    res.status(200).json(comments);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

export default blogComments;
