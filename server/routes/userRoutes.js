import User from "../models/user.js";

import express from "express";
import verfiyToken from "../middlewares/checkAuthmiddleware.js";
import verifyAdmin from "../middlewares/checkAdminAuh.js";

const user = express.Router();

// user.post("/", async function (req, res) {
//   try {
// const newUser = new User(req.body);
//     const saveUser = await newUser.save();
//     res.status(201).json(saveUser);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

user.get("/", verfiyToken, verifyAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

user.patch(`/:id`, async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) {
      res.status(404);

      return res.send("no id found inside a collection");
    }
    const newData = req.body;

    const userData = await User.findByIdAndUpdate(id, newData, { new: true });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

user.delete("/:id", verfiyToken, async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);

    if (!id) {
      res.status(404);
      return res.send("No id found inside a collection ");
    }
    const userData = await User.findByIdAndDelete(id);
    if (!userData) {
      return res.status(404).send("No data found ");
    }
    res.status(204).send("user deletd successfuly");
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

user.patch("/publisher-request/:id", verfiyToken, async (req, res) => {
  try {
    const id = req.userId;

    if (!id) {
      return res.status(404).send("No id Found");
    }
    const newData = req.body;
    const user = await User.findByIdAndUpdate(id, newData, { new: true });
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

user.get("/pending-publisher-requests/", verifyAdmin, async (req, res) => {
  try {
    const pendingPublisher = await User.find({
      publisherRequest: true,
      publisherStatus: "pending",
    });

    res.status(200).json(pendingPublisher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

user.patch("/admin-publisher-request/:id", verfiyToken, async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(401).json({ err: "No User Found " });
    }
    const newData = req.body;

    const userdata = await User.findById(id);
    console.log(userdata);

    const user = await User.findByIdAndUpdate(id, newData, { new: true });
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

export default user;
