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
      <header className="bg-black text-white py-4 px-3 rounded shadow mb-5">
        <h1 className="fs-2 mb-0 text-center">📋 Moderated Blogs</h1>
      </header>

      {moderatedBlogs.length === 0 ? (
        <div className="text-center mt-5">
          <h4 className="text-muted">No moderated blogs yet 💤</h4>
        </div>
      ) : (
        <div className="row">
          {moderatedBlogs.map((blog) => (
            <div key={blog._id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="card bg-dark text-light shadow border-light h-100">
                {blog.coverImage && (
                  <img
                    src={blog.coverImage}
                    alt="Blog Cover"
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "contain",
                      borderTopLeftRadius: "0.5rem",
                      borderTopRightRadius: "0.5rem",
                    }}
                  />
                )}
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title fw-bold mb-2 text-info">
                      {blog.title}
                    </h5>
                    <p className="card-text text-muted mb-1">
                      <strong className="text-white">Author:</strong>{" "}
                      <span className="text-light">
                        {blog.authorName || "Unknown"}
                      </span>
                    </p>
                    <p className="card-text text-muted">
                      <strong className="text-white">Category:</strong>{" "}
                      <span className="text-light">{blog.category}</span>
                    </p>
                  </div>
                  <div className="mt-auto text-end">
                    <span
                      className={`badge px-3 py-2 fs-6 ${
                        blog.status === "approved" ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {blog.status.toUpperCase()}
                    </span>
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

export default AdminModeratedBlogs;
