import React, { useState } from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <span>IT Company</span>
        </NavLink>

        <div className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `navbar-link ${isActive ? "navbar-link-active" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "navbar-link-active" : ""}`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "navbar-link-active" : ""}`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "navbar-link-active" : ""}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/team"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "navbar-link-active" : ""}`
            }
          >
            Our Team
          </NavLink>

          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "navbar-link-active" : ""}`
            }
          >
            Careers
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "navbar-link-active" : ""}`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "navbar-link-active" : ""}`
            }
          >
            FAQ
          </NavLink>
        </div>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `navbar-contact ${isActive ? "navbar-contact-active" : ""}`
          }
          onClick={closeMenu}
        >
          Contact Us
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>

        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <i
            className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </button>
      </div>

      <div className={`navbar-mobile ${menuOpen ? "navbar-mobile-open" : ""}`}>
        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "navbar-mobile-active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "navbar-mobile-active" : "")}
        >
          About Us
        </NavLink>

        <NavLink
          to="/services"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "navbar-mobile-active" : "")}
        >
          Services
        </NavLink>

        <NavLink
          to="/projects"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "navbar-mobile-active" : "")}
        >
          Projects
        </NavLink>

        <NavLink
          to="/team"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "navbar-mobile-active" : "")}
        >
          Our Team
        </NavLink>

        <NavLink
          to="/careers"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "navbar-mobile-active" : "")}
        >
          Careers
        </NavLink>

        <NavLink
          to="/blog"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "navbar-mobile-active" : "")}
        >
          Blog
        </NavLink>

        <NavLink
          to="/faq"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "navbar-mobile-active" : "")}
        >
          FAQ
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `navbar-mobile-contact ${
              isActive ? "navbar-mobile-contact-active" : ""
            }`
          }
          onClick={closeMenu}
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
