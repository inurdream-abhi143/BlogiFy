import React, { useContext } from "react";
import { LoginContext } from "./contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const UserProfile = () => {
  const navigate = useNavigate();
  const { loginInfo, setLoginInfo } = useContext(LoginContext);

  const username = loginInfo?.username || "Guest User";
  const email = loginInfo?.email || "guest@example.com";
  const initials =
    username
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "GU";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const handleDelete = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Failed to get token");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const id = decoded.id;

      fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            toast.error("Failed to delete User");
          } else {
            toast.success("User deleted successfully");
            localStorage.removeItem("token");
            localStorage.removeItem("userInfo");
            setLoginInfo(null);
            navigate("/");
          }
        })
        .catch((error) => {
          toast.error(`Error deleting account: ${error.message}`);
        });
    } catch (err) {
      toast.error("Invalid or Expired Token");
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card p-4 shadow w-100" style={{ maxWidth: "600px" }}>
        <div className="d-flex flex-column align-items-center text-center">
          <div
            className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center mb-4"
            style={{ width: "100px", height: "100px", fontSize: "2.5rem" }}
          >
            {initials}
          </div>

          {/* Username */}
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-person-circle me-2 text-secondary fs-5"></i>
            <h4 className="fw-bold m-0">{username}</h4>
          </div>

          {/* Email */}
          <div className="d-flex align-items-center mb-4">
            <i className="bi bi-envelope-at-fill me-2 text-secondary fs-6"></i>
            <p className="m-0">{email}</p>
          </div>

          {/* Buttons */}
          <div className="d-flex flex-column flex-sm-row gap-2 mt-3 w-100 justify-content-center">
            <button className="btn btn-primary px-4" onClick={handleLogout}>
              Logout
            </button>
            <button
              className="btn btn-outline-danger px-4"
              onClick={handleDelete}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
