import React from "react";
import { Link } from "react-router-dom";

const PublisherNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-4 ">
      <div className="container">
        <div className="navbar-brand fw-bold fs-4 text-white ">
          Publisher Dashboard
        </div>

        {/* Toggler for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navigation Items */}
        <div className="collapse navbar-collapse fs-5 " id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link to="/publisher/dashboard" className="nav-link text-white">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/publisher/addblog" className="nav-link text-white">
                Publish Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/publisher/pending-blogs"
                className="nav-link text-white"
              >
                Pending Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/publisher/blog-history"
                className="nav-link text-white"
              >
                Blog History
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/publisher/profile" className="nav-link text-white">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PublisherNavbar;
