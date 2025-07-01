import React from "react";
import { Route, Routes } from "react-router-dom";

const AdminApp = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<h1>Admin DashBoard</h1>} />
      {/* <Route path="" />
      <Route path="" /> */}
    </Routes>
  );
};

export default AdminApp;
