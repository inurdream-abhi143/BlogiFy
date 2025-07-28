import React, { useEffect } from "react";
import { useAdminBlogs } from "../../contexts/AdminsBlogsReqContext";

const AdminModeratedBlogs = () => {
  const { allBlogs, getAllBlogs } = useAdminBlogs();

  useEffect(() => {
    getAllBlogs();
  }, []);

  const moderatedBlogs = allBlogs.filter((blog) => blog.status !== "pending");

  return (
    <div className="container-fluid py-4 bg-dark text-light min-vh-100">
      <header className="bg-black text-white py-4 px-3 rounded shadow mb-4 border border-secondary">
        <h1 className="fs-3 mb-0 text-center">📋 Moderated Blogs</h1>
      </header>

      {moderatedBlogs.length === 0 ? (
        <div className="text-center mt-5">
          <h4 className="text-muted">No moderated blogs yet 💤</h4>
        </div>
      ) : (
        <ul className="list-group shadow rounded overflow-auto">
          {moderatedBlogs.map((blog) => (
            <li
              key={blog._id}
              className="list-group-item bg-dark text-light border-secondary py-3 px-4 mb-2"
            >
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                {/* Left Section */}
                <div className="flex-grow-1">
                  <h5 className="mb-2 text-info fw-bold">{blog.title}</h5>
                  <p className="mb-1 text-white">
                    <strong className="text-white">Author:</strong>{" "}
                    {blog.authorName || "Unknown"}
                  </p>
                  <p className="mb-0">
                    <strong className="text-white">Category:</strong>{" "}
                    <span className="badge bg-secondary">{blog.category}</span>
                  </p>
                </div>

                {/* Right Section */}
                <div className="text-end">
                  <span
                    className={`badge fs-6 px-3 py-2 ${
                      blog.status === "approved" ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {blog.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminModeratedBlogs;
