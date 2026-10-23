import React from "react";
import { Link } from "react-router-dom";
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <main className="privacy-page">
      <div className="privacy-container">
        <header className="privacy-hero">
          <span className="privacy-eyebrow">Your Privacy Matters</span>
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy explains how our website handles information
            when you browse our services, contact us, or apply for a job.
          </p>
        </header>

        <div className="privacy-content">
          <section className="privacy-card">
            <h2>1. Introduction</h2>
            <p>
              We respect your privacy and aim to handle your information
              responsibly. This policy describes the types of information that
              may be collected through our website and how that information may
              be used.
            </p>
          </section>

          <section className="privacy-card">
            <h2>2. Information We Collect</h2>
            <p>Depending on how you use our website, we may collect:</p>
            <ul>
              <li>Name and contact details submitted through forms.</li>
              <li>Email address, phone number, and enquiry messages.</li>
              <li>
                Information submitted when applying for a job, including
                resumes, skills, qualifications, and work experience.
              </li>
              <li>
                Information you voluntarily provide while communicating with us.
              </li>
              <li>
                Basic technical information required to operate and maintain the
                website.
              </li>
            </ul>
          </section>

          <section className="privacy-card">
            <h2>3. How We Use Your Information</h2>
            <p>Information submitted through the website may be used to:</p>
            <ul>
              <li>Respond to enquiries and contact requests.</li>
              <li>Provide information about our services and projects.</li>
              <li>Review job applications and contact candidates.</li>
              <li>Communicate about requests or submitted information.</li>
              <li>Maintain website functionality and security.</li>
              <li>Improve our website and user experience.</li>
            </ul>
          </section>

          <section className="privacy-card">
            <h2>4. Contact Forms and Enquiries</h2>
            <p>
              When you submit a contact form, the information you provide may be
              stored in our database and used to respond to your enquiry. An
              email confirmation or other communication may also be sent where
              the relevant feature is enabled.
            </p>
            <p>
              Please avoid including passwords, payment details, or other
              sensitive information in general enquiry forms.
            </p>
          </section>

          <section className="privacy-card">
            <h2>5. Careers and Job Applications</h2>
            <p>
              If you apply for a position through our website, we may collect
              the details and documents you submit, including your resume and
              professional information. This information may be used to assess
              your application and communicate with you regarding recruitment.
            </p>
            <p>
              Please ensure that the information you submit is accurate and that
              you are authorized to share any documents provided.
            </p>
          </section>

          <section className="privacy-card">
            <h2>6. Data Storage and Security</h2>
            <p>
              Information submitted through our website may be stored
              electronically in systems used to operate the website. Reasonable
              measures are intended to help protect this information against
              unauthorized access, alteration, or disclosure.
            </p>
            <p>
              However, no method of electronic storage or transmission can be
              guaranteed to be completely secure.
            </p>
          </section>

          <section className="privacy-card">
            <h2>7. Sharing of Information</h2>
            <p>
              We do not intend to make personal information submitted through
              our website publicly available. Information may be accessed by
              authorized personnel or service providers when reasonably
              necessary to operate the website, respond to requests, or support
              recruitment activities.
            </p>
            <p>
              Information may also be disclosed where required by applicable law
              or a valid legal request.
            </p>
          </section>

          <section className="privacy-card">
            <h2>8. Third-Party Websites</h2>
            <p>
              Our website may contain links to external websites, project
              demonstrations, or third-party services. We do not control the
              privacy practices or content of those websites. Please review
              their respective policies before sharing information with them.
            </p>
          </section>

          <section className="privacy-card">
            <h2>9. Policy Updates</h2>
            <p>
              This Privacy Policy may be updated as website features, services,
              or practices change. Any revised version will be published on this
              page.
            </p>
          </section>

          <section className="privacy-card">
            <h2>10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how information
              submitted through the website is handled, please contact us
              through our Contact Us page.
            </p>
            <Link to="/contact" className="privacy-contact-link">
              Visit Contact Us <span aria-hidden="true">→</span>
            </Link>
          </section>
        </div>

        <nav className="privacy-bottom-links" aria-label="Legal pages">
          <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          <span aria-hidden="true">|</span>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </main>
  );
};

export default PrivacyPolicy;