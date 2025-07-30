import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LatestBlogs = () => {
  const [latestBlog, setLatestBlog] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    blogsForView();
  }, []);

  const blogsForView = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return console.error("No token found");
    }

    try {
      const res = await axios.get("http://localhost:3000/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status !== 200) {
        throw new Error("Failed to fetch blogs");
      }

      const sortedBlogs = res.data
        .filter((blog) => blog.status === "approved")
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 6);

      setLatestBlog(sortedBlogs);
    } catch (err) {
      console.error("Error fetching blogs:", err.message);
    }
  };
  const handleBlog = (id) => {
    navigate(`/blogView/${id}`);
  };
  return (
    <div className="container py-5 bg-light">
      <h2 className="text-center fw-bold mb-5 text-dark">Featured Blogs</h2>

      <div className="row g-4 justify-content-center">
        {latestBlog.map((blog) => (
          <div key={blog._id} className="col-12 col-sm-6 col-md-4">
            <div className="card h-100 shadow border-0 position-relative">
              {/* Badge */}
              <div
                className="position-absolute top-0 start-0 m-3 px-3 py-1 bg-warning text-dark fw-bold rounded-pill"
                style={{ fontSize: "0.85rem", zIndex: 1 }}
              >
                Latest
              </div>

              <img
                src={blog.coverImage}
                className="card-img-top"
                alt={blog.title}
                style={{ height: "240px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-dark">{blog.title}</h5>
                <h6 className="text-muted mb-2">By {blog.authorName}</h6>
                <p className="card-text text-secondary" style={{ flexGrow: 1 }}>
                  {blog.content.slice(0, 100)}...
                </p>
              </div>

              <div className="card-footer bg-white border-0">
                <button
                  className="btn btn-outline-dark w-100 fw-bold"
                  onClick={() => handleBlog(blog._id)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
