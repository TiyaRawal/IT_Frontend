import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/CapabilityDetail.css";
import api from "../utils/api";

const CapabilityDetail = () => {
  const { id } = useParams();
  const [capability, setCapability] = useState(null);
  const [servicesList, setServicesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");
        const [capabilityResponse, servicesResponse] = await Promise.all([
          api.get(`/capabilities/${id}`),
          api.get("/services"),
        ]);

        if (!active) return;

        if (
          capabilityResponse.data.success &&
          capabilityResponse.data.capability
        ) {
          setCapability(capabilityResponse.data.capability);
        } else {
          setError(capabilityResponse.data.message || "Capability Not Found");
        }

        if (servicesResponse.data.success) {
          setServicesList(servicesResponse.data.services || []);
        }
      } catch (err) {
        if (!active) return;
        setError(
          err.response?.data?.message || "Unable to load capability details.",
        );
      } finally {
        if (active) setLoading(false);
      }
    };

    if (id) {
      fetchData();
    } else {
      setLoading(false);
      setError("Capability ID is missing.");
    }
    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="capability-status">
        <div className="capability-loader"></div>
        <p>Loading capability details...</p>
      </div>
    );
  }

  if (error || !capability) {
    return (
      <div className="capability-status">
        <h2>Capability Not Found</h2>
        <p>{error || "No capability details are available."}</p>

        <Link to="/" className="capability-primary-btn">
          Back to Home
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    );
  }

  const title = capability.title || capability.name || "Our Capability";
  const subtitle =
    capability.subtitle || "Technology solutions designed around your needs.";
  const description =
    capability.description || "Explore our capabilities and solutions.";

  const services = Array.isArray(capability.services)
    ? capability.services
    : [];

  const getMatchingService = (expertiseTitle) => {
    const titleToService = {
      "Business & Requirement Analysis": "Technology Consulting",
      "Technology Consulting": "Technology Consulting",
      "Project Planning": "Technology Consulting",
      "Solution Architecture": "Technology Consulting",

      "Web Application Development": "Web Development",
      "Custom Software Solutions": "Custom Software Development",
      "API Development & Integration": "Web Development",
      "Database Solutions": "Web Development",

      "Process Automation": "AI & Data Solutions",
      "System Modernization": "Custom Software Development",
      "Cloud Solutions": "Cloud Solutions & DevOps",
      "Digital Optimization": "Cloud Solutions & DevOps",

      "Technical Support": "Website Maintenance & Support",
      "Bug Fixes & Improvements": "Website Maintenance & Support",
      "Security Updates": "Cybersecurity",
      "Performance Monitoring": "Website Maintenance & Support",
    };

    const mappedTitle = titleToService[expertiseTitle];
    if (!mappedTitle) return null;

    return servicesList.find(
      (service) => service.title?.toLowerCase() === mappedTitle.toLowerCase(),
    );
  };

  return (
    <main className="capability-detail-page">
      <section className="capability-hero">
        <div className="capability-hero-container">
          <div className="capability-hero-content">
            <span className="capability-label">OUR CAPABILITIES</span>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p className="capability-hero-description">{description}</p>

            <Link to="/contact" className="capability-primary-btn">
              Discuss Your Project
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="capability-hero-visual">
            <div className="capability-visual-circle circle-one"></div>
            <div className="capability-visual-circle circle-two"></div>

            <div className="capability-visual-card">
              <div className="capability-visual-icon">
                <i className={capability.icon || "fa-solid fa-code"}></i>
              </div>

              <h3>{title}</h3>
              <p>Practical solutions. Meaningful results.</p>
              <div className="capability-visual-divider"></div>

              <div className="capability-visual-bottom">
                <span>Technology built around your goals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="capability-services">
        <div className="capability-services-container">
          <div className="capability-section-heading">
            <span className="capability-label">WHAT WE OFFER</span>
            <h2>
              Our <span>{title}</span> Services
            </h2>
            <p>
              Explore the services and solutions available for your business
              requirements.
            </p>
          </div>

          {services.length > 0 ? (
            <div className="capability-services-grid">
              {services.map((service, index) => {
                const serviceTitle =
                  typeof service === "string"
                    ? service
                    : service.title || service.name || "Our Service";
                const serviceDescription =
                  typeof service === "string" ? "" : service.description || "";

                const serviceIcon =
                  typeof service === "string"
                    ? "fa-solid fa-check"
                    : service.icon || "fa-solid fa-check";

                const matchingService = getMatchingService(serviceTitle);
                const serviceId =
                  matchingService?._id ||
                  (typeof service === "object"
                    ? service.serviceId || service.service_id
                    : null);

                return (
                  <article
                    className="capability-service-card"
                    key={`${serviceTitle}-${index}`}
                  >
                    <div className="capability-service-icon">
                      <i className={serviceIcon}></i>
                    </div>
                    <h3>{serviceTitle}</h3>

                    {serviceDescription && <p>{serviceDescription}</p>}
                    {serviceId ? (
                      <Link
                        to={`/servicedetails/${serviceId}`}
                        className="capability-service-bottom"
                        aria-label={`Explore ${serviceTitle}`}
                      >
                        <span>Our Expertise</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    ) : (
                      <div
                        className="capability-service-bottom capability-service-disabled"
                        title="No matching service is available yet"
                      >
                        <span>Our Expertise</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="capability-empty-services">
              More details about our services will be available soon.
            </p>
          )}
        </div>
      </section>

      <section className="capability-cta-section">
        <div className="capability-cta">
          <div className="capability-cta-content">
            <span className="capability-label">LET'S WORK TOGETHER</span>
            <h2>Have a Project in Mind?</h2>
            <p>
              Let's discuss your requirements and find the right solution for
              your business.
            </p>
          </div>

          <Link to="/contact" className="capability-cta-btn">
            Contact Us
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CapabilityDetail;