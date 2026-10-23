import React, { useEffect, useState } from "react";
import "../styles/FAQ.css";
import api from "../utils/api";
import CommonBanner from "./CommonBanner";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);

  const getFAQs = async () => {
    try {
      let response = await api.get("/faqs");
      if (response.data.success) {
        setFaqs(response.data.faq);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFAQs();
  }, []);

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
                  key={faq._id || index}
                >
                  <button
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
