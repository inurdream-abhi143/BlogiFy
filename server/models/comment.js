import mongoose, { model } from "mongoose";

const { Schema } = mongoose;

const blogComment = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
    content: {
      type: String,
      required: true,
    },
    replies: {
      type: [String],
    },
    likes: {
      type: Number,
      default: 0,
    },
    isFlagged: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", blogComment);
