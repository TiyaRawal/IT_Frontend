import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import "../styles/Blog.css";
import CommonBanner from "./CommonBanner";

const categories = ["All", "Web Development", "UI / UX Design", "Artificial Intelligence", "Cloud & Technology", "Business & Innovation"];

function Blog() {
  const [articles, setArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const contentRef = useRef(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await api.get("/blogs");
        if (response.data.success) {
          setArticles(response.data.blogs || []);
        } else {
          setArticles([]);
          setError("Unable to load blog articles.");
        }
      } catch (err) {
        setArticles([]);
        setError("Unable to load blog articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter(
          (article) => article.category === activeCategory
        );

  useEffect(() => {
    const container = contentRef.current;
    if (!container || loading || error) return;
    const elements = container.querySelectorAll(".blog-animate");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("blog-in-view")
      );
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
      { threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [activeCategory, loading, error, filteredArticles.length]);

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
            <span className="journal-edition">
              TECHNOLOGY · IDEAS · PEOPLE
            </span>
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
            <span>
              {loading ? "LOADING..." : `${filteredArticles.length} ARTICLES`}
            </span>
          </div>
        </section>

        {!loading && !error && articles.length > 0 && (
          <nav
            className="journal-topics"
            aria-label="Filter articles by topic"
          >
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
        )}

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

          {loading ? (
            <div className="journal-no-results">
              <h3>Loading articles...</h3>
              <p>Fetching the latest articles from our journal.</p>
            </div>
          ) : error ? (
            <div className="journal-no-results">
              <h3>Something went wrong.</h3>
              <p>{error}</p>
              <button
                type="button"
                onClick={() => window.location.reload()}
              >
                Try again
              </button>
            </div>
          ) : articles.length === 0 ? (
            <div className="journal-no-results">
              <h3>No articles available yet.</h3>
              <p>
                Published articles will appear here once they are added
                to our journal.
              </p>
            </div>
          ) : filteredArticles.length > 0 ? (
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
                    {article.image && (
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                      />
                    )}
                    <span
                      className="journal-photo-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </Link>

                  <div className="journal-story-info">
                    <div className="journal-story-meta">
                      <span>{article.category}</span>
                      <span>{article.time}</span>
                    </div>

                    <h3>
                      <Link to={`/blog/${article._id}`}>
                        {article.title}
                      </Link>
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
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
              >
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