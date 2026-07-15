import React from "react";
import { Link } from "react-router-dom";

const cursosData = [
  {
    id: 1,
    title: "BACK-END",
    description: "Node.js, Express, APIs REST y bases de datos",
    image: "img/cursos/1.jpg",
    link: "/back-end",
    technologies: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 2,
    title: "FRONT-END",
    description: "JavaScript, React, HTML5 y CSS3 moderno",
    image: "img/cursos/2.jpg",
    link: "/front-end",
    technologies: ["JavaScript", "React", "CSS3"],
  },
  {
    id: 3,
    title: "BASES DE DATOS",
    description: "SQL, MySQL, PostgreSQL y MongoDB",
    image: "img/cursos/3.jpg",
    link: "/bases-de-datos",
    technologies: ["SQL", "MySQL", "PostgreSQL"],
  },
  {
    id: 4,
    title: "APPS MOVILES",
    description: "React Native y desarrollo movil multiplataforma",
    image: "img/cursos/4.jpg",
    link: "/apps",
    technologies: ["React Native", "Expo", "Firebase"],
  },
  {
    id: 5,
    title: "ARQUITECTURA DE SOFTWARE",
    description: "Patrones de diseno, microservicios y escalabilidad",
    image: "img/cursos/5.jpg",
    link: "/arquitectura-de-software",
    technologies: ["Docker", "AWS", "Microservicios"],
  },
  {
    id: 6,
    title: "PROYECTO WEB",
    description: "Como crear un proyecto web completo de cero",
    image: "img/cursos/6.jpg",
    link: "/como-crear-proyecto-web",
    technologies: ["Full Stack", "Deploy", "CI/CD"],
  },
];

const Portfolio = () => {
  return (
    <div className="cursos-grid">
      {cursosData.map((curso, index) => (
        <Link
          to={curso.link}
          className="curso-card"
          key={curso.id}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay={index * 100}
        >
          <div className="curso-image-wrapper">
            <img src={curso.image} alt={curso.title} className="curso-image" />
            <div className="curso-image-overlay"></div>
          </div>
          <div className="curso-content">
            <h3 className="curso-title">{curso.title}</h3>
            <p className="curso-description">{curso.description}</p>
            <div className="curso-technologies">
              {curso.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="curso-cta">
              <span>Ver curso</span>
              <i className="fa fa-arrow-right"></i>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Portfolio;
