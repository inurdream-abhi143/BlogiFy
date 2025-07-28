import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const PublisherRequests = () => {
  const [pendingRequest, setPendingRequest] = useState([]);

  useEffect(() => {
    getPendingRequest();
  }, []);

  const getPendingRequest = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Invalid / expired Token");
      return;
    }

    try {
      const res = await axios.get(
        "http://localhost:3000/users/pending-publisher-requests",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPendingRequest(res.data);
    } catch (err) {
      toast.error("Failed to fetch requests");
    }
  };

  const handleReject = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        `http://localhost:3000/users/admin-publisher-request/${id}`,
        {
          PublisherRequest: false,
          publisherStatus: "rejected",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Request Rejected");
      getPendingRequest();
    } catch (err) {
      toast.error("Error rejecting request");
    }
  };

  const handleApprove = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        `http://localhost:3000/users/admin-publisher-request/${id}`,
        {
          publisherStatus: "approved",
          role: "publisher",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Request Approved");
      getPendingRequest();
    } catch (err) {
      toast.error("Error approving request");
    }
  };

  return (
    <div className="container-fluid py-4 px-3 bg-dark text-light min-vh-100">
      <header className="bg-black text-white py-3 px-4 mb-4 rounded shadow border border-secondary">
        <h2 className="m-0 fw-bold text-center">📨 Publisher Requests</h2>
        <p className="text-center text-muted mb-0">Approve or reject access</p>
      </header>

      {pendingRequest.length === 0 ? (
        <div className="text-center mt-5">
          <h4 className="text-muted">🚫 No pending requests</h4>
        </div>
      ) : (
        <div className="row g-4 justify-content-center">
          {pendingRequest.map((req, i) => (
            <div className="col-12 col-md-8" key={i}>
              <div className="card bg-secondary bg-gradient text-light shadow border-0">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                    🆕 Publisher Request
                  </h5>
                  <p className="mb-3">
                    <strong>Email:</strong> {req.email}
                    <br />
                    <strong>Username:</strong> {req.username}
                  </p>
                  <div className="d-flex gap-3 justify-content-end">
                    <button
                      className="btn btn-success"
                      onClick={() => handleApprove(req._id)}
                    >
                      ✅ Approve
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleReject(req._id)}
                    >
                      ❌ Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PublisherRequests;
