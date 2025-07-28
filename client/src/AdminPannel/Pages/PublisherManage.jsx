import React, { useContext, useEffect, useState } from "react";
import { GetUsersContext } from "../../contexts/GetUsersContext";
import { FaUserGear } from "react-icons/fa6";

const PublisherManage = () => {
  const { users } = useContext(GetUsersContext);
  const [publisher, setPublisher] = useState([]);

  useEffect(() => {
    const publishers = users.filter((user) => user.role === "publisher");
    setPublisher(publishers);
  }, [users]);

  return (
    <div className="container-fluid py-4 px-3 bg-dark text-light min-vh-100">
      {/* Header */}
      <header className="bg-black text-white py-3 px-4 mb-4 rounded shadow border border-secondary d-flex justify-content-between align-items-center">
        <h2 className="m-0 fw-bold">
          <FaUserGear className="me-2" />
          Publisher Management
        </h2>
        <span className="badge bg-warning text-dark fs-6">BlogiFy</span>
      </header>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle text-center text-light border-secondary">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Publisher ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Last Update</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {publisher.length > 0 ? (
              publisher.map((pub, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td className="text-break">{pub._id.slice(0, 6)}</td>
                  <td>{pub.username}</td>
                  <td className="text-break">{pub.email}</td>
                  <td>
                    <span
                      className={`badge rounded-pill ${
                        pub.status === "active"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {pub.status}
                    </span>
                  </td>
                  <td>{new Date(pub.createdAt).toLocaleDateString()}</td>
                  <td>{new Date(pub.updatedAt).toLocaleDateString()}</td>
                  <td>
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-info">
                        Edit
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        Suspend
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center text-muted py-4 fs-5">
                  💤 No publishers available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PublisherManage;
