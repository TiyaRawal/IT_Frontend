import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import api from "../utils/api";
import "../styles/ApplyNow.css";

const MAX_RESUME_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const ApplyNow = () => {
  const location = useLocation();
  const resumeInputRef = useRef(null);
  const params = new URLSearchParams(location.search);
  const position = params.get("position") || "Open Position";
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    position,
    portfolio: "",
    coverLetter: "",
    resume: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      const file = files?.[0];
      if (!file) return;
      if (!ALLOWED_TYPES.includes(file.type)) {
        setFormData((prev) => ({ ...prev, resume: null }));
        setFeedback({
          type: "error",
          message: "Please upload a PDF, DOC or DOCX resume.",
        });
        e.target.value = "";
        return;
      }

      if (file.size > MAX_RESUME_SIZE) {
        setFormData((prev) => ({ ...prev, resume: null }));
        setFeedback({
          type: "error",
          message: "Resume size must not exceed 5 MB.",
        });
        e.target.value = "";
        return;
      }

      setFormData((prev) => ({ ...prev, resume: file }));
      setFeedback({ type: "", message: "" });
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFeedback({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!formData.resume) {
      setFeedback({
        type: "error",
        message: "Please upload your resume.",
      });
      return;
    }

    if (formData.resume.size > MAX_RESUME_SIZE) {
      setFeedback({
        type: "error",
        message: "Resume size must not exceed 5 MB.",
      });
      return;
    }

    setSubmitting(true);
    setFeedback({ type: "", message: "" });

    try {
      const file = formData.resume;
      const resumeData = await new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          if (typeof reader.result !== "string") {
            reject(new Error("Unable to read your resume."));
            return;
          }
          resolve(reader.result.split(",")[1]);
        };

        reader.onerror = () => {
          reject(new Error("Unable to read your resume."));
        };
        reader.readAsDataURL(file);
      });

      const applicationData = {
        ...formData,
        resume: {
          filename: file.name,
          contentType: file.type,
          data: resumeData,
        },
      };

      const response = await api.post("/apply", applicationData);

      setFeedback({
        type: "success",
        message:
          response.data.message ||
          "Your application has been submitted successfully!",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        position,
        portfolio: "",
        coverLetter: "",
        resume: null,
      });

      if (resumeInputRef.current) {
        resumeInputRef.current.value = "";
      }
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error.response?.data?.message ||
          "Unable to submit your application. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="apply-page">
      <div className="apply-hero">
        <div className="apply-hero-content">
          <span className="apply-hero-label">CAREERS</span>
          <h1>
            Start Your
            <strong>Next Chapter.</strong>
          </h1>
          <p>
            Tell us about yourself and take the next step toward building
            something meaningful with our team.
          </p>
        </div>
      </div>

      <div className="apply-container">
        <div className="apply-info">
          <span className="apply-section-label">JOIN OUR TEAM</span>
          <h2>
            We'd Love To
            <strong>Hear From You.</strong>
          </h2>
          <p>
            We are always looking for talented, curious and motivated people who
            enjoy solving problems and building great digital experiences.
          </p>

          <div className="apply-position-card">
            <div className="apply-position-icon">
              <i className="fa-solid fa-briefcase"></i>
            </div>

            <div>
              <span>APPLYING FOR</span>
              <h3>{position}</h3>
            </div>
          </div>

          <div className="apply-benefits">
            <div className="apply-benefit">
              <div className="apply-benefit-icon">
                <i className="fa-solid fa-users"></i>
              </div>

              <div>
                <h3>Collaborative Team</h3>
                <p>Work with people who value teamwork and ideas.</p>
              </div>
            </div>

            <div className="apply-benefit">
              <div className="apply-benefit-icon">
                <i className="fa-solid fa-arrow-trend-up"></i>
              </div>

              <div>
                <h3>Growth Opportunities</h3>
                <p>Learn, grow and take on meaningful challenges.</p>
              </div>
            </div>

            <div className="apply-benefit">
              <div className="apply-benefit-icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>

              <div>
                <h3>Build &amp; Create</h3>
                <p>Turn ideas into real products and experiences.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="apply-form-wrapper">
          <div className="apply-form-header">
            <span>APPLICATION FORM</span>
            <h2>
              Tell Us About
              <strong>Yourself.</strong>
            </h2>
            <p>
              Fill in your details below and our team will get back to you after
              reviewing your application.
            </p>
          </div>

          <form className="apply-form" onSubmit={handleSubmit}>
            <div className="apply-form-row">
              <div className="apply-field">
                <label>
                  Full Name <span>*</span>
                </label>

                <div className="apply-input-wrapper">
                  <i className="fa-regular fa-user"></i>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="apply-field">
                <label>
                  Email Address <span>*</span>
                </label>

                <div className="apply-input-wrapper">
                  <i className="fa-regular fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="apply-form-row">
              <div className="apply-field">
                <label>
                  Phone Number <span>*</span>
                </label>

                <div className="apply-input-wrapper">
                  <i className="fa-solid fa-phone"></i>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="apply-field">
                <label>
                  Experience <span>*</span>
                </label>

                <div className="apply-input-wrapper">
                  <i className="fa-solid fa-briefcase"></i>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select experience</option>
                    <option value="Fresher">Fresher</option>
                    <option value="0-1 Year">0 - 1 Year</option>
                    <option value="1-2 Years">1 - 2 Years</option>
                    <option value="2-3 Years">2 - 3 Years</option>
                    <option value="3+ Years">3+ Years</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="apply-field">
              <label>
                Position <span>*</span>
              </label>

              <div className="apply-input-wrapper">
                <i className="fa-solid fa-code"></i>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Position you are applying for"
                  required
                />
              </div>
            </div>

            <div className="apply-field">
              <label>Portfolio / LinkedIn</label>

              <div className="apply-input-wrapper">
                <i className="fa-solid fa-link"></i>
                <input
                  type="url"
                  name="portfolio"
                  placeholder="https://..."
                  value={formData.portfolio}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="apply-field">
              <label>
                Resume <span>*</span>
              </label>

              <label className="apply-upload-box">
                <input
                  ref={resumeInputRef}
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                />

                <div className="apply-upload-icon">
                  <i className="fa-solid fa-cloud-arrow-up"></i>
                </div>

                <div className="apply-upload-content">
                  <strong>
                    {formData.resume
                      ? formData.resume.name
                      : "Upload your resume"}
                  </strong>
                  <span>PDF, DOC or DOCX • Max 5MB</span>
                </div>
                <i className="fa-solid fa-arrow-up-from-bracket apply-upload-arrow"></i>
              </label>
            </div>

            <div className="apply-field">
              <label>Cover Letter</label>
              <textarea
                name="coverLetter"
                rows="5"
                placeholder="Tell us a little about yourself, your experience and why you would be a good fit..."
                value={formData.coverLetter}
                onChange={handleChange}
              ></textarea>
            </div>

            {feedback.message && (
              <p
                className={`apply-feedback ${feedback.type}`}
                role="status"
                aria-live="polite"
              >
                <i
                  className={
                    feedback.type === "success"
                      ? "fa-solid fa-circle-check"
                      : "fa-solid fa-circle-exclamation"
                  }
                ></i>
                {feedback.message}
              </p>
            )}

            <div className="apply-submit-area">
              <p>
                <i className="fa-solid fa-lock"></i>
                Your information is kept confidential.
              </p>
              <button
                type="submit"
                className="apply-submit-button"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Application"}
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplyNow;