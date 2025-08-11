import mongoose, { Schema } from "mongoose";

const activityLogSchema = new Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
    action: {
      type: String,
      required: true,
    },
    targetType: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ActivityLog", activityLogSchema);
