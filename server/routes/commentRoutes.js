import Comment from "../models/comment.js";
import express from "express";
const comment = express.Router();

comment.post("/", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const saveComment = await newComment.save();
    res.status(201).json(saveComment);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});
comment.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

comment.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).send("No Comment data found");
    }
    const updateComment = req.body;
    const commentData = await Comment.findByIdAndUpdate(id, updateComment, {
      new: true,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

comment.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).send("no data found");
    }
    const deleteComment = await Comment.findByIdAndDelete(id);
    res.status(200).json(deleteComment);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

export default comment;
