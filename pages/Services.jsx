import React, { useEffect, useState } from "react";
import "../styles/Services.css";
import api from "../utils/api";
import { Link } from "react-router-dom";
import CommonBanner from "./CommonBanner";

const Services = () => {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    try {
      let response = await api.get("/services");
      if (response.data.success) {
        setServices(response.data.services);
      }
    } catch (e) {
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <CommonBanner title="Services" />

      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <span className="services-section-label">WHAT WE DO</span>
            <h2>
              Services We
              <span> Provide</span>
            </h2>
            <p>
              We provide professional IT and digital solutions that help
              businesses grow, improve efficiency and build reliable digital
              experiences.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={service._id || index}>
                <span className="service-card-line"></span>

                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link
                  to={`/servicedetails/${service._id}`}
                  className="service-button"
                >
                  Read More
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;