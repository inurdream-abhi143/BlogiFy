import jwt from "jsonwebtoken";

import dotenv from "dotenv";

function verifyAdmin(req, res, next) {
  // Bypass auth in test environment
  // if (process.env.NODE_ENV === "test") {
  //   return next();
  // }
  const token = req.header("Authorization");

  if (!token) {
    return res.status(404).json({ error: "Token not found" });
  }

  try {
    const decodeToken = jwt.verify(
      token.split(`Bearer `)[1],
      process.env.JWT_SECRET_KEY
    );

    if (decodeToken.role !== "admin") {
      return res.status(403).json({ error: "Access denied you are not Admin" });
    }
    next();
  } catch (err) {
    res.status(404).json({ error: " token verification failed" });
  }
}

export default verifyAdmin;
