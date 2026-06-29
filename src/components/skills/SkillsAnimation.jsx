
import React from "react";

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
            <li>
              <span className="dark-bg">2015</span>
              <h6>Técnico en Programación de Software</h6>
              <p>SENA | Bogotá</p>
              <li>
              <span className="dark-bg">2018</span>
              <h6>Tecnólogo Formulación de proyectos</h6>
              <p>SENA</p>
            </li>            </li>
          </ul>
          {/* End .aducation-box */}
        </div>
        {/* End .col */}

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
            <li>
              <span className="theme-bg">2024-2025</span>
              <h6>Karrot</h6>
              <p>Software Engineer</p>
            </li>

            <li>
              <span className="theme-bg">2023</span>
              <h6>Joonik / Adventis.com</h6>
              <p>Full Stack Developer</p>
            </li>

            <li>
              <span className="theme-bg">2023</span>
              <h6>Teleperformance / Claro - Despegar</h6>
              <p>Full Stack Developer</p>
            </li>

            <li>
              <span className="theme-bg">2020-2022</span>
              <h6>Insoftar / Ciencuadras.com</h6>
              <p>Full Stack Developer</p>
            </li>

 

            <li>
              <span className="theme-bg">2019-2020</span>
              <h6>Nivelics / Seguros Bolívar</h6>
              <p>Arquitecto de Infraestructura Jr</p>
            </li>

            <li>
              <span className="theme-bg">2017-11/2018</span>
              <h6>Interfire SAS</h6>
              <p>Coordinador de Desarrollo</p>
            </li>

            <li>
              <span className="theme-bg">2015-2021</span>
              <h6>Creamos SAS</h6>
              <p>Coordinador de Desarrollo</p>
            </li>
          </ul>
          {/* End .aducation-box */}
        </div>
        {/* End .col */}

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

            <div className="skill-lt">
              <h6>JAVASCRIPT</h6>
              <div className="skill-bar">
                <div className="skill-bar-in theme-bg" style={{ width: "95%" }}>
                  <span>95%</span>
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>AWS (CDK, Lambda, SQS)</h6>
              <div className="skill-bar">
                <div className="skill-bar-in theme-bg" style={{ width: "90%" }}>
                  <span>90%</span>
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>NODE.JS & EXPRESS</h6>
              <div className="skill-bar">
                <div className="skill-bar-in theme-bg" style={{ width: "88%" }}>
                  <span>88%</span>
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>PHP (Laravel / Symfony)</h6>
              <div className="skill-bar">
                <div className="skill-bar-in theme-bg" style={{ width: "85%" }}>
                  <span>85%</span>
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>React & Electron</h6>
              <div className="skill-bar">
                <div className="skill-bar-in theme-bg" style={{ width: "85%" }}>
                  <span>85%</span>
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Vue.js & Angular</h6>
              <div className="skill-bar">
                <div className="skill-bar-in theme-bg" style={{ width: "80%" }}>
                  <span>80%</span>
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>DevOps (Terraform / Docker / CI/CD)</h6>
              <div className="skill-bar">
                <div className="skill-bar-in theme-bg" style={{ width: "75%" }}>
                  <span>75%</span>
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>LINUX</h6>
              <div className="skill-bar">
                <div className="skill-bar-in theme-bg" style={{ width: "75%" }}>
                  <span>75%</span>
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>PYTHON</h6>
              <div className="skill-bar">
                <div className="skill-bar-in theme-bg" style={{ width: "60%" }}>
                  <span>60%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default Skills;