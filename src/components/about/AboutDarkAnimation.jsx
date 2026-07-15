import React, { useEffect, useState } from "react";
import { getDolarhoy } from "../../services/dolar";

const About = () => {
  const [serviceDolar, setServiceDolar] = useState();

  useEffect(() => {
    getDolarhoy().then((res) => {
      setServiceDolar(res);
    });
  }, []);

  return (
    <div className="about-dark-section">
      <div className="container">
        <div className="row align-items-center justify-content-center g-5">
          {/* Image Column */}
          <div
            className="col-lg-5"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div className="about-image-container">
              <div className="about-image-wrapper">
                <img
                  src="img/about/me_2026.jpeg"
                  alt="David Ramirez - Senior Developer"
                  className="about-image"
                />
                <div className="about-image-overlay"></div>
              </div>
              {/* Floating badge */}
              <div className="about-experience-badge">
                <span className="experience-number">10+</span>
                <span className="experience-text">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div
            className="col-lg-7"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="about-content">
              {/* Header */}
              <div className="about-header">
                <span className="about-badge">
                  <span className="badge-dot"></span>
                  About Me
                </span>
                <h1 className="about-title">
                  <span className="gradient-text">Senior Developer</span>
                  <br />
                  & Tech Educator
                </h1>
                <p className="about-subtitle">
                  <span className="color-theme">@CODEJAR</span> • Villavicencio, Colombia
                </p>
              </div>

              {/* Description */}
              <div className="about-description">
                <p className="about-quote">
                  "First, solve the problem. Then, write your code."
                </p>
                <p className="about-text">
                  Technology has the power to make everyone's lives better. 
                  I'm passionate about teaching the next generation of developers 
                  through hands-on, practical learning.
                </p>
              </div>

              {/* Info Grid */}
              <div className="about-info-grid">
                <div className="info-item">
                  <span className="info-label">Experience</span>
                  <span className="info-value">10+ Years</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Residence</span>
                  <span className="info-value">Colombia</span>
                </div>
                <div className="info-item">
                  <span className="info-label">City</span>
                  <span className="info-value">Villavicencio</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">cmurillo_23@hotmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone</span>
                  <span className="info-value">323 280 52 47</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Dolar Hoy</span>
                  <span className="info-value">{serviceDolar || "Loading..."}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="about-actions">
                <a
                  className="btn btn-primary-green"
                  target="_blank"
                  rel="noreferrer"
                  href="https://aply-models.s3.amazonaws.com/estudio91/CV.David_Ramirez.pdf"
                  download
                >
                  <i className="fa fa-download"></i>
                  Download CV
                </a>
                <a
                  className="btn btn-secondary-green"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/channel/UCz7eedmxjkdv-FL9H0mFr8Q"
                >
                  <i className="fa fa-youtube-play"></i>
                  YouTube Channel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
