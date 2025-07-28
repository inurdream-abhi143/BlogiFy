import React, { useEffect } from "react";
import { useAdminBlogs } from "../../contexts/AdminsBlogsReqContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AllPendingBlogs = () => {
  const { allPendingBlogs, getAllBlogs } = useAdminBlogs();

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="container-fluid py-4 bg-dark text-light min-vh-100">
      <header className="bg-black text-white py-4 px-3 rounded shadow mb-4 border border-secondary">
        <h1 className="fs-3 text-center">🛠️ Pending Blog Moderation</h1>
      </header>

      {allPendingBlogs.length === 0 ? (
        <div className="text-center mt-5">
          <h4 className="text-muted">No pending blogs 💤</h4>
        </div>
      ) : (
        <ul className="list-group shadow rounded">
          {allPendingBlogs.map((blog) => (
            <li
              key={blog._id}
              className="list-group-item bg-dark text-light border-secondary py-3 px-4"
            >
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                <div className="flex-grow-1">
                  <h5 className="fw-bold text-info mb-2">{blog.title}</h5>
                  <p className="mb-1">
                    <strong className="text-white">Author:</strong>{" "}
                    <span className="text-light">{blog.authorName}</span>
                  </p>
                  <p className="mb-0">
                    <strong className="text-white">Category:</strong>{" "}
                    <span className="badge bg-secondary">{blog.category}</span>
                  </p>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-2 mt-3 mt-md-0">
                  {/* <button
                    className="btn btn-success fw-semibold px-3"
                    onClick={() => blogActions(blog._id, "approved")}
                  >
                    ✅ Approve
                  </button>
                  <button
                    className="btn btn-danger fw-semibold px-3"
                    onClick={() => blogActions(blog._id, "rejected")}
                  >
                    ❌ Reject
                  </button> */}
                  <button className="btn btn-primary fw-semibold px-3">
                    <Link
                      className="text-decoration-none text-white"
                      to={`/admin/adminblogview/${blog._id}`}
                    >
                      View
                    </Link>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllPendingBlogs;
