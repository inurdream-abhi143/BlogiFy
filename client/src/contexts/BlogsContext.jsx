import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState } from "react";

// its is for single user blogs for publisher

const BlogContext = createContext(null);

export const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return console.error("No token found");
    }
    const decode = jwtDecode(token);

    const id = decode.id;
    try {
      const res = await fetch(`http://localhost:3000/usersblogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    }
  };

  const value = { blogs, getBlogs };
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export const useBlog = () => {
  return useContext(BlogContext);
};
