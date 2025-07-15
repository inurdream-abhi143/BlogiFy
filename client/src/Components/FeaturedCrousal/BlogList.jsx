import React from "react";

const featuredBlogs = [
  {
    id: 1,
    title: "Mastering React in 2025",
    author: "Abhishek Dhiman",
    image:
      "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=764&auto=format&fit=crop",
    snippet: "Dive into hooks, context, suspense, and what’s next in React...",
  },
  {
    id: 2,
    title: "Top 10 Web Dev Trends",
    author: "DevTribe",
    image:
      "https://plus.unsplash.com/premium_photo-1661412605204-504ec6726508?q=80&w=1632&auto=format&fit=crop",
    snippet: "From server components to edge deployments — stay ahead!",
  },
  {
    id: 3,
    title: "How to Stay Consistent as a Coder",
    author: "CodeZen",
    image:
      "https://plus.unsplash.com/premium_photo-1661297453206-7f61228e5323?q=80&w=1170&auto=format&fit=crop",
    snippet: "Motivation fades. Habits don’t. Here’s how to build them...",
  },
];

const BlogList = () => {
  return (
    <div className="container py-5 bg-light">
      <h2 className="text-center fw-bold mb-5 text-dark">Featured Blogs</h2>

      <div className="row g-4 justify-content-center">
        {featuredBlogs.map((blog) => (
          <div key={blog.id} className="col-12 col-sm-6 col-md-4">
            <div className="card h-100 shadow border-0 position-relative">
              {/* Featured Badge */}
              <div
                className="position-absolute top-0 start-0 m-3 px-3 py-1 bg-warning text-dark fw-bold rounded-pill"
                style={{ fontSize: "0.85rem", zIndex: 1 }}
              >
                🌟 Featured
              </div>

              <img
                src={blog.image}
                className="card-img-top"
                alt={blog.title}
                style={{ height: "240px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-dark">{blog.title}</h5>
                <h6 className="text-muted mb-2">By {blog.author}</h6>
                <p className="card-text text-secondary">{blog.snippet}</p>
              </div>

              <div className="card-footer bg-white border-0">
                <button className="btn btn-outline-dark w-100 fw-bold">
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

export default BlogList;
