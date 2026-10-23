import React from "react";
import { Link } from "react-router-dom";
import "../styles/TermsAndCondition.css";

const TermsAndConditions = () => {
  return (
    <main className="terms-page">
      <div className="terms-container">
        <header className="terms-hero">
          <span className="terms-eyebrow">Please Read Carefully</span>
          <h1>Terms &amp; Conditions</h1>
          <p>
            These terms describe the general conditions for accessing and using
            our website, exploring our services, and submitting enquiries or job
            applications.
          </p>
        </header>

        <div className="terms-content">
          <section className="terms-card">
            <h2>1. Introduction</h2>
            <p>
              By accessing or using this website, you agree to these Terms &amp;
              Conditions. If you do not agree with these terms, please
              discontinue using the website.
            </p>
          </section>

          <section className="terms-card">
            <h2>2. Website Information</h2>
            <p>
              This website provides information about our company, services,
              technologies, projects, career opportunities, and contact options.
              Website content is provided for general informational purposes.
            </p>
          </section>

          <section className="terms-card">
            <h2>3. Acceptable Use</h2>
            <p>When using this website, you agree not to:</p>
            <ul>
              <li>Use the website for unlawful purposes.</li>
              <li>Attempt to gain unauthorized access to website systems.</li>
              <li>
                Disrupt website functionality or interfere with its security.
              </li>
              <li>Submit false, misleading, or unauthorized information.</li>
              <li>
                Copy or misuse website content in violation of applicable laws
                or intellectual property rights.
              </li>
            </ul>
          </section>

          <section className="terms-card">
            <h2>4. Intellectual Property</h2>
            <p>
              Unless otherwise stated, the website's original text, design,
              graphics, branding, and other content are intended for use by the
              website owner. You may not reproduce, distribute, modify, or
              commercially use protected content without appropriate permission.
            </p>
            <p>
              Third-party names, trademarks, technologies, and assets remain the
              property of their respective owners.
            </p>
          </section>

          <section className="terms-card">
            <h2>5. Services and Project Demonstrations</h2>
            <p>
              Descriptions of services, technologies, and projects are provided
              to explain our work and capabilities. Project demonstrations may
              contain sample content or features that differ from a final
              production system.
            </p>
            <p>
              We may update website content, project demonstrations, or service
              descriptions as needed.
            </p>
          </section>

          <section className="terms-card">
            <h2>6. Contact Enquiries</h2>
            <p>
              When submitting an enquiry, you agree to provide accurate
              information and use the contact form for legitimate communication.
              Submitting an enquiry does not automatically establish a business
              relationship or guarantee a response within a particular time.
            </p>
          </section>

          <section className="terms-card">
            <h2>7. Careers and Job Applications</h2>
            <p>
              Job listings and career information are provided for informational
              purposes. Submitting an application does not guarantee an
              interview, selection, or employment.
            </p>
            <p>
              Applicants should provide accurate information and ensure that
              submitted documents are theirs to share. Applications may be
              reviewed for recruitment purposes.
            </p>
          </section>

          <section className="terms-card">
            <h2>8. Website Availability</h2>
            <p>
              We aim to keep the website accessible and up to date. However,
              temporary interruptions, technical errors, or maintenance may
              occasionally affect availability.
            </p>
            <p>
              Website features or content may be updated, suspended, or removed
              when reasonably necessary.
            </p>
          </section>

          <section className="terms-card">
            <h2>9. External Links</h2>
            <p>
              The website may link to external websites or third-party services.
              These links are provided for convenience. We do not control
              external websites and are not responsible for their content,
              availability, or policies.
            </p>
          </section>

          <section className="terms-card">
            <h2>10. Disclaimer</h2>
            <p>
              Website content is provided on an informational basis. To the
              extent permitted by applicable law, we do not guarantee that all
              information will always be complete, accurate, current, or
              available without interruption.
            </p>
          </section>

          <section className="terms-card">
            <h2>11. Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law, we are not responsible
              for losses arising from the use of, or inability to use, the
              website or from reliance on general website information. Nothing
              in these terms excludes liability where exclusion is not permitted
              by law.
            </p>
          </section>

          <section className="terms-card">
            <h2>12. Changes to These Terms</h2>
            <p>
              These Terms &amp; Conditions may be revised as the website or its
              services evolve. Updated terms will be published on this page.
              Continued use of the website after changes are published
              constitutes use subject to the revised terms, to the extent
              permitted by applicable law.
            </p>
          </section>

          <section className="terms-card">
            <h2>13. Contact Us</h2>
            <p>
              If you have questions about these Terms &amp; Conditions, please
              contact us through our Contact Us page.
            </p>
            <Link to="/contact" className="terms-contact-link">
              Visit Contact Us <span aria-hidden="true">→</span>
            </Link>
          </section>
        </div>

        <nav className="terms-bottom-links" aria-label="Legal pages">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span aria-hidden="true">|</span>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </main>
  );
};

export default TermsAndConditions;