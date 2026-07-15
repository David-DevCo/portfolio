import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`header-dark ${isScrolled ? "scrolled" : ""}`}>
      <nav className="header-nav">
        <div className="header-container">
          {/* Brand */}
          <NavLink to="/" className="header-brand" onClick={closeMenu}>
            <span className="brand-symbol">&lt;</span>
            <span className="brand-text">CodeJar</span>
            <span className="brand-symbol">/&gt;</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="header-menu-desktop">
            <NavLink to="/" className="header-nav-link" end>
              Inicio
            </NavLink>
            <a href="#about" className="header-nav-link">
              About
            </a>
            <a href="#work" className="header-nav-link">
              Experiencias
            </a>
            <a href="#services" className="header-nav-link">
              Skills
            </a>
            <a
              href="https://www.linkedin.com/in/david-murillo-7bab9067/"
              target="_blank"
              rel="noreferrer"
              className="header-nav-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/David-DevCo"
              target="_blank"
              rel="noreferrer"
              className="header-nav-link"
            >
              GitHub
            </a>
          </div>

          {/* CTA Button */}
          <div className="header-cta">
            <a
              href="https://aply-models.s3.amazonaws.com/estudio91/CV.David_Ramirez.pdf"
              download
              className="header-btn-download"
            >
              <i className="fa fa-download"></i>
              CV
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`header-toggler ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="toggler-line"></span>
            <span className="toggler-line"></span>
            <span className="toggler-line"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`header-mobile-menu ${isOpen ? "open" : ""}`}>
          <div className="mobile-menu-content">
            <NavLink to="/" className="mobile-nav-link" onClick={closeMenu}>
              Inicio
            </NavLink>
            <a href="#about" className="mobile-nav-link" onClick={closeMenu}>
              About
            </a>
            <a href="#work" className="mobile-nav-link" onClick={closeMenu}>
              Experiencias
            </a>
            <a href="#services" className="mobile-nav-link" onClick={closeMenu}>
              Skills
            </a>
            <div className="mobile-menu-divider"></div>
            <a
              href="https://www.linkedin.com/in/david-murillo-7bab9067/"
              target="_blank"
              rel="noreferrer"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              LinkedIn
              <i className="fa fa-external-link"></i>
            </a>
            <a
              href="https://github.com/David-DevCo"
              target="_blank"
              rel="noreferrer"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              GitHub
              <i className="fa fa-external-link"></i>
            </a>
            <div className="mobile-menu-divider"></div>
            <a
              href="https://aply-models.s3.amazonaws.com/estudio91/CV.David_Ramirez.pdf"
              download
              className="mobile-btn-download"
              onClick={closeMenu}
            >
              <i className="fa fa-download"></i>
              Download CV
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
