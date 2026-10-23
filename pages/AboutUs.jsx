import React from "react";
import "../styles/AboutUs.css";
import CommonBanner from "./CommonBanner";

const AboutUs = () => {
  const whyChooseUs = [
    {
      number: "01",
      icon: "fa-solid fa-bullseye",
      title: "Business-Driven Solutions",
      text: "We focus on solving real business problems instead of building technology just for the sake of technology. Every solution is planned around your goals, users and long-term requirements.",
    },
    {
      number: "02",
      icon: "fa-solid fa-code",
      title: "Modern Technology",
      text: "We use modern development practices and technologies to create reliable, scalable and maintainable digital products that are ready to grow with your business.",
    },
    {
      number: "03",
      icon: "fa-solid fa-comments",
      title: "Clear Collaboration",
      text: "We keep communication simple and transparent throughout the project so requirements, progress and priorities stay aligned from beginning to delivery.",
    },
    {
      number: "04",
      icon: "fa-solid fa-headset",
      title: "Long-Term Support",
      text: "Our work does not stop at deployment. We remain focused on improvements, maintenance and support so your digital product continues to perform effectively.",
    },
  ];

  const approach = [
    {
      number: "01",
      title: "Discover",
      text: "We understand your business, users, goals and technical requirements before starting development.",
    },
    {
      number: "02",
      title: "Plan",
      text: "We define the project structure, technology stack, features and development roadmap to create a clear direction.",
    },
    {
      number: "03",
      title: "Design",
      text: "We create intuitive user experiences and practical interfaces that keep usability, performance and business objectives in focus.",
    },
    {
      number: "04",
      title: "Develop",
      text: "Our development process turns approved ideas into responsive, secure and scalable digital solutions.",
    },
    {
      number: "05",
      title: "Test",
      text: "We test functionality, responsiveness, performance and user experience to identify and resolve issues before launch.",
    },
    {
      number: "06",
      title: "Deliver & Improve",
      text: "After deployment, we continue improving the product based on business needs, feedback and future opportunities.",
    },
  ];

  return (
    <div className="about-page">
      <CommonBanner title="About Us" />

      <section className="about-company">
        <div className="about-container about-company-container">
          <div className="about-company-content">
            <span className="about-label">ABOUT OUR COMPANY</span>

            <h1>
              Building Digital Solutions
              <span> That Move Businesses Forward</span>
            </h1>

            <p>
              We are an IT company focused on creating reliable, practical and
              user-friendly digital solutions for modern businesses. We combine
              technology, creativity and business understanding to turn ideas
              into solutions that create real value.
            </p>

            <p>
              From websites and web applications to customized software
              solutions, we work closely with our clients to understand their
              challenges, define the right approach and build technology that
              supports their business goals.
            </p>

            <div className="about-company-points">
              <div>
                <i className="fa-solid fa-circle-check"></i>
                <span>Business-focused development</span>
              </div>

              <div>
                <i className="fa-solid fa-circle-check"></i>
                <span>Modern technology solutions</span>
              </div>

              <div>
                <i className="fa-solid fa-circle-check"></i>
                <span>Quality-driven approach</span>
              </div>

              <div>
                <i className="fa-solid fa-circle-check"></i>
                <span>Reliable long-term support</span>
              </div>
            </div>
          </div>

          <div className="about-company-image">
            <div className="about-image-frame">
              <img
                src="https://res.cloudinary.com/yetzgheo/image/upload/v1792136751/AboutusWorkplace_re4lrz.jpg"
                alt="Modern IT workspace"
              />
            </div>

            <div className="about-image-badge">
              <strong>Technology</strong>
              <span>Driven By People</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="about-container">
          <div className="about-stats-header">
            <span>AT A GLANCE</span>

            <h2>
              Focused On Creating
              <strong> Real Value</strong>
            </h2>
          </div>

          <div className="about-stat-list">
            <div className="about-stat">
              <strong>10+</strong>
              <span>Technologies</span>
            </div>

            <div className="about-stat">
              <strong>100%</strong>
              <span>Commitment</span>
            </div>

            <div className="about-stat">
              <strong>24/7</strong>
              <span>Support</span>
            </div>

            <div className="about-stat">
              <strong>99%</strong>
              <span>Focus on Quality</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-believe">
        <div className="about-container about-believe-container">
          <div className="about-believe-image">
            <div className="about-image-frame">
              <img
                src="https://res.cloudinary.com/yetzgheo/image/upload/v1792136750/AboutusTeam_jwg0ue.avif"
                alt="IT team collaboration"
              />
            </div>
          </div>

          <div className="about-believe-content">
            <span className="about-label">WHAT WE BELIEVE</span>

            <h2>
              Technology Should Be
              <span> Useful, Simple & Effective</span>
            </h2>

            <p>
              Good technology is not simply about writing code. It is about
              understanding a problem, identifying the right solution and
              creating something people can actually use.
            </p>

            <div className="belief-list">
              <div className="belief-item">
                <div className="belief-number">01</div>

                <div>
                  <h3>Start With The Problem</h3>
                  <p>
                    We first understand the business challenge, users and
                    expected outcome before deciding on the technology.
                  </p>
                </div>
              </div>

              <div className="belief-item">
                <div className="belief-number">02</div>

                <div>
                  <h3>Build With Purpose</h3>
                  <p>
                    Every feature should have a clear purpose and contribute
                    something meaningful to the final product.
                  </p>
                </div>
              </div>

              <div className="belief-item">
                <div className="belief-number">03</div>

                <div>
                  <h3>Focus On Experience</h3>
                  <p>
                    We care about how technology feels to use, not only how it
                    works behind the scenes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-why">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-label">WHY CHOOSE US</span>

            <h2>
              More Than Just
              <span> Technology</span>
            </h2>

            <p>
              We focus on the complete journey — from understanding your
              requirements to delivering and supporting the final solution.
            </p>
          </div>

          <div className="about-why-list">
            {whyChooseUs.map((item) => (
              <div className="about-why-item" key={item.number}>
                <div className="about-why-icon">
                  <i className={item.icon}></i>
                </div>

                <div className="about-why-number">{item.number}</div>

                <div className="about-why-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <i className="fa-solid fa-arrow-right about-why-arrow"></i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-approach">
        <div className="about-container about-approach-container">
          <div className="about-approach-content">
            <span className="about-label">OUR APPROACH</span>

            <h2>
              From Concept To
              <span> Completion</span>
            </h2>

            <p>
              A structured development process helps us turn an initial idea
              into a dependable digital product. We keep every stage focused on
              clarity, quality, usability and measurable business value.
            </p>

            <div className="about-approach-points">
              <div>
                <i className="fa-solid fa-check"></i>
                <span>Clear project planning</span>
              </div>

              <div>
                <i className="fa-solid fa-check"></i>
                <span>Continuous communication</span>
              </div>

              <div>
                <i className="fa-solid fa-check"></i>
                <span>Quality-focused development</span>
              </div>

              <div>
                <i className="fa-solid fa-check"></i>
                <span>Continuous improvement</span>
              </div>
            </div>
          </div>

          <div className="about-approach-steps">
            {approach.map((item) => (
              <div className="about-step" key={item.number}>
                <div className="about-step-number">{item.number}</div>

                <div className="about-step-line"></div>

                <div className="about-step-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-final">
        <div className="about-container">
          <div className="about-final-content">
            <span>OUR COMMITMENT</span>

            <h2>
              Turning Technology Into
              <strong> Business Value</strong>
            </h2>

            <p>
              We believe the best digital solutions are the ones that make
              businesses better, processes simpler and experiences more
              meaningful.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;