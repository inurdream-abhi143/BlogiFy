import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";
import { LoginContext } from "../../contexts/LoginContext";

const Navbar = () => {
  const { loginInfo } = useContext(LoginContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 px-4 sticky-top shadow-sm">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-2 text-warning" to="/">
          BlogiFy
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Nav Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
            {["Home", "Blogs", "About", "Contact"].map((page) => (
              <li className="nav-item" key={page}>
                <Link
                  className="nav-link text-light fw-semibold"
                  to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                >
                  {page}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <form className="d-flex align-items-center me-3" role="search">
            <input
              className="form-control rounded-start-pill border-0 shadow-sm px-3"
              type="search"
              placeholder="Search blogs..."
              aria-label="Search"
              style={{ minWidth: "200px" }}
            />
            <button
              className="btn btn-warning rounded-end-pill px-3"
              type="submit"
            >
              <FaSearch />
            </button>
          </form>

          {/* Login or Username */}
          {loginInfo && loginInfo.username ? (
            <Link to="/profile" className="btn btn-outline-warning fw-semibold">
              {loginInfo.username}
            </Link>
          ) : (
            <Link to="/login" className="btn btn-warning fw-semibold">
              <RiLoginBoxLine className="me-2" />
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
