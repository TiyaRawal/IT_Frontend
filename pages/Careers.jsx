import React, { useEffect, useState } from "react";
import "../styles/Careers.css";
import CommonBanner from "./CommonBanner";
import api from "../utils/api";

const Careers = () => {
  const [openJob, setOpenJob] = useState(null);
  const [jobs, setJobs] = useState([]);

  const getCareers = async () => {
    try {
      const response = await api.get("/careers");
      if (response.data.success) {
        setJobs(response.data.careers);
      }
    } catch (e) {
      console.log("Error fetching careers:", e);
    }
  };

  useEffect(() => {
    getCareers();
  }, []);

  const toggleJob = (index) => {
    setOpenJob(openJob === index ? null : index);
  };

  const getApplyUrl = (jobTitle) => {
    return `/applynow?position=${encodeURIComponent(jobTitle)}`;
  };

  return (
    <div className="career-page">
      <CommonBanner title="Careers" />

      <section className="career-hero">
        <div className="career-container career-hero-container">
          <div className="career-hero-content">
            <h1>
              Build Your Career <span>With Us</span>
            </h1>
            <p>
              Join a team where ideas are valued, skills are developed and
              technology is used to create meaningful solutions. Start your
              journey with us and grow alongside a passionate team.
            </p>
            <a href="#open-positions" className="career-hero-button">
              Explore Opportunities
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="career-hero-image">
            <img
              src="https://res.cloudinary.com/yetzgheo/image/upload/v1792142034/CareerTeam_qxk8fr.avif"
              alt="Team working together"
            />
          </div>
        </div>
      </section>

      <section className="career-why">
        <div className="career-container">
          <div className="career-section-header">
            <h2>Why Join Us?</h2>
            <span></span>
            <p>
              We believe great work happens when people have the right
              environment to learn, contribute and grow.
            </p>
          </div>

          <div className="career-benefits">
            <div className="career-benefit-card">
              <div className="career-benefit-icon">
                <i className="fa-solid fa-chart-line"></i>
              </div>

              <h3>Growth & Learning</h3>
              <p>
                Learn new technologies, improve your skills and grow through
                real-world projects and practical experience.
              </p>
            </div>

            <div className="career-benefit-card">
              <div className="career-benefit-icon">
                <i className="fa-solid fa-users"></i>
              </div>

              <h3>Collaborative Team</h3>
              <p>
                Work with a supportive team where ideas are shared, knowledge is
                exchanged and everyone contributes.
              </p>
            </div>

            <div className="career-benefit-card">
              <div className="career-benefit-icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>

              <h3>Real Opportunities</h3>
              <p>
                Get the opportunity to work on practical projects and solve real
                business and technology challenges.
              </p>
            </div>

            <div className="career-benefit-card">
              <div className="career-benefit-icon">
                <i className="fa-solid fa-handshake"></i>
              </div>

              <h3>Supportive Environment</h3>
              <p>
                Build your confidence while working in an environment that
                encourages collaboration, creativity and new ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="career-positions" id="open-positions">
        <div className="career-container">
          <div className="career-section-header">
            <h2>Open Positions</h2>
            <span></span>
            <p>
              Explore our current opportunities and find a role that matches
              your skills and interests.
            </p>
          </div>

          <div className="career-jobs">
            {jobs.map((job, index) => (
              <div
                className={`career-job ${
                  openJob === index ? "career-job-open" : ""
                }`}
                key={job._id || index}
              >
                <div className="career-job-main">
                  <div className="career-job-icon">
                    <i className={job.icon}></i>
                  </div>

                  <div className="career-job-info">
                    <h3>{job.title}</h3>

                    <div className="career-job-meta">
                      <span>
                        <i className="fa-solid fa-briefcase"></i>
                        {job.experience}
                      </span>

                      <span>
                        <i className="fa-solid fa-location-dot"></i>
                        {job.location}
                      </span>

                      <span>
                        <i className="fa-solid fa-clock"></i>
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="career-job-actions">
                    <button
                      type="button"
                      className="career-details-button"
                      onClick={() => toggleJob(index)}
                      aria-label={
                        openJob === index
                          ? "Close job details"
                          : "Open job details"
                      }
                      aria-expanded={openJob === index}
                    >
                      View Details
                      <i
                        className={`fa-solid ${
                          openJob === index
                            ? "fa-chevron-up"
                            : "fa-chevron-down"
                        }`}
                      ></i>
                    </button>

                    {openJob !== index && (
                      <a
                        href={getApplyUrl(job.title)}
                        className="career-apply-button"
                      >
                        Apply Now
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    )}
                  </div>
                </div>

                <div
                  className={`career-job-details ${
                    openJob === index ? "career-job-details-open" : ""
                  }`}
                >
                  <div className="career-job-details-content">
                    <div>
                      <h4>Job Description</h4>
                      <p>{job.description}</p>
                    </div>

                    <div>
                      <h4>Responsibilities</h4>
                      <ul>
                        {job.responsibilities?.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <i className="fa-solid fa-check"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="career-job-details-action">
                    <a
                      href={getApplyUrl(job.title)}
                      className="career-apply-button"
                    >
                      Apply Now
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {jobs.length === 0 && (
              <p className="career-empty-message">
                No open positions available right now.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;