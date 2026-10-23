import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <span className="not-found-code">404</span>
        <h1>Oops! Page Not Found</h1>
        <p>
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        <Link to="/" className="not-found-btn">
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back to Home</span>
        </Link>

        <div className="not-found-decoration">
          <i className="fa-solid fa-compass"></i>
        </div>
      </div>
    </div>
  );
};

export default NotFound;