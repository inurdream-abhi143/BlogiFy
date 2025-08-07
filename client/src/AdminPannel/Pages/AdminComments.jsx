import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CiFlag1 } from "react-icons/ci";
import { FaFlag } from "react-icons/fa";

const AdminComments = () => {
  const [allComments, setAllComments] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    getAllComments();
  }, [flag]);

  const getAllComments = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No valid Token");
      return;
    }
    try {
      const res = await axios.get("http://localhost:3000/comments", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status !== 200) {
        toast.error("Failed to Fetch the Comments");
        return;
      }
      setAllComments(res.data);
    } catch (err) {
      toast.error("Error In API", err);
    }
  };

  const handleFlag = async (comment) => {
    const id = comment._id;
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No valid Token");
      return;
    }

    const updateData = {
      isFlagged: !comment.isFlagged,
    };

    try {
      const res = await axios.patch(
        `http://localhost:3000/comments/${id}`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status !== 200) {
        toast.error("Didn't update the flag");
        return;
      }

      // Trigger useEffect to re-fetch updated comments
      setFlag(!flag);
    } catch (err) {
      toast.error("Something went wrong with the API", err);
    }
  };

  return (
    <div className="container-fluid px-3 py-4 bg-dark text-light min-vh-100">
      {/* Header */}
      <header className="bg-black text-white py-3 px-4 mb-4 rounded shadow border border-secondary d-flex justify-content-between align-items-center">
        <h2 className="m-0 fw-bold">Comments Management</h2>
        <span className="badge bg-warning text-dark fs-6">BlogiFy</span>
      </header>

      <div className="row g-4">
        {allComments.map((comment, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={idx}>
            <div className="card bg-light text-dark shadow-sm h-100 d-flex flex-column justify-content-between">
              <div className="card-body">
                <h5 className="card-title">
                  📝 Blog:{" "}
                  <span className="fw-bold">{comment.blogId?.title}</span>
                </h5>
                <p className="card-text">💬 {comment.content}</p>
              </div>

              <div className="card-footer d-flex justify-content-between align-items-center bg-white border-top">
                <small className="text-muted">
                  👤 {comment.userId?.username || "Anonymous"} <br />
                  🕒 {new Date(comment.createdAt).toLocaleString()}
                </small>

                <button
                  className={`btn btn-sm ${
                    comment.isFlagged ? "btn-danger" : "btn-outline-secondary"
                  }`}
                  onClick={() => handleFlag(comment)}
                  title="Toggle Flag"
                >
                  {comment.isFlagged ? <FaFlag /> : <CiFlag1 />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminComments;
