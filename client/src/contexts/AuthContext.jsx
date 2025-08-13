import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { decode } from "jsonwebtoken";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
    toast.success("Session Expire Relogin");
  };
  const autoLogOut = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const decode = jwtDecode(token);
    const expTime = decode.exp * 1000;
    const currentTime = Date.now();

    const timeLeft = expTime - currentTime;
    // console.log("time Left for Auto Logout", timeLeft);

    if (timeLeft <= 0) {
      logOut();
    } else {
      setTimeout(() => {
        logOut();
      }, timeLeft);
    }
  };

  const [auth, setAuth] = useState(() => {
    try {
      const token = localStorage.getItem("token") || "";
      if (!token) return { token: null, role: null };
      const decoded = jwtDecode(token);
      // console.log("token", decoded);

      return {
        token,
        role: decoded.role || null,
      };
    } catch (err) {
      toast.error("Invalid/Expired token");
      localStorage.removeItem("token");
      return {
        token: null,
        role: null,
      };
    } finally {
      setLoading(false);
    }
  });
  useEffect(() => {
    autoLogOut();
  }, [auth.token]);

  const value = { auth, setAuth, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
