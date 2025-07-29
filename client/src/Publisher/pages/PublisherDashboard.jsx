import React from "react";
import DashBoardCard from "../Components/DashBoardCard/DashBoardCard";
import RecentActivity from "../Components/RecentActivity/RcentActivity";

const PublisherDashboard = () => {
  return (
    <div className="container py-4 bg-light text-dark min-vh-100">
      <header className="bg-black text-white py-4 px-3 rounded shadow mb-4 border border-secondary">
        <h1 className="fs-3 mb-0 text-center">📊 Publisher Dashboard</h1>
      </header>

      <DashBoardCard />

      <div className="mt-4">
        <RecentActivity />
      </div>
    </div>
  );
};

export default PublisherDashboard;
