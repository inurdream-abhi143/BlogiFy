import React from "react";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import axios from "axios";

const Comments = (props) => {
  const { id } = props;
  const [comment, setComment] = useState();
  const handleSend = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token Or Invalid token");
      return;
    }
    const decode = jwtDecode(token);
    const userId = decode.id;

    const newComment = {
      blogId: id,
      userId: userId,
      content: comment,
    };
    try {
      const res = await axios.post(
        "http://localhost:3000/comments",
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status !== 201) {
        toast.error("failed to make comment");
        return;
      }
      toast.success("Comment succesfully posted");
    } catch (err) {
      toast.error("failed to make a comment ");
    }
    setComment("");
  };

  return (
    <div className="container my-4">
      <div className="card border p-4">
        <form onSubmit={handleSend}>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter your comment....."
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
