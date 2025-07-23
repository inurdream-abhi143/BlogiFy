import React from "react";
import { Route, Routes } from "react-router-dom";
import PublisherDashboard from "./pages/PublisherDashboard";
import PublisherLayout from "./PublisherLayout";
import BlogReq from "./Components/AddBlogRequest/BlogReq";

const PublisherApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublisherLayout />}>
          <Route index element={<PublisherDashboard />} />

          <Route path="dashboard" element={<PublisherDashboard />} />
          <Route path="addblog" element={<BlogReq />} />
          <Route path="allblog" element={<h1>See All Blogs</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default PublisherApp;
