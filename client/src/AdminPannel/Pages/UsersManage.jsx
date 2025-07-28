import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserGear, FaBan, FaEye } from "react-icons/fa6";

const UsersManage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const res = await axios.get("http://localhost:3000/users/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  return (
    <div className="container-fluid px-3 py-4 bg-dark text-light min-vh-100">
      {/* Header */}
      <header className="bg-black text-white py-3 px-4 mb-4 rounded shadow border border-secondary d-flex justify-content-between align-items-center">
        <h2 className="m-0 fw-bold">
          <FaUserGear className="me-2" />
          Users Management
        </h2>
        <span className="badge bg-warning text-dark fs-6">BlogiFy</span>
      </header>

      {/* User Table */}
      <section>
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle text-center text-light border-secondary">
            <thead className="table-dark">
              <tr>
                <th>Sr.No</th>
                <th>User ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData
                .filter((user) => user.role === "user")
                .map((user, i) => (
                  <tr key={user._id}>
                    <td>{i + 1}</td>
                    <td className="text-break">{user._id.slice(0, 6)}</td>
                    <td>{user.username}</td>
                    <td className="text-break">{user.email}</td>
                    <td>
                      <span className="badge bg-info text-dark">
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`badge ${
                          user.status === "active" ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {user.status || "unknown"}
                      </span>
                    </td>
                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-light">
                          <FaEye className="me-1" />
                          View
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <FaBan className="me-1" />
                          Suspend
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              {userData.filter((user) => user.role === "user").length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center text-muted py-4">
                    😶 No users available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default UsersManage;
