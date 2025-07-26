import { jwtDecode } from "jwt-decode";
import React from "react";
import { useNavigate } from "react-router-dom";

const PublisherProfile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    return console.error("No token found");
  }
  const decode = jwtDecode(token);
  console.log("Decoded Token:", decode);
  const initials = decode.username
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    navigate("/login");
  };
  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card p-4 shadow w-100" style={{ maxWidth: "600px" }}>
        <div className="d-flex flex-column align-items-center text-center">
          <div
            className="rounded-circle bg-warning text-white d-flex justify-content-center align-items-center mb-4"
            style={{ width: "100px", height: "100px", fontSize: "2.5rem" }}
          >
            {initials}
          </div>

          <h4 className="fw-bold mb-1">{decode.username}</h4>
          <p className="text-muted mb-2">{decode.email}</p>

          <div className="mt-3">
            <button
              className="btn btn-warning fw-semibold px-4"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherProfile;
