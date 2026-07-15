import React from "react";
import Footer from "../../components/footer/FooterAnimation";
import useDocumentTitle from "../../components/useDocumentTitle";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button';
import 'react-floating-whatsapp-button/dist/index.css';

const tecnologias = [
  { name: 'Linux y Consola', desc: 'Aprende a moverte por el sistema operativo que corre internet.' },
  { name: 'Servidores', desc: 'Configuracion, despliegue y administracion de servidores reales.' },
  { name: 'Cloud Computing', desc: 'Sube tus aplicaciones a la nube y entiende la infraestructura moderna.' },
  { name: 'Frontend (JS / React)', desc: 'Domina Javascript moderno y crea interfaces interactivas con React.' },
  { name: 'Backend con Node.js', desc: 'Escribe logica del lado del servidor, APIs y manejo de datos.' },
  { name: 'Arquitectura de Software', desc: 'Aprende a disenar sistemas escalables y buenas practicas.' },
];

const Planes = () => {
  useDocumentTitle("David Ramirez - Planes");

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
            Invierte en tu Futuro <br />
            <span className="text-gradient-green">de forma practica.</span>
          </h1>
          <p className="hero-desc" data-aos="fade-up" data-aos-delay="200">
            Un unico programa presencial intensivo donde aprendes haciendo desde el primer dia.
          </p>
        </div>
      </section>
      {/* End Hero Section */}

      {/* Planes Section */}
      <section className="planes-section-wrapper">
        <div className="container">
          
          <div className="pricing-container" data-aos="fade-up" data-aos-delay="100">
            <div className="pricing-card-main">
              
              <div className="card-header-plan">
                <span className="popular-tag">CURSO PRESENCIAL INCLUSIVO</span>
                <h2>Todo el Programa</h2>
                <p className="plan-desc">Acompanamiento en vivo, laboratorios praticos y acceso a la comunidad.</p>
                
                <div className="price-container">
                  <span className="currency">$</span>
                  <span className="price">1.000.000</span>
                  <span className="period">COP</span>
                </div>
                
                <a 
                  href="https://wa.me/573232805247" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary-green w-full text-center block mt-6"
                >
                  Inscribirme Ahora
                </a>
              </div>

              <div className="card-features-plan">
                <h3>Que vas a aprender?</h3>
                <div className="features-grid">
                  {tecnologias.map((tech, index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="feature-text">
                        <h4>{tech.name}</h4>
                        <p>{tech.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      {/* End Planes Section */}

      <FloatingWhatsApp
        zIndex="1"
        phone='+573232805247'
        popupMessage="Hola, quiero informacion sobre el curso"
        accountName="DAVID"
      />

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Planes;
