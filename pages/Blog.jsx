import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Blog.css";
import CommonBanner from "./CommonBanner";

const categories = [
  "All",
  "Web Development",
  "UI / UX Design",
  "Artificial Intelligence",
  "Cloud & Technology",
  "Business & Innovation",
];

export const articles = [
  {
    _id: "6ad5d03403672698ffe37b65",
    title: "The Little Details That Make a Website Feel Effortless",
    category: "Web Development",
    date: "October 12, 2026",
    time: "6 min read",
    image:
      "https://res.cloudinary.com/yetzgheo/image/upload/v1792578193/BlogWebDev_cqrue1.avif",
    description:
      "A great website is not just about how it looks. Performance, accessibility and thoughtful interactions all shape the experience.",
    content: `A great website is more than an attractive design. It should be easy to navigate, quick to load and comfortable to use on every device.

**Performance matters.** Large images, unnecessary scripts and poorly optimized code can make a website feel slow.

**Make navigation simple.** Visitors should understand where they are and how to find the information they need.

**Design for everyone.** Readable text, sufficient color contrast, keyboard navigation and useful image descriptions help make websites accessible.

**Pay attention to small interactions.** Helpful form messages, clear buttons and consistent spacing make a website feel more polished.

The best websites combine thoughtful design with reliable performance.`,
  },
  {
    _id: "6ad5d03403672698ffe37b66",
    title: "Designing Digital Experiences People Understand",
    category: "UI / UX Design",
    date: "October 08, 2026",
    time: "5 min read",
    image:
      "https://res.cloudinary.com/yetzgheo/image/upload/v1792578193/BlogUIUX_amtzrr.avif",
    description:
      "Clear navigation, readable content and purposeful visual hierarchy make digital products easier to use.",
    content: `Good digital design helps people understand what they can do and where they should go next.

**Start with the user.** Understand who will use the product, what they need and what problem they are trying to solve.

**Build a clear visual hierarchy.** Headings, spacing, font sizes and colors help visitors distinguish important information.

**Keep navigation predictable.** Familiar menus and consistent layouts reduce confusion.

**Make interactions understandable.** Buttons should look clickable and forms should explain errors.

**Test the experience.** Feedback from users can help improve usability.

Effective UI and UX design is about making technology easier to understand.`,
  },
  {
    _id: "6ad5d03403672698ffe37b67",
    title: "Making AI Useful Beyond the Hype",
    category: "Artificial Intelligence",
    date: "October 04, 2026",
    time: "5 min read",
    image:
      "https://res.cloudinary.com/yetzgheo/image/upload/v1792578192/BlogAI_az1xay.avif",
    description:
      "Discover practical ways businesses can use artificial intelligence to solve everyday problems and improve workflows.",
    content: `Artificial intelligence is attracting attention across industries, but its real value comes from solving practical problems.

**Identify repetitive tasks.** AI tools can help teams summarize documents, organize information and draft routine communications.

**Improve customer support.** Carefully designed AI assistants can answer common questions.

**Support better decisions.** AI can help analyze information, but its output depends on the data and context provided.

**Protect information.** Businesses should review privacy requirements and security policies.

**Measure the results.** Start with a small use case and evaluate accuracy and value.

AI is most useful when it supports people rather than replacing thoughtful judgment.`,
  },
  {
    _id: "6ad5d03403672698ffe37b68",
    title: "A Simpler Way to Think About Cloud Technology",
    category: "Cloud & Technology",
    date: "September 28, 2026",
    time: "7 min read",
    image:
      "https://res.cloudinary.com/yetzgheo/image/upload/v1792578192/BlogCloud_fkiu2e.avif",
    description:
      "Understand how cloud services support modern applications, flexible infrastructure and growing teams.",
    content: `Cloud technology allows businesses to use computing resources such as servers, storage and databases through services provided over a network.

**Scale when needed.** Businesses can increase or reduce resources as application requirements change.

**Support distributed teams.** Cloud-hosted applications make it easier for teams to access tools from different locations.

**Choose the right services.** Hosting, databases, file storage and monitoring depend on project requirements.

**Think about security.** Strong access controls and secure configuration remain essential.

**Monitor costs and performance.** Monitoring usage helps prevent unexpected expenses.

Cloud technology provides flexibility, but successful implementation still requires planning.`,
  },
  {
    _id: "6ad5d03403672698ffe37b69",
    title: "Writing APIs That Are Easier to Maintain",
    category: "Web Development",
    date: "September 22, 2026",
    time: "6 min read",
    image:
      "https://res.cloudinary.com/yetzgheo/image/upload/v1792578193/BlogWebDevAPI_qtpn8t.avif",
    description:
      "Consistent responses, clear naming and useful error messages help build dependable applications.",
    content: `An API connects different parts of an application and allows them to exchange data.

**Use consistent routes.** Choose clear resource names and predictable endpoints.

**Validate incoming data.** Check required fields and permitted values before saving information.

**Return predictable responses.** Consistent response structures make frontend integration easier.

**Handle errors carefully.** Return appropriate status codes and useful messages.

**Keep database operations organized.** Separate route handling, database access and validation.

**Test common situations.** Check successful requests, missing records and invalid input.

Clear naming, consistent behavior and useful error handling provide a strong foundation for applications.`,
  },
  {
    _id: "6ad5d03403672698ffe37b6a",
    title: "From a Business Idea to a Useful Digital Product",
    category: "Business & Innovation",
    date: "September 16, 2026",
    time: "4 min read",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    description:
      "Before building, identify the problem, understand your users and decide what your first version really needs.",
    content: `A promising business idea becomes a useful digital product when it solves a real problem for a clearly defined group of people.

**Understand the problem first.** Speak with potential users and learn about their current challenges.

**Define the first version.** List the essential features required to solve the main problem.

**Create a simple user journey.** Map the steps a person takes to reach their goal.

**Build and test early.** A working prototype can help collect feedback.

**Learn from real usage.** Observe where users succeed and where they struggle.

A focused first version, useful feedback and steady improvement help turn an idea into something people want to use.`,
  },
];

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const contentRef = useRef(null);

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".blog-animate");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("blog-in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("blog-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <>
      <CommonBanner title="Blog" />

      <main className="journal-page" ref={contentRef}>
        <section className="journal-heading">
          <div className="journal-heading-top">
            <p className="journal-kicker">
              <span className="journal-kicker-line" />
              THE COMPANY JOURNAL
            </p>
            <span className="journal-edition">TECHNOLOGY · IDEAS · PEOPLE</span>
          </div>

          <div className="journal-heading-main">
            <h1>
              A little more
              <br />
              <span>to think about.</span>
            </h1>
            <p>
              Perspectives on the digital world, thoughtful design and
              technology that solves real problems.
            </p>
          </div>

          <div className="journal-heading-bottom">
            <span>NOTES FROM OUR TEAM</span>
            <span>{filteredArticles.length} ARTICLES</span>
          </div>
        </section>

        <nav className="journal-topics" aria-label="Filter articles by topic">
          <span className="journal-topics-label">BROWSE TOPICS</span>

          <div className="journal-topic-options">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`journal-topic ${
                  activeCategory === category ? "selected" : ""
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </nav>

        <section className="journal-reading">
          <div className="journal-reading-heading blog-animate">
            <div>
              <p className="journal-section-label">
                {activeCategory === "All"
                  ? "FRESH PERSPECTIVES"
                  : "EXPLORE THIS TOPIC"}
              </p>
              <h2>
                {activeCategory === "All"
                  ? "Fresh from the journal"
                  : activeCategory}
              </h2>
            </div>

            <p className="journal-reading-intro">
              Ideas, observations and practical
              <br />
              insights from our world.
            </p>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="journal-story-grid">
              {filteredArticles.map((article, index) => (
                <article
                  className={`journal-story ${
                    index % 4 === 1 || index % 4 === 2
                      ? "journal-story-small"
                      : "journal-story-large"
                  } blog-animate`}
                  key={article._id}
                  style={{
                    "--story-delay": `${(index % 2) * 80}ms`,
                  }}
                >
                  <Link
                    to={`/blog/${article._id}`}
                    className="journal-story-photo"
                    aria-label={`Read ${article.title}`}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                    />
                    <span className="journal-photo-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </Link>

                  <div className="journal-story-info">
                    <div className="journal-story-meta">
                      <span>{article.category}</span>
                      <span>{article.time}</span>
                    </div>

                    <h3>
                      <Link to={`/blog/${article._id}`}>{article.title}</Link>
                    </h3>

                    <p>{article.description}</p>

                    <div className="journal-story-bottom">
                      <span>{article.date}</span>

                      <Link
                        to={`/blog/${article._id}`}
                        aria-label={`Continue reading ${article.title}`}
                      >
                        Continue reading <span>↗</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="journal-no-results">
              <h3>No articles in this category yet.</h3>
              <p>Choose another topic to browse the journal.</p>
              <button type="button" onClick={() => setActiveCategory("All")}>
                Browse all articles
              </button>
            </div>
          )}
        </section>

        <section className="journal-end blog-animate">
          <p className="journal-section-label">HAVE SOMETHING IN MIND?</p>

          <div className="journal-end-content">
            <h2>
              Good ideas start
              <br />
              with a conversation.
            </h2>

            <div>
              <p>
                Have a question about technology or an idea you'd like to
                explore? Let's talk about it.
              </p>

              <Link to="/contact" className="journal-end-link">
                Get in touch <span>↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Blog;