import axios, { all } from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState } from "react";

const AdminsBlogsReqContext = createContext();

export const AdminsBlogsReqProvider = ({ children }) => {
  const [allPendingBlogs, SetAllPendingBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);

  const getAllBlogs = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return console.error("No token found");
    }
    const decode = jwtDecode(token);
    const id = decode.id;
    try {
      const res = await axios.get(`http://localhost:3000/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.status === 200) {
        throw new Error("Failed to fetch blogs");
      }
      setAllBlogs(res.data);

      const pendingBlogs = res.data.filter((blog, i) => {
        return blog.status === "pending";
      });
      SetAllPendingBlogs(pendingBlogs);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    }
  };

  const value = { allPendingBlogs, allBlogs, getAllBlogs };

  return (
    <AdminsBlogsReqContext.Provider value={value}>
      {children}
    </AdminsBlogsReqContext.Provider>
  );
};

export const useAdminBlogs = () => {
  return useContext(AdminsBlogsReqContext);
};
