import React, { useEffect } from "react";
import { useAdminBlogs } from "../../contexts/AdminsBlogsReqContext";

const AllPendingBlogs = () => {
  const { allPendingBlogs, getAllBlogs } = useAdminBlogs();

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="container-fluid py-4">
      <header className="bg-dark text-white py-4 px-3 rounded shadow mb-5">
        <h1 className="fs-2 mb-0">📋 Pending Blog Requests</h1>
      </header>

      {allPendingBlogs.length === 0 ? (
        <div className="text-center mt-5">
          <h4 className="text-muted">No pending blogs 💤</h4>
        </div>
      ) : (
        <div className="row">
          {allPendingBlogs.map((blog) => (
            <div key={blog.blogId} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow border-warning border-2 h-100">
                {blog.coverImage && (
                  <img
                    src={`http://localhost:3000/${blog.coverImage}`}
                    alt="Blog Cover"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{blog.title}</h5>
                  <p className="card-text mb-1">
                    <strong>Author:</strong> {blog.authorName || "Unknown"}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Category:</strong>{" "}
                    <span className="badge bg-secondary">{blog.category}</span>
                  </p>
                  <div className="d-flex justify-content-between gap-2 mt-auto">
                    <button className="btn btn-success w-50">✅ Approve</button>
                    <button className="btn btn-danger w-50">❌ Reject</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPendingBlogs;
