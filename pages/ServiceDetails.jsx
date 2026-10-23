import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../utils/api";
import "../styles/ServiceDetails.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getService = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await api.get(`/services/${id}`);
        if (response.data?.success && response.data?.service) {
          setService(response.data.service);
        } else {
          setError("Service details could not be found.");
        }
      } catch (err) {
        console.error("Error fetching service details:", err);
        setError("Unable to load this service. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    if (id) getService();
  }, [id]);

  if (loading) {
    return (
      <section className="service-details-page">
        <div
          className="service-details-container"
          style={{ padding: "100px 0", textAlign: "center" }}
        >
          <h2>Loading service details...</h2>
        </div>
      </section>
    );
  }

  if (error || !service) {
    return (
      <section className="service-details-page">
        <div
          className="service-details-container"
          style={{ padding: "100px 0", textAlign: "center" }}
        >
          <h2>{error || "Service not found"}</h2>
          <Link to="/services" className="service-primary-btn">
            Back to Services
          </Link>
        </div>
      </section>
    );
  }

  const expertise = service.expertise || [];
  const technologies = service.technologies || [];
  const process = service.process || [];
  const focusPoints = service.focusPoints || [];

  return (
    <section className="service-details-page">
      <section className="service-details-hero">
        <div className="service-details-container service-hero-container">
          <div className="service-hero-content">
            <span className="service-hero-label">
              {service.title || "OUR SERVICE"}
            </span>

            <h1>
              {service.subtitle || service.title}
              {service.subtitle ? null : " for Your Business"}
            </h1>
            <p>{service.description}</p>

            <div className="service-hero-buttons">
              <Link to="/contact" className="service-primary-btn">
                Start Your Project <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <a href="#service-overview" className="service-secondary-btn">
                Explore Service <i className="fa-solid fa-chevron-down"></i>
              </a>
            </div>
          </div>

          <div className="service-hero-visual">
            {service.image ? (
              <div className="service-browser-card service-dynamic-image-card">
                <img
                  src={service.image}
                  alt={service.title || "Service"}
                  className="service-detail-main-image"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <div className="service-image-caption">
                  <i className={service.icon || "fa-solid fa-code"}></i>
                  <span>{service.title}</span>
                </div>
              </div>
            ) : (
              <div className="service-browser-card">
                <div className="service-browser-header">
                  <div className="service-browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="service-browser-url">
                    <i className="fa-solid fa-lock"></i> yourbusiness.com
                  </div>
                </div>
                <div className="service-browser-content">
                  <div className="service-browser-main">
                    <div className="service-browser-text">
                      <small>BUILD • GROW • SCALE</small>
                      <h3>{service.title}</h3>
                      <p>{service.subtitle}</p>
                    </div>
                    <div className="service-browser-graphic">
                      <div className="service-graphic-circle">
                        <i className={service.icon || "fa-solid fa-code"}></i>
                      </div>
                      <div className="service-graphic-box box-one"></div>
                      <div className="service-graphic-box box-two"></div>
                      <div className="service-graphic-box box-three"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="service-floating-card floating-card-one">
              <i className="fa-solid fa-bolt"></i>
              <div>
                <strong>{focusPoints[0]?.title || "Reliable Solutions"}</strong>
                <span>
                  {focusPoints[0]?.description || "Built around your needs"}
                </span>
              </div>
            </div>
            <div className="service-floating-card floating-card-two">
              <i className="fa-solid fa-layer-group"></i>
              <div>
                <strong>{focusPoints[1]?.title || "Modern Technology"}</strong>
                <span>
                  {focusPoints[1]?.description || "Designed for your business"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-overview" id="service-overview">
        <div className="service-details-container service-overview-container">
          <div className="service-overview-image">
            {service.image ? (
              <img src={service.image} alt={service.title} />
            ) : (
              <div className="service-overview-image-placeholder">
                <i className={service.icon || "fa-solid fa-code"}></i>
              </div>
            )}
            <div className="service-overview-image-overlay">
              <div className="service-overview-image-icon">
                <i className={service.icon || "fa-solid fa-code"}></i>
              </div>
              <div>
                <strong>{service.title}</strong>
                <span>Built around your business</span>
              </div>
            </div>
            <div className="service-overview-image-tag">
              <i className="fa-solid fa-globe"></i>
              <span>{service.capabilityTitle || "Digital Solutions"}</span>
            </div>
          </div>

          <div className="service-overview-content">
            <span className="service-top-label">ABOUT THE SERVICE</span>
            <h2>
              {service.overviewTitle || service.subtitle || service.title}
            </h2>
            <p>{service.overviewDescription || service.description}</p>

            <div className="service-overview-features">
              {focusPoints.slice(0, 3).map((point, index) => (
                <div
                  className="overview-feature-card"
                  key={`${point.title}-${index}`}
                >
                  <div className="overview-feature-icon">
                    <i
                      className={
                        [
                          "fa-solid fa-bullseye",
                          "fa-solid fa-layer-group",
                          "fa-solid fa-chart-line",
                        ][index]
                      }
                    ></i>
                  </div>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {expertise.length > 0 && (
        <section className="service-expertise">
          <div className="service-details-container">
            <div className="service-centered-heading">
              <span>OUR EXPERTISE</span>
              <h2>
                What We <strong>Bring to Your Project.</strong>
              </h2>
              <p>
                Explore the key areas and capabilities included in this service.
              </p>
            </div>
            <div className="service-expertise-grid">
              {expertise.map((item, index) => (
                <div
                  className="service-expertise-card"
                  key={`${item.title}-${index}`}
                >
                  <div className="expertise-icon">
                    <i className={item.icon || "fa-solid fa-check"}></i>
                  </div>
                  <div className="expertise-title">
                    <h3>{item.title}</h3>
                    <div className="expertise-arrow">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </div>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {technologies.length > 0 && (
        <section className="service-technologies">
          <div className="service-details-container">
            <div className="service-centered-heading">
              <span>TECHNOLOGY</span>
              <h2>
                Built With The <strong>Right Tools.</strong>
              </h2>
              <p>
                Technologies are selected according to the requirements of each
                project.
              </p>
            </div>
            <div className="service-technology-grid">
              {technologies.map((technology, index) => (
                <div
                  className="technology-card"
                  key={`${technology.name}-${index}`}
                >
                  <i className={technology.icon || "fa-solid fa-code"}></i>
                  <span>{technology.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {process.length > 0 && (
        <section className="service-process">
          <div className="service-details-container">
            <div className="service-centered-heading">
              <span>OUR PROCESS</span>
              <h2>
                How We Turn Ideas <strong>Into Solutions.</strong>
              </h2>
              <p>
                A structured process keeps the work focused and aligned with
                your goals.
              </p>
            </div>
            <div className="service-process-grid">
              {process.map((step, index) => (
                <React.Fragment key={`${step.title}-${index}`}>
                  <div className="process-card">
                    <div>
                      <i
                        className={
                          [
                            "fa-solid fa-magnifying-glass",
                            "fa-solid fa-pen-ruler",
                            "fa-solid fa-code",
                            "fa-solid fa-rocket",
                          ][index % 4]
                        }
                      ></i>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="process-arrow">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      )}

      {focusPoints.length > 0 && (
        <section className="service-quality">
          <div className="service-details-container service-quality-container">
            <div className="service-quality-image">
              {service.image && (
                <img src={service.image} alt={`${service.title} solutions`} />
              )}
              <div className="quality-badge">
                <strong>{focusPoints.length}+</strong>
                <span>Key Focus Areas</span>
              </div>
            </div>
            <div className="service-quality-content">
              <span>WHAT WE FOCUS ON</span>
              <h2>
                Built for Your Goals. <strong>Ready for What's Next.</strong>
              </h2>
              <p>{service.description}</p>
              <div className="quality-points">
                {focusPoints.map((point, index) => (
                  <div key={`${point.title}-${index}`}>
                    <i
                      className={
                        [
                          "fa-solid fa-gauge-high",
                          "fa-solid fa-mobile-screen-button",
                          "fa-solid fa-shield-halved",
                          "fa-solid fa-expand",
                        ][index % 4]
                      }
                    ></i>
                    <span>
                      <strong>{point.title}</strong>
                      {point.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="service-final-cta">
        <div className="service-final-content">
          <span>HAVE A PROJECT IN MIND?</span>
          <h2>
            {service.ctaHeading ||
              `Let's Discuss Your ${service.title} Project.`}
          </h2>
          <p>{service.ctaDescription || service.description}</p>
          <Link to="/contact">
            Start A Conversation <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default ServiceDetails;