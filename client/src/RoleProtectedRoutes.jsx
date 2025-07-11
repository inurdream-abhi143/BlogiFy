import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { toast } from "react-toastify";

const RoleProtectedRoutes = ({ children, requiredRole }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token) {
      toast.error("Didn't get the token");
      navigate("/login");
      return;
    } else if (auth.role !== requiredRole) {
      toast.error("You dont'have access to Admin Dashboard");
      navigate("/accessDenied");
      return null;
    }
  }, [auth, requiredRole, navigate]);

  return <div>{children}</div>;
};

export default RoleProtectedRoutes;
