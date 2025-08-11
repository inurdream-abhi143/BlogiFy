import express from "express";
import ActivityLog from "../models/activityLog.js";
import verifyAdmin from "../middlewares/checkAdminAuh.js";

const activityLogRouter = express.Router();

activityLogRouter.get("/", verifyAdmin, async (req, res) => {
  try {
    const logs = await ActivityLog.find()
      .populate("User", "username role")
      .limit(100);

    res.json(logs);
  } catch (err) {
    console.error("Failed to fetch activity logs:", err);
    res.status(500).json({
      message: "Failed to fetch activity logs",
      error: err.message,
    });
  }
});

export default activityLogRouter;
