import React from "react";
import Hero_banner from "../../assets/Hero_banner.jpg";
import { Link } from "react-router-dom";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div
      className="hero-section d-flex align-items-center text-white"
      style={{
        backgroundImage: `url(${Hero_banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "92vh",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 1 }}
      ></div>

      {/* Content */}
      <div className="container position-relative z-2">
        <h1 className="display-3 fw-bold text-white text-shadow mb-4">
          Welcome to <span className="text-warning">BlogiFy</span>
        </h1>

        <p className="fs-4 text-light text-shadow mb-3">
          <span className="text-primary fw-bold">Read.</span>{" "}
          <span className="text-purple fw-bold">Write.</span>{" "}
          <span className="text-success fw-bold">Discover.</span>
        </p>

        <p className="fs-5 fw-semibold text-pink text-shadow mb-5">
          Dive into thousands of blogs — or create your own masterpiece today.
        </p>

        <div className="d-flex flex-column flex-sm-row gap-3">
          <Link
            to="/blogs"
            className="btn btn-warning btn-lg fw-bold px-4 py-2"
          >
            Explore Blogs
          </Link>
          <Link
            to="/publisher-request"
            className="btn btn-outline-light btn-lg fw-bold px-4 py-2"
          >
            Become Publisher
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
