import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "../Components/Comments/Comments";
import ViewComment from "../Components/viewComments/viewComment";

const BlogView = () => {
  const { id } = useParams(); // ⬅️ get blog ID from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return console.error("No token found ");
      }
      try {
        const res = await axios.get(`http://localhost:3000/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlog(res.data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <div className="text-center mt-5">Loading blog...</div>;

  return (
    <div className="container my-5">
      <div className="card shadow-sm ">
        {/* Image */}
        {blog.coverImage && (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="card-img-top"
            style={{
              maxHeight: "400px",
              objectFit: "contain",
              repeat: "no-repeat",
            }}
          />
        )}

        {/* Blog Body */}
        <div className="card-body">
          <h2 className="card-title mb-3">{blog.title}</h2>
          <div className="mb-2 text-muted">
            <span className="me-3">👨‍💻 {blog.authorName}</span>
            <span>🕒 {new Date(blog.updatedAt).toLocaleString()}</span>
          </div>

          <div className="mb-3">
            <p>
              Category:
              <span className="badge bg-primary me-2 mx-2">
                {blog.category}
              </span>
            </p>
            <p>
              Tags:
              {blog.tags?.map((tag, i) => (
                <span key={i} className="badge bg-secondary me-1 mx-2">
                  #{tag}
                </span>
              ))}
            </p>
          </div>

          <hr />
          {/* Content */}
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
        <Comments id={id} />
        <ViewComment id={id} />
      </div>
    </div>
  );
};

export default BlogView;
