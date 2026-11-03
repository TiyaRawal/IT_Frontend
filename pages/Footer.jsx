import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const services = [
  {
    _id: "6accb99aa6d948c7dca12813",
    title: "Web Development",
  },
  {
    _id: "6accb99aa6d948c7dca12814",
    title: "Mobile App Development",
  },
  {
    _id: "6accb99aa6d948c7dca12816",
    title: "UI/UX Design",
  },
  {
    _id: "6accb99aa6d948c7dca12819",
    title: "Cloud Solutions & DevOps",
  },
  {
    _id: "6accb99aa6d948c7dca1281a",
    title: "AI & Data Solutions",
  },
  {
    _id: "6accb99aa6d948c7dca1281c",
    title: "Cybersecurity",
  },
];

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        {/* Company */}
        <div className="footer-company">
          <Link to="/" className="footer-logo">
            <span>IT Company</span>
          </Link>

          <p className="footer-company-text">
            We provide innovative IT and digital solutions that help businesses
            grow, transform, and succeed in a digital world.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href="https://x.com/"
              aria-label="X"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a
              href="https://github.com/"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* IT Services */}
        <div className="footer-column">
          <h3 className="footer-heading">IT Services</h3>

          {services.map((service) => (
            <Link key={service._id} to={`/servicedetails/${service._id}`}>
              {service.title}
            </Link>
          ))}
        </div>

        {/* Company Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Company</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Contact Details */}
        <div className="footer-column footer-contact">
          <h3 className="footer-heading">Contact Details</h3>

          <div className="footer-contact-item">
            <i className="fa-solid fa-location-dot footer-contact-icon"></i>
            <div>
              <strong>Address</strong>
              <p>
                Ahmedabad, Gujarat,
                <br />
                India
              </p>
            </div>
          </div>

          <div className="footer-contact-item">
            <i className="fa-solid fa-phone footer-contact-icon"></i>
            <div>
              <strong>Phone</strong>
              <a href="tel:+910000000000">+91 00000 00000</a>
            </div>
          </div>

          <div className="footer-contact-item">
            <i className="fa-solid fa-envelope footer-contact-icon"></i>
            <div>
              <strong>Email</strong>
              <a href="mailto:hello@yourbrand.com">hello@yourbrand.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} IT Company. All Rights Reserved.
        </p>

        <div className="footer-legal">
          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/termsandconditions">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;