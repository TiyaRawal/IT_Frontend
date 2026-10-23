import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../utils/api";
import "../styles/BlogDetail.css";
import CommonBanner from "./CommonBanner";

function BlogDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError("");
        setArticle(null);

        const response = await api.get(`/blogs/${id}`);
        if (response.data.success && response.data.blog) {
          setArticle(response.data.blog);
        } else {
          setError("Blog article not found.");
        }
      } catch (err) {
        setError(
          err.response?.status === 404
            ? "This article could not be found."
            : "Unable to load the article. Please try again.",
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    } else {
      setError("Invalid blog article.");
      setLoading(false);
    }
  }, [id]);

  const getParagraphs = (content) => {
    if (!content) return [];
    return content
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);
  };

  const formatParagraph = (paragraph) => {
    const match = paragraph.match(/^\*\*(.*?)\*\*\.?\s*(.*)$/s);

    if (match) {
      return (
        <>
          <h3 className="blog-detail-content-heading">
            {match[1].replace(/[.:]+$/, "")}
          </h3>
          {match[2] && <p>{match[2]}</p>}
        </>
      );
    }
    return <p>{paragraph.replace(/\*\*(.*?)\*\*/g, "$1")}</p>;
  };

  const paragraphs = getParagraphs(article?.content);

  return (
    <>
      <CommonBanner title="Blog Details" />

      <main className="blog-detail-page">
        {loading ? (
          <div className="blog-detail-state">
            <span className="blog-detail-loader" />
            <h2>Loading article...</h2>
            <p>Please wait while we fetch the article.</p>
          </div>
        ) : error ? (
          <div className="blog-detail-state">
            <h2>Article unavailable</h2>
            <p>{error}</p>
            <Link to="/blog" className="blog-detail-button">
              Back to Blog
            </Link>
          </div>
        ) : article ? (
          <article className="blog-detail-article">
            <div className="blog-detail-topbar">
              <Link to="/blog" className="blog-detail-back">
                <span aria-hidden="true">←</span> All articles
              </Link>

              <span className="blog-detail-journal-label">
                THE COMPANY JOURNAL
              </span>
            </div>

            <header className="blog-detail-header">
              {article.category && (
                <span className="blog-detail-category">{article.category}</span>
              )}
              <h1>{article.title}</h1>
              {article.description && (
                <p className="blog-detail-description">{article.description}</p>
              )}

              <div className="blog-detail-meta">
                {article.date && <span>{article.date}</span>}
                {article.time && <span>{article.time}</span>}
              </div>
            </header>

            <section className="blog-detail-feature">
              {article.image && (
                <figure className="blog-detail-cover">
                  <img src={article.image} alt={article.title} />
                </figure>
              )}

              <div className="blog-detail-feature-content">
                <span className="blog-detail-feature-label">A CLOSER LOOK</span>
                <h2>{article.title}</h2>
                <p>
                  {article.description ||
                    "Explore the ideas and insights behind this topic."}
                </p>

                <div className="blog-detail-feature-bottom">
                  <span>{article.category}</span>
                </div>
              </div>
            </section>

            <section className="blog-detail-body">
              <div className="blog-detail-content">
                {paragraphs.length > 0 ? (
                  paragraphs.map((paragraph, index) => (
                    <div className="blog-detail-paragraph" key={index}>
                      {formatParagraph(paragraph)}
                    </div>
                  ))
                ) : (
                  <p className="blog-detail-empty-content">
                    The full article content is not available yet.
                  </p>
                )}
              </div>
            </section>

            <footer className="blog-detail-footer">
              <div className="blog-detail-footer-copy">
                <span className="blog-detail-footer-kicker">
                  KEEP EXPLORING
                </span>
                <h2>There is more to discover.</h2>
                <p>
                  Read more ideas, perspectives and insights from our company
                  journal.
                </p>
              </div>

              <Link to="/blog" className="blog-detail-button">
                Explore all articles <span aria-hidden="true">↗</span>
              </Link>
            </footer>
          </article>
        ) : null}
      </main>
    </>
  );
}

export default BlogDetail;