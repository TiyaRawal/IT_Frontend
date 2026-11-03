import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Services.css";

// ==================== STATIC DATA ====================

const capabilities = [
  {
    _id: "6acc9dfaa6d948c7dca1280b",
    title: "Strategy & Planning",
    subtitle: "Build a Clear Path to Digital Success",
    description:
      "We help businesses define their technology direction, plan projects effectively, and make informed decisions that support long-term growth.",
    icon: "fa-solid fa-lightbulb",
  },
  {
    _id: "6acc9dfaa6d948c7dca1280c",
    title: "Custom Development",
    subtitle: "Digital Products Built Around Your Needs",
    description:
      "We develop customized digital solutions designed around your business requirements, user expectations, and long-term objectives.",
    icon: "fa-solid fa-code",
  },
  {
    _id: "6acc9dfaa6d948c7dca1280d",
    title: "Digital Transformation",
    subtitle: "Modernize the Way Your Business Works",
    description:
      "We help businesses improve existing systems, streamline operations, and adopt modern technologies to work more efficiently.",
    icon: "fa-solid fa-arrows-rotate",
  },
  {
    _id: "6acc9dfaa6d948c7dca1280e",
    title: "Support & Maintenance",
    subtitle: "Keep Your Digital Solutions Running Smoothly",
    description:
      "We help maintain the reliability, security, and performance of digital applications through ongoing technical support and improvements.",
    icon: "fa-solid fa-headset",
  },
];

const services = [
  {
    _id: "6accb99aa6d948c7dca12813",
    title: "Web Development",
    description:
      "We build responsive websites and web applications with reliable frontend, backend, API and database integration.",
    icon: "fa-solid fa-code",
  },
  {
    _id: "6accb99aa6d948c7dca12814",
    title: "Mobile App Development",
    description:
      "We develop user-friendly mobile applications that connect businesses with customers through convenient digital experiences.",
    icon: "fa-solid fa-mobile-screen-button",
  },
  {
    _id: "6accb99aa6d948c7dca12816",
    title: "UI/UX Design",
    description:
      "We design intuitive interfaces and user journeys that make websites and applications easier to understand and use.",
    icon: "fa-solid fa-pen-ruler",
  },
  {
    _id: "6accb99aa6d948c7dca12819",
    title: "Cloud Solutions & DevOps",
    description:
      "We help deploy applications, improve delivery workflows and plan flexible cloud infrastructure.",
    icon: "fa-solid fa-cloud",
  },
  {
    _id: "6accb99aa6d948c7dca1281a",
    title: "AI & Data Solutions",
    description:
      "We help businesses organize data, automate selected workflows and explore practical AI-powered solutions.",
    icon: "fa-solid fa-brain",
  },
  {
    _id: "6accb99aa6d948c7dca1281c",
    title: "Cybersecurity",
    description:
      "We help identify common application security risks and improve security practices across digital systems.",
    icon: "fa-solid fa-shield-halved",
  },
];

const technologies = [
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

const teamMembers = [
  {
    _id: "6ac87b9b31d455edffd21e7c",
    name: "Rahul Shah",
    position: "Full Stack Developer",
    image: "https://i.pravatar.cc/600?img=12",
  },
  {
    _id: "6ac87b9b31d455edffd21e7d",
    name: "Priya Mehta",
    position: "UI/UX Designer",
    image: "https://i.pravatar.cc/600?img=47",
  },
  {
    _id: "6ac87b9b31d455edffd21e7e",
    name: "Amit Patel",
    position: "Backend Developer",
    image: "https://i.pravatar.cc/600?img=11",
  },
  {
    _id: "6ac87b9b31d455edffd21e7f",
    name: "Neha Shah",
    position: "Project Manager",
    image: "https://i.pravatar.cc/600?img=32",
  },
  {
    _id: "6ac87b9b31d455edffd21e80",
    name: "Karan Patel",
    position: "Frontend Developer",
    image: "https://i.pravatar.cc/600?img=13",
  },
  {
    _id: "6ac87b9b31d455edffd21e81",
    name: "Anjali Shah",
    position: "QA Engineer",
    image: "https://i.pravatar.cc/600?img=44",
  },
  {
    _id: "6ac87cfd31d455edffd21e83",
    name: "Rohan Desai",
    position: "DevOps Engineer",
    image: "https://i.pravatar.cc/600?img=68",
  },
  {
    _id: "6ac87cfd31d455edffd21e84",
    name: "Simran Patel",
    position: "Data Analyst",
    image: "https://i.pravatar.cc/600?img=49",
  },
  {
    _id: "6ac87cfd31d455edffd21e85",
    name: "Dev Mehta",
    position: "Mobile App Developer",
    image: "https://i.pravatar.cc/600?img=60",
  },
  {
    _id: "6ac87cfd31d455edffd21e86",
    name: "Kavya Shah",
    position: "Digital Marketing Specialist",
    image: "https://i.pravatar.cc/600?img=45",
  },
];

const reviews = [
  {
    _id: "6ac8a91131d455edffd21e96",
    name: "Emily Wilson",
    position: "Marketing Manager",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "The team understood our requirements and delivered a professional digital experience with great attention to detail.",
    rating: 5,
  },
  {
    _id: "6ac8a91131d455edffd21e97",
    name: "David Miller",
    position: "Business Owner",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Communication was smooth throughout the project, and the solution was built around our business requirements.",
    rating: 5,
  },
  {
    _id: "6ac8a91131d455edffd21e98",
    name: "Sophia Brown",
    position: "Product Manager",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "The design was clean, the development was well organized, and the overall experience was straightforward.",
    rating: 4,
  },
];

// ==================== HOME ====================

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

// ==================== HOME BANNER ====================

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

// ==================== WHY CHOOSE US ====================

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

// ==================== CAPABILITIES ====================

const HomeCapabilities = () => {
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

// ==================== SERVICES ====================

const HomeServices = () => {
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
          {services.map((service) => (
            <div className="service-card" key={service._id}>
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
  );
};

// ==================== TECHNOLOGIES ====================

const HomeTechnologies = () => {
  const middleIndex = Math.ceil(technologies.length / 2);

  const firstRow = technologies.slice(0, middleIndex);
  const secondRow = technologies.slice(middleIndex);

  const renderTechnology = (tech, index, row) => (
    <div className="home-tech-card" key={`${row}-${tech.name}-${index}`}>
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

// ==================== TEAM ====================

const HomeTeam = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleMembers = Array.from(
    { length: Math.min(3, teamMembers.length) },
    (_, index) => teamMembers[(startIndex + index) % teamMembers.length],
  );

  const handlePrevious = () => {
    setStartIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length,
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % teamMembers.length);
  };

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
            A team of designers, developers and technology professionals working
            together to build meaningful digital solutions.
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
            {visibleMembers.map((member) => (
              <div className="home-team-card" key={member._id}>
                <div className="home-team-card-inner">
                  <div className="home-team-card-front">
                    <img src={member.image} alt={member.name} />

                    <div className="home-team-overlay">
                      <h3>{member.name}</h3>
                      <p>{member.position}</p>
                    </div>
                  </div>

                  <div className="home-team-card-back">
                    <div className="home-team-back-content">
                      <div className="home-team-icon">
                        <i className="fa-solid fa-user"></i>
                      </div>

                      <h3>{member.name}</h3>
                      <span>{member.position}</span>
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

// ==================== CLIENT REVIEWS ====================

const HomeReviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    if (reviews.length <= 1) return;

    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const review = reviews[activeReview];

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

        {review && (
          <div className="home-review-card" key={activeReview}>
            <div className="home-review-image">
              <img src={review.image} alt={review.name} />
            </div>

            <div className="home-review-quote">
              <i className="fa-solid fa-quote-left"></i>
            </div>

            <p className="home-review-text">"{review.review}"</p>

            <h3>{review.name}</h3>
            <span>{review.position}</span>

            <div className="home-review-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <i
                  className={`fa-solid fa-star ${
                    star > review.rating ? "review-star-empty" : ""
                  }`}
                  key={star}
                ></i>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;