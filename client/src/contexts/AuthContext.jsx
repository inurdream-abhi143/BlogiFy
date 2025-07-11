import React, { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    try {
      const token = localStorage.getItem("token") || "";
      if (!token) return { token: null, role: null };
      const decoded = jwtDecode(token);
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
    }
  });

  const value = { auth, setAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
