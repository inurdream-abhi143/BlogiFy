import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin", "publisher"],
      default: "user",
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "suspend"],
      default: "active",
    },
    publisherRequest: {
      type: Boolean,
      default: false,
    },
    publisherStatus: {
      type: String,
      enum: ["none", "pending", "approved", "rejected"],
      default: "none",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
