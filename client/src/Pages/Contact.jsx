import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Get in Touch</h2>
        <p className="text-muted">
          Have a question, suggestion, or just want to say hello? We'd love to
          hear from you. Drop us a message and we'll get back to you as soon as
          possible.
        </p>
      </div>

      <div className="row g-4">
        {/* LEFT: Form Card Placeholder */}
        <div className="col-lg-8">
          <div className="card shadow-sm p-4">
            <h5 className="mb-4 fw-semibold">Send us a Message</h5>
            {/* You'll write the form here 🧠 */}
            <p className="text-muted">[Form goes here — you're the boss 😎]</p>
          </div>
        </div>

        {/* RIGHT: Info + Socials */}
        <div className="col-lg-4 d-flex flex-column gap-4">
          {/* Contact Info */}
          <div className="card shadow-sm p-4">
            <h5 className="fw-semibold mb-3">Contact Information</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-3 d-flex align-items-start">
                <FaEnvelope className="me-2 text-primary mt-1" />
                <div>
                  <strong>Email</strong>
                  <br />
                  hello@blogname.com
                </div>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <FaPhoneAlt className="me-2 text-primary mt-1" />
                <div>
                  <strong>Phone</strong>
                  <br />
                  +91 95642 12345
                </div>
              </li>
              <li className="d-flex align-items-start">
                <FaMapMarkerAlt className="me-2 text-primary mt-1" />
                <div>
                  <strong>Address</strong>
                  <br />
                  Phase 5, Mohali, Punjab
                </div>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="card shadow-sm p-4">
            <h5 className="fw-semibold mb-3">Follow Us</h5>
            <div className="d-flex gap-2 flex-wrap">
              <button className="btn btn-sm btn-outline-primary">
                <FaFacebookF /> Facebook
              </button>
              <button className="btn btn-sm btn-outline-info">
                <FaTwitter /> Twitter
              </button>
              <button className="btn btn-sm btn-outline-danger">
                <FaInstagram /> Instagram
              </button>
              <button className="btn btn-sm btn-outline-dark">
                <FaLinkedinIn /> LinkedIn
              </button>
            </div>
            <p className="text-muted small mt-3 mb-0">
              We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
