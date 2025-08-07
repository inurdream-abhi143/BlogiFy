import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AllBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No token found");
        return;
      }

      try {
        const res = await axios.get("http://localhost:3000/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status !== 200) {
          toast.error("No blogs found");
          return;
        }
        const data = res.data.filter((blogs) => {
          return blogs.status === "approved";
        });
        console.log(data);

        setAllBlogs(data);
        setLoading(false);
      } catch (err) {
        toast.error("Something went wrong while fetching blogs");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">🌍 Explore Blogs</h2>

      {loading ? (
        <p className="text-center text-muted">Loading blogs...</p>
      ) : allBlogs.length === 0 ? (
        <p className="text-center text-danger">No blogs available.</p>
      ) : (
        <div className="row">
          {allBlogs.map((blog) => (
            <div key={blog._id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={blog.coverImage}
                  className="card-img-top"
                  alt={blog.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{blog.title}</h5>
                  <p className="card-text text-muted mb-2">
                    <small>
                      By <strong>{blog.authorName}</strong> |{" "}
                      <span className="text-primary">{blog.category}</span>
                    </small>
                  </p>
                  <p className="card-text mb-3">
                    {blog.content?.slice(0, 100)}...
                  </p>
                  <div className="mb-2">
                    {blog.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="badge bg-secondary me-1 mb-1"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/blogView/${blog._id}`}
                    className="btn btn-outline-dark mt-auto fw-bold "
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
