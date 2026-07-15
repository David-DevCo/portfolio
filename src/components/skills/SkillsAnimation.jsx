import React from "react";

const educationData = [
  {
    year: "2018",
    title: "Tecnologo Formulacion de proyectos",
    institution: "SENA",
  },
  {
    year: "2015",
    title: "Tecnico en Programacion de Software",
    institution: "SENA | Bogota",
  },
];

const experienceData = [
  { year: "2024-2026", company: "Karrot", role: "Software Engineer" },
  { year: "2023", company: "Joonik / Adventis.com", role: "Full Stack Developer" },
  { year: "2023", company: "Teleperformance / Claro - Despegar", role: "Full Stack Developer" },
  { year: "2020-2022", company: "Insoftar / Ciencuadras.com", role: "Full Stack Developer" },
  { year: "2019-2020", company: "Nivelics / Seguros Bolivar", role: "Arquitecto de Infraestructura Jr" },
  { year: "2017-11/2018", company: "Interfire SAS", role: "Coordinador de Desarrollo" },
  { year: "2015-2021", company: "Creamos SAS", role: "Coordinador de Desarrollo" },
];

const skillsData = [
  { name: "JavaScript", level: 95 },
  { name: "AWS (Cloud)", level: 90 },
  { name: "Node.js & Express", level: 88 },
  { name: "React & Electron", level: 85 },
  { name: "PHP (Laravel)", level: 85 },
  { name: "Linux", level: 75 },
  { name: "Python", level: 60 },
];

function CircularSkill({ name, percentage }) {
  const radius = 35;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-skill-card">
      <div className="svg-container">
        <svg className="progress-ring" width="90" height="90">
          <circle
            className="progress-ring__background"
            stroke="rgba(16, 185, 129, 0.06)"
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx="45"
            cy="45"
          />
          <circle
            className="progress-ring__circle"
            stroke="#10b981"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx="45"
            cy="45"
          />
        </svg>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <h4 className="skill-name">{name}</h4>
    </div>
  );
}

const Skills = () => {
  return (
    <div className="portfolio-sections-container">
      {/* SECCIÓN 1: Educación y Experiencia lado a lado */}
      <section className="resume-split-section">
        <div
          className="education-column"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="section-title-wrapper">
            <h3 className="section-title-horizontal">EDUCACIÓN</h3>
          </div>
          <ul className="timeline-list">
            {educationData.map((edu, index) => (
              <li key={index} className="timeline-item">
                <span className="timeline-year">{edu.year}</span>
                <div className="timeline-content">
                  <h4>{edu.title}</h4>
                  <p>{edu.institution}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="experience-column"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="section-title-wrapper">
            <h3 className="section-title-horizontal">EXPERIENCIA</h3>
          </div>
          <ul className="timeline-list">
            {experienceData.map((exp, index) => (
              <li key={index} className="timeline-item">
                <span className="timeline-year">{exp.year}</span>
                <div className="timeline-content">
                  <h4>{exp.company}</h4>
                  <p>{exp.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECCIÓN 2: Conocimientos en formato horizontal */}
      <section
        className="skills-horizontal-section"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <div className="section-title-wrapper">
          <h3 className="section-title-horizontal">CONOCIMIENTOS</h3>
        </div>
        <div className="skills-horizontal-track">
          {skillsData.map((skill, index) => (
            <CircularSkill
              key={index}
              name={skill.name}
              percentage={skill.level}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
