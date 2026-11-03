import React, { useState } from "react";
import "../styles/FAQ.css";
import CommonBanner from "./CommonBanner";

const faqs = [
  {
    _id: "6ac5e001735d4f69cfdfb6a9",
    question: "What IT services does your company provide?",
    answer:
      "We provide a wide range of IT services including web development, mobile app development, UI/UX design, cloud and DevOps, AI and data solutions, and cybersecurity. Our solutions are designed to help businesses build, improve, and scale their digital presence. We work with modern technologies to deliver reliable and user-friendly solutions.",
  },
  {
    _id: "6ac5e001735d4f69cfdfb6ae",
    question: "How do you ensure the security of a project?",
    answer:
      "Security is considered throughout the development process, from planning and architecture to deployment and maintenance. We follow secure development practices and implement appropriate authentication, authorization, data protection, and access controls. The security approach is also customized according to the project's requirements and risks.",
  },
  {
    _id: "6ac5e001735d4f69cfdfb6ab",
    question: "How do you choose the right technology for a project?",
    answer:
      "We select technologies based on the project's requirements, complexity, scalability, security, and long-term goals. Our team evaluates factors such as performance, development time, maintenance, and future expansion. This helps us choose a technology stack that is reliable and suitable for the specific project.",
  },
  {
    _id: "6ac5e001735d4f69cfdfb6aa",
    question: "Can you develop custom software for my business?",
    answer:
      "Yes, we develop custom software solutions based on your specific business requirements and goals. Our team first understands your workflow, challenges, and objectives before planning the solution. We then design and develop software that is scalable, secure, and suitable for your business needs.",
  },
  {
    _id: "6ac5e001735d4f69cfdfb6ac",
    question: "How long does it take to develop a website or application?",
    answer:
      "The development time depends on the project's features, complexity, design requirements, and overall scope. A simple website may take less time, while a custom web application or software solution may require several weeks or months. After understanding your requirements, we provide a clear project timeline.",
  },
  {
    _id: "6ac5e001735d4f69cfdfb6af",
    question: "Can you upgrade or improve an existing website or application?",
    answer:
      "Yes, we can work with existing websites and applications to improve their functionality, performance, design, and technology stack. We first review the existing system to understand its structure and identify areas for improvement. Based on the requirements, we can upgrade features, fix issues, or modernize the application.",
  },
  {
    _id: "6ac5e001735d4f69cfdfb6ad",
    question: "Do you provide maintenance and technical support?",
    answer:
      "Yes, we provide ongoing maintenance and technical support after project delivery. Our support can include bug fixing, performance improvements, security updates, feature enhancements, and general technical assistance. We help ensure that your application continues to perform reliably as your business grows.",
  },
  {
    _id: "6ac5e001735d4f69cfdfb6b0",
    question: "How can I start a project with your company?",
    answer:
      "You can start by contacting our team and sharing your project requirements, goals, and expectations. We will discuss your idea, understand the scope, and suggest a suitable approach for the project. Once the requirements are finalized, we can move forward with planning, development, and delivery.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <CommonBanner title="FAQ" />

      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-intro">
            <span className="faq-label">FAQ</span>

            <h2>Frequently Asked Questions</h2>

            <p>
              Find answers to common questions about our IT services, technology
              solutions, development process, support, and working with our
              team.
            </p>

            <a href="/contact" className="faq-contact-button">
              Still have questions?
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                  key={faq._id}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>

                    <i
                      className={
                        isOpen ? "fa-solid fa-minus" : "fa-solid fa-plus"
                      }
                    ></i>
                  </button>

                  <div
                    className={`faq-answer ${isOpen ? "faq-answer-open" : ""}`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;