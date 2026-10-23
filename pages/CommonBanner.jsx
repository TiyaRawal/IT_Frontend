import React from "react";
import "../styles/CommonBanner.css";
import { Link } from "react-router-dom";

const CommonBanner = ({ title }) => {
  return (
    <section className="common-banner">
      <div className="common-banner-overlay"></div>

      <div className="common-banner-content">
        <span className="common-banner-label">
          <i className="fa-solid fa-house"></i>
          <Link to="/">Home</Link>
          <i className="fa-solid fa-chevron-right"></i>
          {title}
        </span>
        <h1>{title}</h1>
        <div className="common-banner-line"></div>
      </div>
    </section>
  );
};

export default CommonBanner;