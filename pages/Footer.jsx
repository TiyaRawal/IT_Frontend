import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import "../styles/Footer.css";

const Footer = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get("/services");
        const servicesData = response.data.services || [];
        const importantServices = [
          "Web Development",
          "Mobile App Development",
          "UI/UX Design",
          "Cloud Solutions & DevOps",
          "AI & Data Solutions",
          "Cybersecurity",
        ];

        const filteredServices = importantServices
          .map((title) =>
            servicesData.find(
              (service) => service.title?.toLowerCase() === title.toLowerCase(),
            ),
          )
          .filter(Boolean);
        setServices(filteredServices);
      } catch (error) {
        console.error("Error fetching footer services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <footer className="footer-main">
      <div className="footer-container">
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

        <div className="footer-column">
          <h3 className="footer-heading">IT Services</h3>

          {services.length > 0 ? (
            services.map((service) => (
              <Link key={service._id} to={`/servicedetails/${service._id}`}>
                {service.title}
              </Link>
            ))
          ) : (
            <span className="footer-loading">Loading services...</span>
          )}
        </div>

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