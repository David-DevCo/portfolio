import React from "react";
import Footer from "../../components/footer/FooterAnimation";
import Portfolio from "../../components/portfolio/cursosIMG";
import useDocumentTitle from "../../components/useDocumentTitle";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import Header from "../../components/header/Header";
import { Link } from 'react-router-dom';

const Cursos = () => {
  useDocumentTitle("David Ramirez");
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
            En nuestros cursos no solo aprendes conceptos, los aplicas. Construye proyectos reales, resuelve problemas y domina las tecnologias que usa la industria.
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
      {/* End Hero Section */}

      {/* Portfolio */}
      <section id="work" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">NUESTROS CURSOS</h3>
              <p>
                Liberate de conocimiento con tus desempenos en nuestra Academia
                de Estudios con cursos creados para otorgarle la
                forma a tus proyectos y alcanzar tus metas.
              </p>
            </div>
          </div>
          {/* End .row */}
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio */}

      <FloatingWhatsApp
        zIndex="1"
        phone='+573232805247'
        popupMessage="Hola, quiero informacion sobre los cursos"
        accountName="DAVID"
      />

      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      
    </div>
  );
};

export default Cursos;
