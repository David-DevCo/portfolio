import React, { useState, useEffect, useRef } from 'react';

const experiencias = [
  { 
    title: 'Software Engineer', 
    company: 'Karrot', 
    img: '1',
    link: 'https://www.adventiscg.com/adventis-newsletter',
    description: 'Desarrollo de plataformas de delivery y logistica.'
  },
  { 
    title: 'Full Stack Developer', 
    company: 'Adventis', 
    img: '2',
    link: 'https://www.adventiscg.com/adventis-newsletter',
    description: 'Sistemas de gestion empresarial y newsletters.'
  },
  { 
    title: 'Full Stack Developer', 
    company: 'DANE', 
    img: '3',
    link: 'http://gdpdane.iyata.net/login',
    description: 'Sistema de gestion de datos nacionales.'
  },
  { 
    title: 'Senior Developer', 
    company: 'Doctor Aki', 
    img: '4',
    link: 'https://www.doctoraki.com/',
    description: 'Plataforma de salud digital.'
  },
  { 
    title: 'Lead Team', 
    company: 'Cien Cuadras', 
    img: '5',
    link: 'https://www.ciencuadras.com/',
    description: 'Plataforma de bienraices inmuebles.'
  },
  { 
    title: 'Infraestructura AWS', 
    company: 'Refinancia', 
    img: '6',
    link: 'https://sucursalvirtual.refinancia.co/',
    description: 'Arquitectura cloud y despliegue de servicios.'
  },
  { 
    title: 'Senior Developer', 
    company: 'Ipm-X', 
    img: '7',
    link: 'https://ipm-x.com/',
    description: 'Liderazgo tecnico y desarrollo de producto.'
  },
  { 
    title: 'Full Stack Developer', 
    company: 'Comfy', 
    img: '8',
    link: 'https://comfy.com.co',
    description: 'Plataforma de comercio electronico.'
  },
  { 
    title: 'Senior Developer', 
    company: 'SmartQuick', 
    img: '9',
    link: 'https://enterprise.smartquick.com.co/login',
    description: 'Sistema empresarial de gestion y logistica.'
  },
];

export default function ExperienciasCarrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  const tarjetasVisibles = 3;
  const maxIndex = experiencias.length - tarjetasVisibles;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(nextSlide, 4000);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  return (
    <div className="experiences-carousel-section">
      <div className="container">
        
        <div className="carousel-header">
          <span className="badge-tech">Portafolio</span>
          <h2>Proyectos y Experiencia</h2>
          <p>Una muestra de las plataformas reales que he disenado y desplegado en produccion.</p>
        </div>

        <div 
          className="carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button className="carousel-arrow left" onClick={prevSlide}>
            &#10094;
          </button>

          <div className="carousel-window">
            <div 
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / tarjetasVisibles)}%)`
              }}
            >
              {experiencias.map((exp, index) => (
                <div 
                  className="carousel-card-wrapper" 
                  style={{ width: `${100 / tarjetasVisibles}%` }}
                  key={index}
                >
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="experience-card"
                  >
                    <div className="card-image-box">
                      <img 
                        src={`/img/portafolio/${exp.img}.jpg`} 
                        alt={exp.company}
                        className="portfolio-img"
                      />
                      <span className="tech-badge-overlay">{exp.company}</span>
                    </div>
                    <div className="card-info">
                      <h3>{exp.title}</h3>
                      <p>{exp.description}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>

        <div className="carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
