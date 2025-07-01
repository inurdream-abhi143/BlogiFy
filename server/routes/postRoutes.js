import Post from "../models/post.js";

import express from "express";

const post = express.Router();

post.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savePost = await newPost.save();
    res.status(201).json(savePost);
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
});
post.get("/", async (req, res) => {
  try {
    const blogs = await Post.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});
post.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(404);
      return send("No data found ");
    }
    const newData = req.body;
    const blogData = await Post.findByIdAndUpdate(id, newData, { new: true });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});
post.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(404);

      return res.send("No data found");
    }
    const deleteData = await Post.findByIdAndDelete(id);
    if (!deleteData) {
      return res.status(404).send("No data found ");
    }
    res.status(200).json(deleteData);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

export default post;
