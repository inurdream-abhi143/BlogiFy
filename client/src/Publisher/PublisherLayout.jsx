import React from "react";
import { Route, Routes } from "react-router-dom";

const PublisherLayout = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<h1>Publisher DashBoard</h1>} />
      <Route path="addblog" element={<h1>Add Blog</h1>} />
      <Route path="allblog" element={<h1>See All Blogs</h1>} />
    </Routes>
  );
};

export default PublisherLayout;
