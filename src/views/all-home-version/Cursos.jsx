import React from "react";
import Header from "../../components/header/Header";
import Portfolio from "../../components/portfolio/cursosIMG";
import Footer from "../../components/footer/FooterAnimation";
import useDocumentTitle from "../../components/useDocumentTitle";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";
import { Link } from "react-router-dom";

const Cursos = () => {
  useDocumentTitle("Cursos - David Ramirez");
  return (
    <div className="home-dark">
      <Header />

      {/* Hero Section */}
      <section className="hero-section-custom">
        <div className="container">
          <div className="badge-wrapper" data-aos="fade-up">
            <span className="badge-tech">
              <span className="dot-pulse"></span>
              Learn by Doing
            </span>
          </div>
          <h1 data-aos="fade-up" data-aos-delay="100">
            Nuestros Cursos <br />
            <span className="text-gradient-green">aprender haciendo.</span>
          </h1>
          <p className="hero-desc" data-aos="fade-up" data-aos-delay="200">
            En nuestros cursos no solo aprendes conceptos, los aplicas.
            Construye proyectos reales, resuelve problemas y domina las
            tecnologias que usa la industria.
          </p>
          <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
            <Link to="/front-end" className="btn-primary-green">
              Front-End
            </Link>
            <Link to="/back-end" className="btn-secondary-green">
              Back-End
            </Link>
          </div>
        </div>
      </section>

      {/* Cursos Grid */}
      <section className="cursos-section">
        <div className="container">
          <div className="cursos-header" data-aos="fade-up">
            <span className="about-badge">
              <span className="badge-dot"></span>
              Nuestros Cursos
            </span>
            <h2 className="cursos-title">
              Domina las <span className="gradient-text">tecnologias</span> del
              mercado
            </h2>
            <p className="cursos-subtitle">
              Cursos presenciales disenados para developers que quieren ir al
              siguiente nivel. Aprende con proyectos reales.
            </p>
          </div>
          <Portfolio />
        </div>
      </section>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp
        zIndex="1"
        phone="+573232805247"
        popupMessage="Hola! Quiero informacion sobre los cursos"
        accountName="David Ramirez"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cursos;
