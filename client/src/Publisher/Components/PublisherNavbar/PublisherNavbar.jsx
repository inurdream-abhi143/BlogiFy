import React from "react";
import { Link } from "react-router-dom";

const PublisherNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container-fluid px-4">
        {/* Brand */}
        <Link to="/publisher/dashboard" className="navbar-brand fw-bold fs-4">
          🚀 Publisher Panel
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#publisherNavbar"
          aria-controls="publisherNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Right-aligned nav links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="publisherNavbar"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-3 fs-5">
            <li className="nav-item">
              <Link to="/publisher/dashboard" className="nav-link">
                📊 Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/publisher/addblog" className="nav-link">
                ✍️ Publish Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/publisher/pending-blogs" className="nav-link">
                ⏳ Pending Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/publisher/blog-history" className="nav-link">
                📚 Blog History
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/publisher/profile" className="nav-link">
                👤 Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PublisherNavbar;
