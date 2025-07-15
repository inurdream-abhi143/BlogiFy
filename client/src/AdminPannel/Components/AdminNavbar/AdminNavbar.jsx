import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/admin/dashboard" },
  { label: "Users", path: "/admin/users" },
  { label: "Publisher", path: "/admin/publishers" },
  { label: "Blogs", path: "/admin/blogs" },
  { label: "Pending Blogs", path: "/admin/pendingblogs" },
];

const AdminNavbar = () => {
  const location = useLocation();

  return (
    <div
      className="d-flex flex-column justify-content-between bg-dark text-white p-3"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <div>
        <h4 className="text-center fw-bold mb-4">Blogify Admin</h4>
        <hr className="border-secondary" />

        <ul className="nav flex-column">
          {navItems.map((item) => (
            <li className="nav-item mb-2" key={item.label}>
              <Link
                to={item.path}
                className={`nav-link text-white rounded ${
                  location.pathname === item.path
                    ? "bg-secondary text-warning"
                    : "hover-bg"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center mt-3">
        <button className="btn btn-danger w-100 mb-4">Logout</button>
      </div>
    </div>
  );
};

export default AdminNavbar;
