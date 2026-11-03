import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/CapabilityDetail.css";

// ==================== CAPABILITIES DATA ====================

const capabilities = [
  {
    _id: "6acc9dfaa6d948c7dca1280b",
    title: "Strategy & Planning",
    subtitle: "Build a Clear Path to Digital Success",
    description:
      "We help businesses define their technology direction, plan projects effectively, and make informed decisions that support long-term growth.",
    icon: "fa-solid fa-lightbulb",
    services: [
      {
        title: "Business & Requirement Analysis",
        description:
          "Understand business goals, identify challenges, and define clear project requirements.",
        icon: "fa-solid fa-bullseye",
      },
      {
        title: "Technology Consulting",
        description:
          "Choose suitable technologies and practical solutions for your business needs.",
        icon: "fa-solid fa-compass",
      },
      {
        title: "Project Planning",
        description:
          "Create structured roadmaps, define milestones, and plan project execution.",
        icon: "fa-solid fa-list-check",
      },
      {
        title: "Solution Architecture",
        description:
          "Plan scalable and maintainable systems that support future business growth.",
        icon: "fa-solid fa-sitemap",
      },
    ],
  },
  {
    _id: "6acc9dfaa6d948c7dca1280c",
    title: "Custom Development",
    subtitle: "Digital Products Built Around Your Needs",
    description:
      "We develop customized digital solutions designed around your business requirements, user expectations, and long-term objectives.",
    icon: "fa-solid fa-code",
    services: [
      {
        title: "Web Application Development",
        description:
          "Build responsive and user-friendly web applications for different business needs.",
        icon: "fa-solid fa-laptop-code",
      },
      {
        title: "Custom Software Solutions",
        description:
          "Develop software tailored to your specific workflows and business processes.",
        icon: "fa-solid fa-gears",
      },
      {
        title: "API Development & Integration",
        description:
          "Connect applications and services through reliable API integrations.",
        icon: "fa-solid fa-plug",
      },
      {
        title: "Database Solutions",
        description:
          "Organize and manage application data with suitable database solutions.",
        icon: "fa-solid fa-database",
      },
    ],
  },
  {
    _id: "6acc9dfaa6d948c7dca1280d",
    title: "Digital Transformation",
    subtitle: "Modernize the Way Your Business Works",
    description:
      "We help businesses improve existing systems, streamline operations, and adopt modern technologies to work more efficiently.",
    icon: "fa-solid fa-arrows-rotate",
    services: [
      {
        title: "Process Automation",
        description:
          "Reduce repetitive manual work and improve operational efficiency.",
        icon: "fa-solid fa-robot",
      },
      {
        title: "System Modernization",
        description:
          "Improve existing applications and workflows to meet changing requirements.",
        icon: "fa-solid fa-display",
      },
      {
        title: "Cloud Solutions",
        description:
          "Explore cloud-based approaches for flexible and scalable operations.",
        icon: "fa-solid fa-cloud",
      },
      {
        title: "Digital Optimization",
        description:
          "Identify opportunities to improve performance, usability, and workflows.",
        icon: "fa-solid fa-chart-line",
      },
    ],
  },
  {
    _id: "6acc9dfaa6d948c7dca1280e",
    title: "Support & Maintenance",
    subtitle: "Keep Your Digital Solutions Running Smoothly",
    description:
      "We help maintain the reliability, security, and performance of digital applications through ongoing technical support and improvements.",
    icon: "fa-solid fa-headset",
    services: [
      {
        title: "Technical Support",
        description:
          "Assist with technical issues and help keep applications functioning properly.",
        icon: "fa-solid fa-headset",
      },
      {
        title: "Bug Fixes & Improvements",
        description:
          "Identify application issues and implement necessary fixes and enhancements.",
        icon: "fa-solid fa-bug",
      },
      {
        title: "Security Updates",
        description:
          "Help keep software updated and address identified security concerns.",
        icon: "fa-solid fa-shield-halved",
      },
      {
        title: "Performance Monitoring",
        description:
          "Review application performance and identify areas for improvement.",
        icon: "fa-solid fa-gauge-high",
      },
    ],
  },
];

// ==================== SERVICES DATA ====================

const servicesList = [
  {
    _id: "6accb99aa6d948c7dca12813",
    title: "Web Development",
  },
  {
    _id: "6accb99aa6d948c7dca12814",
    title: "Mobile App Development",
  },
  {
    _id: "6accb99aa6d948c7dca12815",
    title: "Custom Software Development",
  },
  {
    _id: "6accb99aa6d948c7dca12816",
    title: "UI/UX Design",
  },
  {
    _id: "6accb99aa6d948c7dca12817",
    title: "E-Commerce Development",
  },
  {
    _id: "6accb99aa6d948c7dca12818",
    title: "Technology Consulting",
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
    _id: "6accb99aa6d948c7dca1281b",
    title: "Software Testing & QA",
  },
  {
    _id: "6accb99aa6d948c7dca1281c",
    title: "Cybersecurity",
  },
  {
    _id: "6accb99aa6d948c7dca1281d",
    title: "Website Maintenance & Support",
  },
];

// ==================== COMPONENT ====================

const CapabilityDetail = () => {
  const { id } = useParams();

  const capability = capabilities.find((item) => item._id === id);

  if (!capability) {
    return (
      <div className="capability-status">
        <h2>Capability Not Found</h2>
        <p>No capability details are available.</p>

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

  // Match capability expertise with service details

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

  const getMatchingService = (expertiseTitle) => {
    const mappedTitle = titleToService[expertiseTitle];

    if (!mappedTitle) return null;

    return servicesList.find(
      (service) => service.title?.toLowerCase() === mappedTitle.toLowerCase(),
    );
  };

  return (
    <main className="capability-detail-page">
      {/* HERO SECTION */}

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

      {/* CAPABILITY SERVICES */}

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

      {/* CTA SECTION */}

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