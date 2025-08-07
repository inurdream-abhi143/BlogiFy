// AdminApp.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import AdminDashBoard from "./Pages/AdminDashBoard";
import UsersManage from "./Pages/UsersManage";
import PublisherRequests from "./Pages/publisherRequests";
import PublisherManage from "./Pages/PublisherManage";
import AdminBlog from "./Components/Adminaddblog/AdminBlog";
import AllPendingBlogs from "./Pages/AllPendingBlogs";
import AdminModeratedBlogs from "./Pages/AdminModeratedBlogs";
import AdminBlogView from "./Components/AdminBlogView/AdminBlogView";
import AdminComments from "./Pages/AdminComments";

const AdminApp = () => {
  return (
    <Routes>
      {/* Layout Route */}
      <Route path="/" element={<AdminLayout />}>
        {/* Index route — shows on /admin/ */}
        <Route index element={<AdminDashBoard />} />

        {/* Nested routes */}
        <Route path="dashboard" element={<AdminDashBoard />} />
        <Route path="users" element={<UsersManage />} />
        <Route path="publishers" element={<PublisherManage />} />
        <Route path="blogs" element={<AdminModeratedBlogs />} />
        <Route path="pendingblogs" element={<AllPendingBlogs />} />
        <Route path="publisherReq" element={<PublisherRequests />} />
        <Route path="adminblog" element={<AdminBlog />} />
        <Route path="adminblogview/:id" element={<AdminBlogView />} />
        <Route path="allcomments" element={<AdminComments />} />
      </Route>
    </Routes>
  );
};

export default AdminApp;
