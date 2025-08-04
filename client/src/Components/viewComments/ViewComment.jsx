import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ViewComment = ({ id }) => {
  const [blogAllComment, setblogAllComment] = useState([]);

  useEffect(() => {
    getBlogComments();
  }, [id]);

  const getBlogComments = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No valid token");
        return;
      }

      const res = await axios.get(
        `http://localhost:3000/blogComments/blogsComment/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status !== 200) {
        toast.error("Failed to fetch blog comments");
        return;
      }

      setblogAllComment(res.data);
    } catch (err) {
      toast.error("Error fetching comments");
    }
  };

  return (
    <div className="mt-4">
      <h4 className="mb-4 fw-bold">
        <i className="bi bi-chat-left-text text-purple me-2"></i> Comments
      </h4>

      {blogAllComment.length === 0 ? (
        <p className="text-muted text-center">
          No comments yet. Be the first! 
        </p>
      ) : (
        <div className="row">
          {blogAllComment.map((comment, idx) => (
            <div key={idx} className="col-12 mb-3">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h6 className="fw-bold text-dark mb-1">
                    {comment.userId?.username || "Anonymous"}
                  </h6>
                  <hr className="my-2" />
                  <p className="text-secondary mb-0">{comment.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewComment;
