import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Services.css";
import api from "../utils/api";

const Home = () => {
  return (
    <div className="home">
      <main className="home-main">
        <HomeBanner />
        <HomeWhyChooseUs />
        <HomeCapabilities />
        <HomeServices />
        <HomeTechnologies />
        <HomeTeam />
        <HomeReviews />
      </main>
    </div>
  );
};

const HomeBanner = () => {
  const banners = [
    {
      image:
        "https://res.cloudinary.com/yetzgheo/image/upload/v1792144251/HomeBanner1_jd4onm.avif",
      tag: "INNOVATE • BUILD • GROW",
      title: "Transform Your Ideas",
      highlight: "Into Digital Solutions",
      description:
        "We build modern, scalable and reliable digital solutions that help businesses grow, connect with their customers and achieve their goals.",
    },
    {
      image:
        "https://res.cloudinary.com/yetzgheo/image/upload/v1792144253/HomeBanner2_lqnf3i.avif",
      tag: "DESIGN • DEVELOP • DELIVER",
      title: "Build Better",
      highlight: "Digital Experiences",
      description:
        "From web development to cloud and digital transformation, we create technology solutions designed around real business needs.",
    },
    {
      image:
        "https://res.cloudinary.com/yetzgheo/image/upload/v1792144252/HomeBanner3_egkxau.avif",
      tag: "SMART • DIGITAL • FUTURE",
      title: "Technology That",
      highlight: "Moves Business Forward",
      description:
        "We combine technology, creativity and business understanding to build secure, scalable and meaningful digital experiences.",
    },
  ];

  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const banner = banners[activeBanner];

  return (
    <section
      className="home-banner"
      style={{
        backgroundImage: `url("${banner.image}")`,
      }}
    >
      <div className="home-banner-overlay"></div>

      <div className="home-banner-container">
        <div className="home-banner-content" key={activeBanner}>
          <span className="home-banner-tag">{banner.tag}</span>

          <h1>
            {banner.title}
            <span>{banner.highlight}</span>
          </h1>
          <p>{banner.description}</p>

          <div className="home-banner-buttons">
            <Link to="/services" className="home-banner-primary-button">
              Explore Services
              <i className="fa-solid fa-arrow-right"></i>
            </Link>

            <Link to="/contact" className="home-banner-secondary-button">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeWhyChooseUs = () => {
  const stats = [
    {
      icon: "fa-solid fa-diagram-project",
      value: 50,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      icon: "fa-solid fa-users",
      value: 30,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      icon: "fa-solid fa-chart-line",
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
    },
    {
      icon: "fa-solid fa-lightbulb",
      value: 10,
      suffix: "+",
      label: "Industry Expertise",
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1800;
    const startTime = performance.now();
    let animationFrame;

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCounts(stats.map((stat) => Math.floor(stat.value * easeOut)));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="home-why-section">
      <div className="home-why-container">
        <div className="home-why-content">
          <span className="home-section-label">WHY CHOOSE US</span>
          <h2>
            Technology That Creates
            <span>Real Business Impact</span>
          </h2>
          <p>
            We combine technology, creativity and business understanding to
            build reliable digital solutions designed around your goals.
          </p>
          <Link to="/about" className="home-outline-button">
            Learn More
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        <div className="home-stat-grid">
          {stats.map((stat, index) => (
            <div className="home-stat-card" key={stat.label}>
              <div className="home-stat-icon">
                <i className={stat.icon}></i>
              </div>

              <div className="home-stat-info">
                <h3>
                  {counts[index]}
                  {stat.suffix}
                </h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeCapabilities = () => {
  const [capabilities, setCapabilities] = useState([]);

  useEffect(() => {
    const getCapabilities = async () => {
      try {
        const response = await api.get("/capabilities");
        if (
          response.data.success &&
          Array.isArray(response.data.capabilities)
        ) {
          setCapabilities(response.data.capabilities);
        }
      } catch (error) {
        console.error("Error fetching capabilities:", error);
      }
    };
    getCapabilities();
  }, []);

  return (
    <section className="home-capabilities-section">
      <div className="home-capabilities-container">
        <div className="home-capabilities-header">
          <span className="home-section-label">OUR CAPABILITIES</span>

          <h2>
            Built To Deliver
            <span>Better Digital Solutions</span>
          </h2>
          <p>
            From planning and development to support, we provide the expertise
            needed to build technology that works.
          </p>
        </div>

        <div className="home-capabilities-grid">
          {capabilities.map((item, index) => (
            <div
              className={`home-capability-card ${
                index === 2 ? "home-capability-active" : ""
              }`}
              key={item._id}
            >
              <div className="home-capability-top">
                <span className="home-capability-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="home-capability-icon">
                  <i className={item.icon || "fa-solid fa-code"}></i>
                </div>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <Link
                to={`/capabilities/${item._id}`}
                className="capability-arrow"
                aria-label={`View ${item.title} details`}
              >
                <span className="home-capability-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await api.get("/services");
        if (response.data.success && Array.isArray(response.data.services)) {
          setServices(response.data.services.slice(0, 6));
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    getServices();
  }, []);

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Services We Provide</h2>
          <p>
            We provide professional IT and digital solutions to help individuals
            and businesses grow with reliable technology services.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={service._id || service.title || index}
            >
              <span className="service-card-line"></span>

              <div className="service-icon">
                <i className={service.icon}></i>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <Link to="/servicedetails" className="service-button">
                Read More
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeTechnologies = () => {
  const defaultTechnologies = [
    { name: "React", icon: "fa-brands fa-react" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "Node.js", icon: "fa-brands fa-node-js" },
    { name: "Express.js", icon: "fa-solid fa-server" },
    { name: "MongoDB", icon: "fa-solid fa-database" },
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "Java", icon: "fa-brands fa-java" },
    { name: "MySQL", icon: "fa-solid fa-database" },
    { name: "AWS", icon: "fa-brands fa-aws" },
    { name: "Docker", icon: "fa-brands fa-docker" },
    { name: "Git", icon: "fa-brands fa-git-alt" },
    { name: "Firebase", icon: "fa-solid fa-fire" },
  ];

  const [technologies, setTechnologies] = useState(defaultTechnologies);

  useEffect(() => {
    const getTechnologies = async () => {
      try {
        const response = await api.get("/technologies");
        if (
          response.data.success &&
          Array.isArray(response.data.technologies) &&
          response.data.technologies.length > 0
        ) {
          setTechnologies(response.data.technologies);
        }
      } catch (error) {
        console.error("Error fetching technologies:", error);
      }
    };
    getTechnologies();
  }, []);

  const middleIndex = Math.ceil(technologies.length / 2);
  const firstRow = technologies.slice(0, middleIndex);
  const secondRow = technologies.slice(middleIndex);

  const renderTechnology = (tech, index, row) => (
    <div
      className="home-tech-card"
      key={`${row}-${tech._id || tech.name}-${index}`}
    >
      <div className="home-tech-icon">
        <i className={tech.icon || "fa-solid fa-code"}></i>
      </div>
      <span>{tech.name}</span>
    </div>
  );

  return (
    <section className="home-tech-section">
      <div className="home-tech-container">
        <div className="home-tech-header">
          <span className="home-section-label">TECH & PLATFORMS</span>

          <h2>
            Technologies We
            <span>Work With</span>
          </h2>
          <p>
            Modern technologies and platforms that help us build scalable,
            secure and high-performing solutions.
          </p>
        </div>

        <div className="home-tech-marquee">
          <div className="home-tech-track home-tech-track-right">
            {[...firstRow, ...firstRow, ...firstRow, ...firstRow].map(
              (tech, index) => renderTechnology(tech, index, "first"),
            )}
          </div>

          {secondRow.length > 0 && (
            <div className="home-tech-track home-tech-track-left">
              {[...secondRow, ...secondRow, ...secondRow, ...secondRow].map(
                (tech, index) => renderTechnology(tech, index, "second"),
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const HomeTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const getTeam = async () => {
      try {
        const response = await api.get("/team");
        if (
          response.data.success &&
          Array.isArray(response.data.team)
        ) {
          setTeamMembers(response.data.team);
          setStartIndex(0);
        }
      } catch (error) {
        console.error("Error fetching team:", error);
      }
    };

    getTeam();
  }, []);

  const visibleMembers = Array.from(
    { length: Math.min(3, teamMembers.length) },
    (_, index) =>
      teamMembers[(startIndex + index) % teamMembers.length]
  );

  const handlePrevious = () => {
    setStartIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % teamMembers.length);
  };

  if (teamMembers.length === 0) {
    return null;
  }

  return (
    <section className="home-team-section">
      <div className="home-team-container">
        <div className="home-team-header">
          <span className="home-section-label">OUR TEAM</span>
          <h2>
            Meet The People
            <span>Behind Our Work</span>
          </h2>
          <p>
            A team of designers, developers and technology professionals
            working together to build meaningful digital solutions.
          </p>
        </div>

        <div className="home-team-slider">
          {teamMembers.length > 1 && (
            <button
              className="home-team-arrow home-team-prev"
              onClick={handlePrevious}
              aria-label="Previous team members"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          )}

          <div className="home-team-grid">
            {visibleMembers.map((member, index) => (
              <div
                className="home-team-card"
                key={member._id || `${member.name}-${index}`}
              >
                <div className="home-team-card-inner">
                  <div className="home-team-card-front">
                    <img
                      src={member.image || member.photo}
                      alt={member.name}
                    />

                    <div className="home-team-overlay">
                      <h3>{member.name}</h3>
                      <p>{member.position || member.role}</p>
                    </div>
                  </div>

                  <div className="home-team-card-back">
                    <div className="home-team-back-content">
                      <div className="home-team-icon">
                        <i className="fa-solid fa-user"></i>
                      </div>

                      <h3>{member.name}</h3>
                      <span>{member.position || member.role}</span>
                      <p>{member.description}</p>

                      {member.skills &&
                        (Array.isArray(member.skills)
                          ? member.skills.length > 0
                          : member.skills.trim() !== "") && (
                          <div className="home-team-skills">
                            <i className="fa-solid fa-code"></i>
                            <span>
                              {Array.isArray(member.skills)
                                ? member.skills.join(", ")
                                : member.skills}
                            </span>
                          </div>
                        )}

                      <div className="home-team-socials">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                          >
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                        )}

                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                          >
                            <i className="fa-brands fa-github"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {teamMembers.length > 1 && (
            <button
              className="home-team-arrow home-team-next"
              onClick={handleNext}
              aria-label="Next team members"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          )}
        </div>

        <Link to="/team" className="home-team-link">
          Meet Our Team
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
};

const HomeReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await api.get("/reviews");
        if (response.data.success && Array.isArray(response.data.reviews)) {
          setReviews(response.data.reviews);
          setActiveReview(0);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    getReviews();
  }, []);

  useEffect(() => {
    if (reviews.length <= 1) return;
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const review = reviews[activeReview % (reviews.length || 1)];

  return (
    <section className="home-reviews-section">
      <div className="home-reviews-container">
        <div className="home-reviews-header">
          <span className="home-section-label">CLIENT REVIEWS</span>
          <h2>What Our Clients Say</h2>
          <p>
            Real feedback from clients who trusted us to turn their ideas into
            digital solutions.
          </p>
        </div>

        {review ? (
          <div className="home-review-card" key={activeReview}>
            <div className="home-review-image">
              <img src={review.image || review.photo} alt={review.name} />
            </div>

            <div className="home-review-quote">
              <i className="fa-solid fa-quote-left"></i>
            </div>

            <p className="home-review-text">"{review.review}"</p>
            <h3>{review.name}</h3>
            <span>{review.position || review.role}</span>

            <div className="home-review-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <i className="fa-solid fa-star" key={star}></i>
              ))}
            </div>
          </div>
        ) : (
          <div className="home-review-card">
            <div className="home-review-quote">
              <i className="fa-solid fa-quote-left"></i>
            </div>

            <h3>Client Reviews Coming Soon</h3>
            <p className="home-review-text">
              Client feedback will appear here once it is available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;