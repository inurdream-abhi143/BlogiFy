import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useAdminBlogs } from "../../../contexts/AdminsBlogsReqContext";

const AdminBlogView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { allPendingBlogs, getAllBlogs } = useAdminBlogs();

  useEffect(() => {
    getAllBlogs(); // Load all blogs when component mounts
  }, []);

  const blog = allPendingBlogs.find((blog) => blog._id === id);

  const blogActions = async (status) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Missing Token ❌");
        return;
      }

      const res = await axios.patch(
        `http://localhost:3000/posts/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        toast.success(`Blog has been ${status}`);
        navigate("/admin/pendingblogs");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong 😬");
    }
  };

  return (
    <div className="container-fluid py-4 bg-dark text-light min-vh-100">
      {/* Header */}
      <header className="bg-black text-white py-3 px-4 mb-4 rounded shadow border border-secondary text-center">
        <h2 className="mb-0">{blog.title}</h2>
      </header>

      {/* Image */}
      {blog.coverImage && (
        <div className="text-center mb-4">
          <img
            src={blog.coverImage}
            alt="Blog Cover"
            className="img-fluid rounded border border-light shadow-sm"
            style={{ maxHeight: "400px", objectFit: "contain", width: "100%" }}
          />
        </div>
      )}

      {/* Blog Details */}
      <section className="bg-light text-dark p-4 rounded shadow-sm">
        <p>
          <strong>Author:</strong> {blog.authorName || "Unknown"}
        </p>
        <p>
          <strong>Category:</strong> {blog.category}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span
            className={`badge ${
              blog.status === "approved"
                ? "bg-success"
                : blog.status === "rejected"
                ? "bg-danger"
                : "bg-warning text-dark"
            }`}
          >
            {blog.status.toUpperCase()}
          </span>
        </p>

        <hr />

        <div>
          <strong className="d-block mb-2">Content:</strong>
          <p style={{ whiteSpace: "pre-line" }}>{blog.content}</p>
        </div>
      </section>

      {/* Approve / Reject Buttons */}
      <div className="d-flex gap-3 justify-content-center mt-4">
        <button
          className="btn btn-success"
          onClick={() => blogActions("approved")}
        >
          ✅ Approve
        </button>
        <button
          className="btn btn-danger"
          onClick={() => blogActions("rejected")}
        >
          ❌ Reject
        </button>
      </div>
    </div>
  );
};

export default AdminBlogView;
