import React from "react";

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <span className="brand-symbol">&lt;</span>
          <span className="brand-text">CodeJar</span>
          <span className="brand-symbol">/&gt;</span>
        </div>

        {/* Links */}
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/david-murillo-7bab9067/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/David-DevCo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.youtube.com/channel/UCz7eedmxjkdv-FL9H0mFr8Q"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            © {new Date().getFullYear()} David Ramirez • Senior Developer
          </p>
          <p className="footer-location">Villavicencio, Colombia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
