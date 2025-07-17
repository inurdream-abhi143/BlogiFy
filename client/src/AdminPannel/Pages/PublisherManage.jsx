import React, { useContext, useEffect, useState } from "react";
import { GetUsersContext } from "../../contexts/GetUsersContext";
import { FaUserGear, FaBan, FaEye } from "react-icons/fa6";

const PublisherManage = () => {
  const { users } = useContext(GetUsersContext);
  const [publisher, setPublisher] = useState([]);

  const publishers = users.filter((pub) => pub.role === "publisher");

  useEffect(() => {
    setPublisher(publishers);
    console.log("all data ", users);
  }, []);

  return (
    <div className="container pb-5">
      {/* Page Header */}
      <header className="bg-dark text-white py-3 px-4 mb-4 rounded d-flex justify-content-between align-items-center shadow-sm">
        <h2 className="m-0 fw-bold">
          <FaUserGear className="me-2" />
          Publisher Management
        </h2>
        <span className="badge bg-warning text-dark fs-6">BlogiFy</span>
      </header>

      {/* Publisher Table */}
      <div className="table-responsive">
        <table className="table table-hover table-bordered align-middle shadow-sm">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Publisher ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Joined</th>
              <th scope="col">Last Update</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {publisher.length > 0 ? (
              publisher.map((publis, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td className="text-muted">{publis._id.slice(0, 6)}</td>
                  <td>{publis.username}</td>
                  <td>{publis.email}</td>
                  <td>
                    <span
                      className={`badge rounded-pill ${
                        publis.status === "active"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {publis.status}
                    </span>
                  </td>
                  <td>{new Date(publis.createdAt).toLocaleDateString()}</td>
                  <td>{new Date(publis.updatedAt).toLocaleDateString()}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-outline-primary btn-sm">
                        Edit
                      </button>
                      <button className="btn btn-outline-danger btn-sm text-dark">
                        Suspend
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center text-muted py-4 fs-5">
                  💤 No publishers available to show right now.
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
