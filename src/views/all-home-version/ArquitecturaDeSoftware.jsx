import Footer from "../../components/footer/FooterAnimation";
import React from "react";
import ArquitecturaSoftwareIMG from "../../components/portfolio/ArquitecturaSoftwareIMG";
import useDocumentTitle from "../../components/useDocumentTitle";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import { Link } from 'react-router-dom';


const HomeSix = () => {
  useDocumentTitle("David Ramirez");
  return (
    <div className="home-dark">

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
            Arquitectura de Software <br />
            <span className="text-gradient-green">disenando sistemas reales.</span>
          </h1>
          <p className="hero-desc" data-aos="fade-up" data-aos-delay="200">
            No estudies patrones de memoria. Disena arquitecturas escalables, microservicios y sistemas distribuidos que soporten trafico real.
          </p>
          <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
            <Link to="/cursos" className="btn-primary-green">
              Ver Todos los Cursos
            </Link>
            <Link to="/planes" className="btn-secondary-green">
              Planes y Precios
            </Link>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      <section id="work" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Arquitecturas</h3>
              <p>
                Desarrolla software a niveles increibles con el Curso especializa de Arquitectura de Software.
              </p>
            </div>
          </div>
          {/* End .row */}
          <FloatingWhatsApp
            zIndex="1"
            phone='+573232805247'
      />
          <ArquitecturaSoftwareIMG />
        </div>
      </section>
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default HomeSix;
