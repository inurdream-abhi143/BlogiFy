import mongoose from "mongoose";

const { Schema } = mongoose;

const blogPostSchema = new Schema(
  {
    blogId: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    authorName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    coverImage: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    rejectedReason: {
      type: String,
    },
    views: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
    reaTime: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Blog", blogPostSchema);
