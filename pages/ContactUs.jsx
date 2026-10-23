import React, { useState } from "react";
import api from "../utils/api";
import "../styles/ContactUs.css";
import CommonBanner from "./CommonBanner";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactUs = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setFeedback({ type: "", message: "" });

    try {
      const response = await api.post("/contact", formData);
      const data = response.data;

      if (data.success) {
        setFormData(initialFormData);
        setFeedback({
          type: data.emailSent ? "success" : "warning",
          message: data.message,
        });
      } else {
        setFeedback({
          type: "error",
          message: data.message || "Unable to submit your message.",
        });
      }
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error.response?.data?.message ||
          "Unable to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const feedbackIcon = {
    success: "fa-circle-check",
    warning: "fa-triangle-exclamation",
    error: "fa-circle-exclamation",
  };

  return (
    <>
      <CommonBanner title="Contact Us" />

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h1>
              Let's Connect
              <span> With Us</span>
            </h1>
            <p>
              Have a question about our services, need technical assistance, or
              want to discuss a business requirement? Reach out to our team and
              we'll be happy to understand your needs and help you with the
              right solution.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>

                <div>
                  <span>Email</span>
                  <p>info@yourcompany.com</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>

                <div>
                  <span>Phone</span>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>

                <div>
                  <span>Location</span>
                  <p>Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <p>
              Have a question or inquiry? Fill out the form below and our team
              will get back to you shortly.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength={100}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength={254}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={30}
                    autoComplete="tel"
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleChange}
                    maxLength={200}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={5000}
                  required
                ></textarea>
              </div>

              {feedback.message && (
                <div
                  className={`contact-feedback ${feedback.type}`}
                  role="status"
                  aria-live="polite"
                >
                  <i
                    className={`fa-solid ${
                      feedbackIcon[feedback.type] || "fa-circle-info"
                    }`}
                    aria-hidden="true"
                  ></i>
                  <span>{feedback.message}</span>
                </div>
              )}

              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <i className="fa-solid fa-arrow-right"></i>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;