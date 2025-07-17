import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const GetUsersContext = createContext(null);

export const GetUsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Invalid / Expire Token");
        return;
      }
      const res = await axios.get("http://localhost:3000/users/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(res.data);
    } catch (err) {
      console.error("failed to get the Users Data ");
    }
  };

  const value = { users };
  return (
    <GetUsersContext.Provider value={value}>
      {children}
    </GetUsersContext.Provider>
  );
};
