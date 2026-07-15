import React from "react";
import BasesDatosIMG from "../../components/portfolio/BasesDatosIMG";
import Footer from "../../components/footer/Footer";
import useDocumentTitle from "../../components/useDocumentTitle";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import { Link } from 'react-router-dom';


const HomeOne = () => {
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
              Domina las Bases de Datos <br />
              <span className="text-gradient-green">optimizando datos reales.</span>
            </h1>
            <p className="hero-desc" data-aos="fade-up" data-aos-delay="200">
              No aprendas teoria abstracta. Crea esquemas, optimiza consultas y gestiona datos masivos. Las bases de datos se aprenden usandolas.
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
                <h3 className="font-alt">BASES DE DATOS</h3>
                <p>
                  Cursos de Optimizacion de Bases de Datos en la nube
                </p>
              </div>
            </div>
            {/* End .row */}
            <BasesDatosIMG />
            <FloatingWhatsApp
              zIndex="1"
              phone='+573232805247'
            />
          </div>
        </section>
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

export default HomeOne;
