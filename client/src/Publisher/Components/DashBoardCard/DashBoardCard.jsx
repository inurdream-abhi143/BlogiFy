import React from "react";

const DashBoardCard = () => {
  const stats = [
    { title: "Total Blogs", count: 0, color: "info" },
    { title: "Approved Blogs", count: 0, color: "success" },
    { title: "Pending Blogs", count: 0, color: "warning" },
    { title: "Rejected Blogs", count: 0, color: "danger" },
  ];

  return (
    <div className="row g-4">
      {stats.map((item, index) => (
        <div className="col-12 col-sm-6 col-lg-3" key={index}>
          <div className={`card border-0 shadow h-100`}>
            <div
              className={`card-header bg-${item.color} text-white text-center rounded-top`}
            >
              <h5 className="mb-0">{item.title}</h5>
            </div>
            <div className="card-body d-flex align-items-center justify-content-center">
              <h3 className="fw-bold text-${item.color} m-0">{item.count}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashBoardCard;
