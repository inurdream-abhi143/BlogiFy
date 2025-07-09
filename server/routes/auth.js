import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv";

const authRouter = express.Router();

//  for login

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      console.log("email", user);
      return res.status(401).send("User not found ");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log("password", passwordMatch);
      return res.status(401).json({ message: "password does not match " });
    }
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    // console.log("Entered email:", email);
    // console.log("User found:", user);
    // console.log("Password entered:", password);
    // console.log("Password match result:", passwordMatch);

    let userInfo = {
      userId: user._id,
      email: user.email,
      username: user.username,
      token: token,
    };

    res.status(200).json(userInfo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// for registration
authRouter.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // console.log("req body", req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default authRouter;
