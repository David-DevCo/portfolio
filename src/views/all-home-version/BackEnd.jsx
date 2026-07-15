import React from "react";
import BackEndSlider from "../../components/slider/BackEndSlider";
import BackEndIMG from "../../components/portfolio/BackEndIMG";
import Footer from "../../components/footer/FooterAnimation";
import useDocumentTitle from "../../components/useDocumentTitle";
import 'react-floating-whatsapp-button/dist/index.css'
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import { Link } from 'react-router-dom';


const HomeFour = () => {
  useDocumentTitle("David Ramirez");
  return (
    <div className="home-dark">
      {/* End Header Section */}
      <BackEndSlider />
      {/* End Banner Section */}

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
            Domina el Back-End <br />
            <span className="text-gradient-green">construyendo servidores reales.</span>
          </h1>
          <p className="hero-desc" data-aos="fade-up" data-aos-delay="200">
            No memorices frameworks. Construye APIs, conecta bases de datos y despliega servicios en la nube. Asi se aprende desarrollo backend de verdad.
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
              <h3 className="font-alt">BACK-END</h3>
              <p>
              En ESTUDIO91 podras encontrar los mejores cursos para convertirte en desarrollador Back-end.
              </p>
            </div>
          </div>
          {/* End .row */}
          <BackEndIMG />
          <FloatingWhatsApp
            zIndex="1"
            phone='+573232805247'
      />
        </div>
      </section>
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/*  End Footer */}
    </div>
  );
};

export default HomeFour;
