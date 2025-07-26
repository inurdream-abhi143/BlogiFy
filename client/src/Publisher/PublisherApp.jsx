import React from "react";
import { Route, Routes } from "react-router-dom";
import PublisherDashboard from "./pages/PublisherDashboard";
import PublisherLayout from "./PublisherLayout";
import BlogReq from "./Components/AddBlogRequest/BlogReq";
import AllPublisherBlogs from "./pages/AllPublisherBlogs";
import PublisherpendingBlogs from "./Components/PendingBlogs/PublisherpendingBlogs";
import PublisherProfile from "./pages/PublisherProfile";

const PublisherApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublisherLayout />}>
          <Route index element={<PublisherDashboard />} />

          <Route path="dashboard" element={<PublisherDashboard />} />
          <Route path="addblog" element={<BlogReq />} />
          <Route path="allblog" element={<AllPublisherBlogs />} />
          <Route path="pending-blogs" element={<PublisherpendingBlogs />} />
          <Route path="profile" element={<PublisherProfile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default PublisherApp;
