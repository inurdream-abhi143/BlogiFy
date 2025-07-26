import React, { useEffect } from "react";
import { useBlog } from "../../../contexts/BlogsContext";

const PublisherpendingBlogs = () => {
  const { blogs, getBlogs } = useBlog();

  useEffect(() => {
    getBlogs();
  }, []);

  // Dummy placeholder for UI only — You’ll handle actual filtering
  const pendingBlogs = blogs || [];
  console.log("Pending Blogs:", pendingBlogs);
  return (
    <div className="container-fluid py-1">
      <header className="bg-warning text-dark text-center py-4 rounded shadow mb-5 ">
        <h1 className="fs-2 mb-1">Pending Blogs</h1>
        <p className="mb-0">Approve or reject submitted blogs</p>
      </header>

      {pendingBlogs.length === 0 ? (
        <div className="text-center mt-5">
          <h4 className="text-muted">No pending blogs 💤</h4>
        </div>
      ) : (
        <div className="row g-4 justify-content-center">
          {pendingBlogs.map((blog, index) => (
            <div className="col-12 col-md-8" key={index}>
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark mb-3">
                    📝 Blog Pending Approval
                  </h5>
                  <p className="mb-3">
                    <span className="fw-semibold">Title:</span>{" "}
                    <span className="text-muted">{blog.title}</span>
                    <br />
                    <span className="fw-semibold">Author:</span>{" "}
                    <span className="text-muted">{blog.authorName}</span>
                    <br />
                    <span className="fw-semibold">Category:</span>{" "}
                    <span className="text-muted">{blog.category}</span>
                  </p>
                  <div className="d-flex gap-3 justify-content-end">
                    <h1 className="text-muted">{blog.status}</h1>
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

export default PublisherpendingBlogs;
