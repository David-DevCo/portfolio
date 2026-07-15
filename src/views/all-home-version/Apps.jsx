import React from "react";
import AppsIMG from "../../components/portfolio/AppsIMG";
import useDocumentTitle from "../../components/useDocumentTitle";
import Footer from "../../components/footer/FooterAnimation";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import { Link } from 'react-router-dom';


const HomeFive = () => {
  useDocumentTitle("David Ramirez");
  return (
    <>
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
            Desarrolla Apps Reales <br />
            <span className="text-gradient-green">que la gente usa.</span>
          </h1>
          <p className="hero-desc" data-aos="fade-up" data-aos-delay="200">
            No hagas ejercicios academicos. Crea aplicaciones funcionales, publica en tiendas y resuelve problemas reales de usuarios.
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
              <h3 className="font-alt">Aplicaciones Desarrolladas</h3>
              <p>
              Aprende los trucos y conceptos basicos para desarrollar aplicaciones para cualquier dispositivo moviles.
              </p>
            </div>
          </div>
          {/* End .row */}
          <AppsIMG />
          <FloatingWhatsApp
            zIndex="1"
            phone='+573232805247'

      />
        </div>
      </section>
      {/* End Portfolio */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/*  End Footer */}
      </div>
    </>
  );
};

export default HomeFive;
