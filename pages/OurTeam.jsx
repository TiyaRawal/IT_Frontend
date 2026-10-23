import React, { useEffect, useState } from "react";
import "../styles/OurTeam.css";
import CommonBanner from "./CommonBanner";
import api from "../utils/api";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const getTeam = async () => {
    try {
      const response = await api.get("/team");
      if (response.data.success) {
        setTeamMembers(response.data.team);
      }
    } catch (e) {
      console.log("Error fetching team members:", e);
    }
  };

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <>
      <CommonBanner title="Our Team" />

      <section className="team-section">
        <div className="team-container">
          <div className="team-header">
            <span className="team-section-label">OUR PEOPLE</span>
            <h2>
              Meet the People Behind
              <span> Our Solutions</span>
            </h2>
            <p>
              Our team combines technical expertise, creativity and
              collaboration to build reliable digital solutions that help
              businesses move forward.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={member._id || index}>
                <div className="team-card-inner">
                  <div className="team-card-front">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-card-image"
                    />

                    <div className="team-card-overlay">
                      <h3>{member.name}</h3>
                      <p>{member.position}</p>
                    </div>
                  </div>

                  <div className="team-card-back">
                    <div className="team-card-back-content">
                      <div className="team-back-icon">
                        <i className="fa-solid fa-user"></i>
                      </div>

                      <h3>{member.name}</h3>
                      <span>{member.position}</span>
                      <p>{member.description}</p>

                      <div className="team-skills">
                        <i className="fa-solid fa-code"></i>
                        <span>{member.skills}</span>
                      </div>

                      <div className="team-socials">
                        <a href="https://www.linkedin.com/" aria-label="LinkedIn">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>

                        <a href="https://github.com/" aria-label="GitHub">
                          <i className="fa-brands fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {teamMembers.length === 0 && (
              <p className="team-empty-message">
                No team members available right now.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;