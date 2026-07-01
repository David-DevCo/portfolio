import React from "react";

// Clean, maintainable data structures
const educationData = [
  {
    year: "2018",
    title: "Tecnólogo Formulación de proyectos",
    institution: "SENA",
  },
  {
    year: "2015",
    title: "Técnico en Programación de Software",
    institution: "SENA | Bogotá",
  },
];

const experienceData = [
  { year: "2024-2026", company: "Karrot", role: "Software Engineer" },
  { year: "2023", company: "Joonik / Adventis.com", role: "Full Stack Developer" },
  { year: "2023", company: "Teleperformance / Claro - Despegar", role: "Full Stack Developer" },
  { year: "2020-2022", company: "Insoftar / Ciencuadras.com", role: "Full Stack Developer" },
  { year: "2019-2020", company: "Nivelics / Seguros Bolívar", role: "Arquitecto de Infraestructura Jr" },
  { year: "2017-11/2018", company: "Interfire SAS", role: "Coordinador de Desarrollo" },
  { year: "2015-2021", company: "Creamos SAS", role: "Coordinador de Desarrollo" },
];

const skillsData = [
  { name: "JAVASCRIPT", level: "95%" },
  { name: "AWS (CDK, Lambda, SQS)", level: "90%" },
  { name: "NODE.JS & EXPRESS", level: "88%" },
  { name: "PHP (Laravel / Symfony)", level: "85%" },
  { name: "React & Electron", level: "85%" },
  { name: "Vue.js & Angular", level: "80%" },
  { name: "DevOps (Terraform / Docker / CI/CD)", level: "75%" },
  { name: "LINUX", level: "75%" },
  { name: "PYTHON", level: "60%" },
];

const Skills = () => {
  return (
    <>
      <div className="row">
        {/* Column 1: Education */}
        <div
          className="col-lg-4 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="sm-title">
            <h4 className="font-alt">Education</h4>
          </div>

          <ul className="aducation-box theme-bg">
            {educationData.map((edu, index) => (
              <li key={index}>
                <span className="dark-bg">{edu.year}</span>
                <h6>{edu.title}</h6>
                <p>{edu.institution}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Experience */}
        <div
          className="col-lg-4 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="sm-title">
            <h4 className="font-alt">Experience</h4>
          </div>
          <ul className="aducation-box dark-bg">
            {experienceData.map((exp, index) => (
              <li key={index}>
                <span className="theme-bg">{exp.year}</span>
                <h6>{exp.company}</h6>
                <p>{exp.role}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Skills */}
        <div
          className="col-lg-4 ml-auto my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="sm-title">
            <h4 className="font-alt">My Skills</h4>
          </div>
          <div className="gray-bg skill-box">
            {skillsData.map((skill, index) => (
              <div className="skill-lt" key={index}>
                <h6>{skill.name}</h6>
                <div className="skill-bar">
                  <div 
                    className="skill-bar-in theme-bg" 
                    style={{ width: skill.level }}
                  >
                    <span>{skill.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;