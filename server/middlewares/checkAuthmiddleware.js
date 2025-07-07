import jwt from "jsonwebtoken";
import dotenv from "dotenv";

function verifyToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Access Denied" });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.UserId = decodedToken.id;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid Token" });
  }
}

export default verifyToken;
