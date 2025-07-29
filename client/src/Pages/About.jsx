import React from "react";

const About = () => {
  return (
    <div className="container-fluid w-full p-0">
      {/* Hero Section */}
      <div
        className="text-white text-center"
        style={{
          background: "linear-gradient(to right, #5f72be, #9b23ea)",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 className="fw-bold display-4">About BlogiFy</h1>
        <p className="fs-5">
          Empowering voices, connecting minds, and crafting stories that matter
          in the digital age
        </p>
      </div>

      {/* Mission Section */}
      <div className="container-fluid mt-5 mb-5">
        <div className="row align-items-center ">
          {/* Left: Mission Content */}
          <div className="col-md-6 mb-4">
            <h2 className="fw-bold mb-3">Our Mission</h2>
            <p className="text-muted">
              At <strong>BlogCraft</strong>, we believe every story deserves to
              be told. Our platform provides writers, creators, and thought
              leaders with the tools they need to share their unique
              perspectives with the world.
            </p>
            <p className="text-muted">
              We’re committed to fostering authentic connections through
              meaningful content, building a community where ideas flourish and
              voices are amplified.
            </p>
          </div>

          {/* Right: Stats Box */}
          <div className="col-md-6 mb-4">
            <div
              className="p-4 rounded-4 shadow-sm"
              style={{ backgroundColor: "#f4f4fb" }}
            >
              <div className="row text-center">
                <div className="col-6 mb-3">
                  <h4 className="text-primary fw-bold">50K+</h4>
                  <small className="text-muted">Active Writers</small>
                </div>
                <div className="col-6 mb-3">
                  <h4 style={{ color: "#8e2de2" }} className="fw-bold">
                    2M+
                  </h4>
                  <small className="text-muted">Monthly Readers</small>
                </div>
                <div className="col-6">
                  <h4 className="text-success fw-bold">100K+</h4>
                  <small className="text-muted">Stories Published</small>
                </div>
                <div className="col-6">
                  <h4 className="text-warning fw-bold">95%</h4>
                  <small className="text-muted">User Satisfaction</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-white text-center pt-5"
        style={{
          background: "linear-gradient(to right, #5f72be, #9b23ea)",
          minHeight: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2 className="fw-bold display-6 ">Join Our Community</h2>
        <p className="fs-5 px-3">
          Ready to share your story with the world? Join thousands of creators
          who trust <strong>BlogCraft</strong>.
        </p>
      </div>
    </div>
  );
};

export default About;
