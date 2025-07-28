import React, { useContext, useEffect } from "react";
import { MdArticle, MdPendingActions } from "react-icons/md";
import { FaUserTie, FaUsers } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useAdminBlogs } from "../../contexts/AdminsBlogsReqContext";
import { GetUsersContext } from "../../contexts/GetUsersContext";

const AdminDashBoard = () => {
  const navigate = useNavigate();

  const { allBlogs, getAllBlogs, allPendingBlogs } = useAdminBlogs();
  const { users, getAllUsers } = useContext(GetUsersContext);
  useEffect(() => {
    getAllBlogs();
    getAllUsers();
  }, []);

  const userslength = users.filter((user) => user.role === "user");
  const publisherslength = users.filter((user) => user.role === "publisher");
  const stats = [
    {
      label: "Total Blogs",
      value: allBlogs.length,
      icon: <MdArticle />,
      color: "primary",
    },
    {
      label: "Publishers",
      value: publisherslength.length,
      icon: <FaUserTie />,
      color: "success",
    },
    {
      label: "Users",
      value: userslength.length,
      icon: <FaUsers />,
      color: "info",
    },
    {
      label: "Pending Blogs",
      value: allPendingBlogs.length || "0",
      icon: <MdPendingActions />,
      color: "danger",
    },
  ];

  return (
    <div className="container-fluid px-4 py-4 bg-dark text-light min-vh-100">
      {/* Header */}
      <header className="bg-black text-white py-3 px-4 mb-4 rounded d-flex justify-content-between align-items-center shadow-sm border border-secondary">
        <h2 className="m-0 fw-bold">
          <FiSettings className="me-2" />
          Admin Dashboard
        </h2>
        <span className="badge bg-warning text-dark fs-6">BlogiFy</span>
      </header>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        {stats.map((card, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-3">
            <div
              className={`card bg-dark border border-${card.color} text-${card.color} shadow h-100`}
            >
              <div className="card-body text-center">
                <div className="fs-1 mb-2">{card.icon}</div>
                <h5 className="card-title">{card.label}</h5>
                <h3 className="fw-bold">{card.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Actions & Activity */}
      <div className="row">
        {/* Recent Activity */}
        <div className="col-md-6 mb-4">
          <div className="card bg-black text-light shadow h-100 border border-secondary">
            <div className="card-header fw-bold bg-secondary text-white">
              🕒 Recent Activity
            </div>
            <ul
              className="list-group list-group-flush overflow-auto bg-black"
              style={{ maxHeight: "300px" }}
            >
              <li className="list-group-item bg-dark text-light border-secondary">
                ✅ Blog Approved: <b>“Intro to Node.js”</b>{" "}
                <span className="text-muted small">· 1 hr ago</span>
              </li>
              <li className="list-group-item bg-dark text-light border-secondary">
                ✏️ Publisher Request by <b>“JohnDoe”</b>{" "}
                <span className="text-muted small">· 2 hrs ago</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-md-6 mb-4">
          <div className="card bg-black text-light shadow h-100 border border-secondary">
            <div className="card-header fw-bold bg-secondary text-white">
              ⚡ Quick Actions
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <button className="btn btn-outline-primary w-100 py-4 d-flex align-items-center justify-content-center gap-2 disabled">
                    <MdArticle /> Approve Blogs
                  </button>
                </div>
                <div className="col-12 col-sm-6">
                  <Link
                    to="/admin/publisherReq"
                    className="text-decoration-none"
                  >
                    <button className="btn btn-outline-success w-100 py-4 d-flex align-items-center justify-content-center gap-2">
                      <FaUserTie />
                      Publisher Requests
                    </button>
                  </Link>
                </div>
                <div className="col-12 col-sm-6">
                  <button className="btn btn-outline-warning w-100 py-4 d-flex align-items-center justify-content-center gap-2 disabled">
                    <FaUsers /> Suspended Users
                  </button>
                </div>
                <div className="col-12 col-sm-6">
                  <Link to="/admin/adminblog" className="text-decoration-none">
                    <button className="btn btn-outline-light w-100 py-4 d-flex align-items-center justify-content-center gap-2">
                      <MdArticle />
                      Add Blog
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
