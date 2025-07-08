import User from "../models/user.js";

import express from "express";
import verfiyToken from "../middlewares/checkAuthmiddleware.js";

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

user.get("/", verfiyToken, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

user.patch(`/:id`, verfiyToken, async (req, res) => {
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

export default user;
