import React from "react";
import "../styles/OurTeam.css";
import CommonBanner from "./CommonBanner";

const teamMembers = [
  {
    _id: "6ac87b9b31d455edffd21e7c",
    name: "Rahul Shah",
    position: "Full Stack Developer",
    image: "https://i.pravatar.cc/600?img=12",
    description:
      "Passionate about building scalable web applications and developing reliable solutions using modern technologies.",
    skills: "React, Node.js, MongoDB",
  },
  {
    _id: "6ac87b9b31d455edffd21e7d",
    name: "Priya Mehta",
    position: "UI/UX Designer",
    image: "https://i.pravatar.cc/600?img=47",
    description:
      "Focused on creating clean, intuitive and user-friendly digital experiences that connect design with functionality.",
    skills: "UI Design, UX, Prototyping",
  },
  {
    _id: "6ac87b9b31d455edffd21e7e",
    name: "Amit Patel",
    position: "Backend Developer",
    image: "https://i.pravatar.cc/600?img=11",
    description:
      "Works on secure and efficient backend systems, APIs and database architecture for reliable applications.",
    skills: "Node.js, Express, MongoDB",
  },
  {
    _id: "6ac87b9b31d455edffd21e7f",
    name: "Neha Shah",
    position: "Project Manager",
    image: "https://i.pravatar.cc/600?img=32",
    description:
      "Coordinates teams, manages project requirements and ensures smooth delivery from planning to completion.",
    skills: "Planning, Agile, Management",
  },
  {
    _id: "6ac87b9b31d455edffd21e80",
    name: "Karan Patel",
    position: "Frontend Developer",
    image: "https://i.pravatar.cc/600?img=13",
    description:
      "Builds responsive and interactive interfaces with a focus on performance, usability and modern frontend practices.",
    skills: "React, JavaScript, CSS",
  },
  {
    _id: "6ac87b9b31d455edffd21e81",
    name: "Anjali Shah",
    position: "QA Engineer",
    image: "https://i.pravatar.cc/600?img=44",
    description:
      "Ensures software quality through testing, debugging and detailed validation across different application flows.",
    skills: "Testing, QA, Automation",
  },
  {
    _id: "6ac87cfd31d455edffd21e83",
    name: "Rohan Desai",
    position: "DevOps Engineer",
    image: "https://i.pravatar.cc/600?img=68",
    description:
      "Focuses on deployment automation, cloud infrastructure and maintaining reliable application environments.",
    skills: "AWS, Docker, CI/CD",
  },
  {
    _id: "6ac87cfd31d455edffd21e84",
    name: "Simran Patel",
    position: "Data Analyst",
    image: "https://i.pravatar.cc/600?img=49",
    description:
      "Transforms business data into useful insights and supports informed decisions through analysis and reporting.",
    skills: "SQL, Python, Data Analysis",
  },
  {
    _id: "6ac87cfd31d455edffd21e85",
    name: "Dev Mehta",
    position: "Mobile App Developer",
    image: "https://i.pravatar.cc/600?img=60",
    description:
      "Builds responsive mobile applications with a focus on usability, performance and smooth user experiences.",
    skills: "React Native, JavaScript, APIs",
  },
  {
    _id: "6ac87cfd31d455edffd21e86",
    name: "Kavya Shah",
    position: "Digital Marketing Specialist",
    image: "https://i.pravatar.cc/600?img=45",
    description:
      "Works on digital campaigns, online visibility and content strategies to help businesses reach their target audiences.",
    skills: "SEO, Content, Analytics",
  },
];

const OurTeam = () => {
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
            {teamMembers.map((member) => (
              <div className="team-card" key={member._id}>
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
                        <a
                          href="https://www.linkedin.com/"
                          aria-label="LinkedIn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>

                        <a
                          href="https://github.com/"
                          aria-label="GitHub"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;