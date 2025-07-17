import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const PublisherRequests = () => {
  const [pendingRequest, setPendingRequest] = useState([]);

  useEffect(() => {
    getPendingRequest();
  }, []);
  const getPendingRequest = async () => {
    // debugger;
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Invalid / expire Token ");
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
      toast.error("Data not found ");
    }
  };
  const handleReject = async (id) => {
    // debugger;
    try {
      const userid = id;
      console.log(userid);
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Invalid/Expire Token");
      }

      const res = await axios.patch(
        `http://localhost:3000/users/admin-publisher-request/${userid}`,
        {
          PublisherRequest: false,
          publisherStatus: "rejected",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("publisher request Rejected");
    } catch (err) {
      toast.error("Request Rejected", err.message);
    }
  };
  const handleApprove = async (id) => {
    // debugger;
    try {
      const userid = id;
      console.log(userid);
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Invalid/Expire Token");
      }

      const res = await axios.patch(
        `http://localhost:3000/users/admin-publisher-request/${userid}`,
        {
          publisherStatus: "approved",
          role: "publisher",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("publisher request Approved");
    } catch (err) {
      toast.error("Request Rejected", err.message);
    }
  };
  console.log("data found", pendingRequest);

  return (
    <div className="container py-1">
      <header className="bg-primary text-white text-center py-4 rounded shadow mb-5">
        <h1 className="fs-2 mb-1">Publisher Requests</h1>
        <p className="mb-0">Approve or reject publisher access</p>
      </header>

      {pendingRequest.length === 0 ? (
        <div className="text-center mt-5">
          <h4 className="text-muted">No pending requests 🚫</h4>
        </div>
      ) : (
        <div className="row g-4 justify-content-center">
          {pendingRequest.map((reqs, i) => (
            <div className="col-12 col-md-8" key={i}>
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark mb-3">
                    ✉️ New Publisher Request
                  </h5>
                  <p className="mb-3">
                    <span className="fw-semibold">Email:</span>{" "}
                    <span className="text-muted">{reqs.email}</span>
                    <br />
                    <span className="fw-semibold">Username:</span>{" "}
                    <span className="text-muted">{reqs.username}</span>
                  </p>
                  <div className="d-flex gap-3 justify-content-end">
                    <button
                      className="btn btn-success px-4"
                      onClick={() => handleApprove(reqs._id)}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-outline-danger px-4"
                      onClick={() => handleReject(reqs._id)}
                    >
                      Reject
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
