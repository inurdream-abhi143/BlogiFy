import express from "express";
import multer from "multer";
import Post from "../models/post.js";
import verifyToken from "../middlewares/checkAuthmiddleware.js";
import verifyAdmin from "../middlewares/checkAdminAuh.js";

const post = express.Router();

// 📁 Multer Storage Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

// 📝 Create Blog Post
post.post("/", upload.single("coverImage"), async (req, res) => {
  try {
    const { blogId, author, authorName, title, content, category, tags } =
      req.body;

    const newPost = new Post({
      blogId,
      author,
      authorName,
      title,
      content,
      category,
      tags: tags.split(",").map((tag) => tag.trim()),
      coverImage: `http://localhost:3000/uploads/${req.file.filename}`, // 👈 nice clean URL
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📚 Get All Blogs
post.get("/", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const blogs = await Post.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✏️ Update Blog
post.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(404).send("No data found");

    const updated = await Post.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🗑️ Delete Blog
post.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(404).send("No data found");

    const deleted = await Post.findByIdAndDelete(id);
    if (!deleted) return res.status(404).send("No data found");

    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default post;
