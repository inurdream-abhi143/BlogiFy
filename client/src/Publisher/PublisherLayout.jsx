import React from "react";
import PublisherNavbar from "./Components/PublisherNavbar/PublisherNavbar";
import { Outlet } from "react-router-dom";

const PublisherLayout = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Top Navbar */}
      <div className="bg-light text-white">
        <PublisherNavbar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 bg-light p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default PublisherLayout;
