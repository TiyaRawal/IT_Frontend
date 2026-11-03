import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import CommonBanner from "./CommonBanner";

const projects = [
  {
    _id: "6ac87ee731d455edffd21e89",
    title: "Equipment Rental & Booking",
    category: "Web Development",
    type: "Featured Project",
    description:
      "A complete equipment rental and booking platform that allows users to browse equipment, manage bookings, checkout and interact with rental services.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=85",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://equipment-user.onrender.com/",
    icon: "fa-solid fa-screwdriver-wrench",
  },
  {
    _id: "6ac87ee731d455edffd21e8a",
    title: "Amella Beauty Salon",
    category: "Web Development",
    type: "Web Application",
    description:
      "A modern salon booking platform designed to help customers explore services and manage their salon appointments with ease.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://salon-user-etjp.onrender.com/",
    icon: "fa-solid fa-scissors",
  },
  {
    _id: "6ac87ee731d455edffd21e8b",
    title: "Recipe Explorer",
    category: "API Integration",
    type: "API Project",
    description:
      "A recipe discovery interface integrated with a recipe API to display recipes, categories and useful cooking information.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1000&q=85",
    technologies: ["React", "Axios", "REST API"],
    link: "#",
    icon: "fa-solid fa-utensils",
  },
  {
    _id: "6ac87ee731d455edffd21e8c",
    title: "Spotify Frontend",
    category: "Frontend",
    type: "Frontend Project",
    description:
      "A responsive music streaming interface inspired by modern music platforms, featuring navigation, sidebar, playlists and browsing sections.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=85",
    technologies: ["React", "Vite", "CSS"],
    link: "https://spotify-frontend-o19e.onrender.com/",
    icon: "fa-solid fa-music",
  },
  {
    _id: "6ac87ee731d455edffd21e8d",
    title: "BloodLink",
    category: "Web Development",
    type: "Web Application",
    description:
      "A blood donation platform interface focused on connecting donors with people in need through a clean and accessible experience.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    technologies: ["React", "Bootstrap", "CSS"],
    link: "#",
    icon: "fa-solid fa-droplet",
  },
  {
    _id: "6ac87ee731d455edffd21e8e",
    title: "Business Website",
    category: "Frontend",
    type: "Web Design",
    description:
      "A professional IT company website designed with reusable components, responsive layouts and a modern business-focused interface.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    technologies: ["React", "CSS", "JavaScript"],
    link: "#",
    icon: "fa-solid fa-building",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeFeatured, setActiveFeatured] = useState(0);

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
  }, []);

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
                  key={featuredProject._id}
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

                <h2 key={featuredProject._id}>{featuredProject.title}</h2>

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
              <article className="project-card" key={project._id}>
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