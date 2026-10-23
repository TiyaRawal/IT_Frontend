import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import CommonBanner from "./CommonBanner";
import api from "../utils/api";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeFeatured, setActiveFeatured] = useState(0);
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await api.get("/projects");
      if (response.data.success) {
        setProjects(response.data.projects || []);
        setActiveFeatured(0);
      }
    } catch (error) {
      console.log("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const filters = ["All", "Web Development", "Frontend", "API Integration"];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const nextFeatured = () => {
    setActiveFeatured((prev) => (prev >= projects.length - 1 ? 0 : prev + 1));
  };
  const previousFeatured = () => {
    setActiveFeatured((prev) => (prev <= 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (projects.length <= 1) return;
    const interval = setInterval(() => {
      setActiveFeatured((prev) => (prev >= projects.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const featuredProject = projects[activeFeatured];

  return (
    <section className="projects-page">
      <CommonBanner title="Projects" />

      <section className="projects-intro">
        <div className="projects-container">
          <div className="projects-intro-content">
            <span className="projects-label">OUR WORK</span>
            <h1>
              Projects That
              <strong>Make An Impact.</strong>
            </h1>
            <p>
              Explore some of the digital products, websites and applications we
              have built using modern technologies and thoughtful design.
            </p>
          </div>

          <div className="projects-intro-side">
            <div className="projects-intro-line"></div>
            <span>
              Design
              <br />
              Develop
              <br />
              Deliver
            </span>
          </div>
        </div>
      </section>

      <section className="featured-project-section">
        <div className="projects-container featured-project-wrapper">
          {projects.length > 1 && (
            <button
              className="featured-arrow featured-arrow-left"
              onClick={previousFeatured}
              aria-label="Previous project"
            >
              <i></i>
            </button>
          )}

          {featuredProject && (
            <div className="featured-project">
              <div className="featured-project-image">
                <img
                  key={featuredProject._id || featuredProject.title}
                  src={featuredProject.image}
                  alt={featuredProject.title}
                />

                <div className="featured-image-overlay"></div>
                <div className="featured-project-badge">
                  <i className={featuredProject.icon}></i>
                  {featuredProject.type}
                </div>
              </div>

              <div className="featured-project-content">
                <span className="featured-category">
                  {featuredProject.category}
                </span>

                <h2 key={featuredProject._id || featuredProject.title}>
                  {featuredProject.title}
                </h2>
                <p>{featuredProject.description}</p>

                <div className="project-tech-list">
                  {(featuredProject.technologies || []).map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                <div className="featured-project-actions">
                  {featuredProject.link && featuredProject.link !== "#" && (
                    <a
                      href={featuredProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-primary-button"
                    >
                      View Live Project
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  )}

                  <a href="/contact" className="project-secondary-button">
                    Start A Project
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          )}

          {projects.length > 1 && (
            <button
              className="featured-arrow featured-arrow-right"
              onClick={nextFeatured}
              aria-label="Next project"
            >
              <i></i>
            </button>
          )}
        </div>
      </section>

      <section className="all-projects-section">
        <div className="projects-container">
          <div className="projects-section-heading">
            <div>
              <span>SELECTED PROJECTS</span>
              <h2>
                Explore Our
                <strong>Recent Work.</strong>
              </h2>
            </div>
            <p>
              A collection of projects across web development, frontend
              experiences and API-driven applications.
            </p>
          </div>

          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={
                  activeFilter === filter
                    ? "project-filter active"
                    : "project-filter"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <article
                className="project-card"
                key={project._id || `${project.title}-${index}`}
              >
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} />

                  <div className="project-card-overlay">
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-view-button"
                        aria-label={`View ${project.title}`}
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    )}
                  </div>

                  <span className="project-type">{project.type}</span>
                </div>

                <div className="project-card-content">
                  <div className="project-card-top">
                    <span>{project.category}</span>
                    <i className={project.icon}></i>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-card-bottom">
                    <div className="project-small-tech">
                      {(project.technologies || [])
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span key={techIndex}>{tech}</span>
                        ))}
                    </div>

                    {project.link && project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        View
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="projects-empty">
              <i className="fa-solid fa-folder-open"></i>
              <h3>No Projects Found</h3>
              <p>There are no projects available in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <section className="projects-cta">
        <div className="projects-cta-content">
          <span>HAVE AN IDEA?</span>
          <h2>
            Let's Build Something
            <strong>Worth Showing.</strong>
          </h2>
          <p>
            Have a project in mind? Let's discuss your idea and turn it into a
            digital experience.
          </p>
          <a href="/contact">
            Start A Conversation
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </section>
    </section>
  );
};

export default Projects;