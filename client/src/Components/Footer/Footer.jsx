import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import "./Footer.css"; // You'll add custom styles here

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo and Quote */}
          <div className="col-md-4 mb-4 d-flex flex-column align-items-center align-items-md-start">
            <h2 className="fw-bold logo text-warning">BlogiFy</h2>
            <p className="text-secondary fst-italic small footer-quote">
              “Turning thoughts into words, and words into worlds.” ✍️🌍
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-4 d-flex flex-column align-items-center align-items-md-start">
            <h5 className="fw-semibold">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-decoration-none text-white footer-link"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-decoration-none text-white footer-link"
                >
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/privacy"
                  className="text-decoration-none text-white footer-link"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4 mb-4 d-flex flex-column align-items-center align-items-md-start">
            <h5 className="fw-semibold">Follow Us</h5>
            <div className="d-flex gap-3 mt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white fs-5 footer-icon"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white fs-5 footer-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white fs-5 footer-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-white fs-5 footer-icon"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />
        <p className="text-center text-secondary mt-4 small">
          © 2025 <span className="text-warning">BlogiFy</span>. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
