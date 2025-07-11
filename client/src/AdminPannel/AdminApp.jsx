import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./AdminLayout";

const AdminApp = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />} />
      {/* <Route path="" />
      <Route path="" /> */}
    </Routes>
  );
};

export default AdminApp;
