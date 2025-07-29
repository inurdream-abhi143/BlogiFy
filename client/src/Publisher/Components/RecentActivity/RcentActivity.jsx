import React from "react";
import {
  BsCheckCircleFill,
  BsClockFill,
  BsExclamationCircleFill,
} from "react-icons/bs";

const RecentActivity = () => {
  // Dummy list for now (replace with real data later)
  const activities = [
    {
      id: 1,
      icon: <BsCheckCircleFill className="text-success me-2" />,
      message: 'Blog "10 Tips for Better Writing" was approved',
      time: "2 hours ago",
    },
    {
      id: 2,
      icon: <BsClockFill className="text-primary me-2" />,
      message: 'New blog "The Future of AI" submitted for review',
      time: "1 day ago",
    },
    {
      id: 3,
      icon: <BsExclamationCircleFill className="text-warning me-2" />,
      message: 'Blog "Digital Marketing Trends" needs revision',
      time: "3 days ago",
    },
  ];

  return (
    <div className="bg-white rounded shadow-sm p-4 mt-4">
      <h5 className="fw-bold mb-3">Recent Activity</h5>
      <ul className="list-unstyled mb-0">
        {activities.map((item) => (
          <li key={item.id} className="mb-3 d-flex align-items-start">
            {item.icon}
            <div>
              <p className="mb-1 text-dark">{item.message}</p>
              <small className="text-muted">{item.time}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
