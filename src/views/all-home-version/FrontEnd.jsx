import React from "react";
import Footer from "../../components/footer/FooterAnimation";
import FrontEndIMG from "../../components/portfolio/FrontEndIMG";
import useDocumentTitle from "../../components/useDocumentTitle";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import Header from "../../components/header/Header";
import { Link } from 'react-router-dom';

const HomeSix = () => {
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
            Domina el Front-End <br />
            <span className="text-gradient-green">construyendo interfaces reales.</span>
          </h1>
          <p className="hero-desc" data-aos="fade-up" data-aos-delay="200">
            No aprendas de memoria. Construye componentes, conecta APIs y crea aplicaciones que los usuarios van a usar. Esa es la forma real de aprender.
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
              <h3 className="font-alt">FRONT-END</h3>
              <p>
                Conviertete en un Programador front-end
                aprendiendo con Profesores Lideres en la Industria.
              </p>
            </div>
          </div>
          {/* End .row */}
          <FloatingWhatsApp
            zIndex="1"
            phone='+573232805247'
            
          />
          <FrontEndIMG />
        </div>
      </section>
      {/* End Portfolio */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default HomeSix;
