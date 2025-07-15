import React from "react";
import { MdArticle, MdPendingActions } from "react-icons/md";
import { FaUserTie, FaUsers } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

const AdminDashBoard = () => {
  const stats = [
    { label: "Total Blogs", value: 0, icon: <MdArticle />, color: "primary" },
    { label: "Publishers", value: 0, icon: <FaUserTie />, color: "success" },
    { label: "Users", value: 0, icon: <FaUsers />, color: "info" },
    {
      label: "Pending Blogs",
      value: 0,
      icon: <MdPendingActions />,
      color: "danger",
    },
  ];

  return (
    <div className="container-fluid px-4 py-4">
      {/* Header */}
      <header className="bg-dark text-white py-3 px-4 mb-4 rounded d-flex justify-content-between align-items-center shadow-sm">
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
            <div className={`card text-white bg-${card.color} shadow h-100`}>
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
          <div className="card shadow h-100">
            <div className="card-header fw-bold bg-light">
              🕒 Recent Activity
            </div>
            <ul
              className="list-group list-group-flush overflow-auto"
              style={{ maxHeight: "300px" }}
            >
              <li className="list-group-item">
                ✅ Blog Approved: <b>“Intro to Node.js”</b>{" "}
                <span className="text-muted small">· 1 hr ago</span>
              </li>
              <li className="list-group-item">
                ✏️ Publisher Request by <b>“JohnDoe”</b>{" "}
                <span className="text-muted small">· 2 hrs ago</span>
              </li>
            
            </ul>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-md-6 mb-4">
          <div className="card shadow h-100">
            <div className="card-header fw-bold bg-light">⚡ Quick Actions</div>
            <div className="card-body d-grid gap-3">
              <button className="btn btn-outline-primary">Approve Blogs</button>
              <button className="btn btn-outline-success">
                Publisher Requests
              </button>
              <button className="btn btn-outline-warning">Suspend User</button>
              {/* 😈 you finish this 25% – maybe add “View Reports” or “Settings” */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
