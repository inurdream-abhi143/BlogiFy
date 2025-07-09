import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return <div>{children}</div>;
};

export default ProtectedRoutes;
