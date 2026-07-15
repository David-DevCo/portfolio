import React from "react";
import { VideoTag } from "react-video-tag";
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <section
      id="home"
      className="hero-video-section"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "img/banner/bg-2.jpg"})`,
      }}
    >
      <div className="video-background">
        <VideoTag
          autoPlay={`${true}`}
          muted={`${true}`}
          playsInline={`${true}`}
          loop={`${true}`}
          src={`${"videos/dynamo.mp4"}`}
          poster={`${"img/bg-2.jpg"}`}
        />
      </div>

      <div className="hero-video-content" data-aos="fade-up">
        <span className="badge-tech">
          <span className="dot-pulse"></span>
          Learning by Doing
        </span>
        
        <h1>
          I'm <span className="name-highlight">David</span>
        </h1>
        
        <h2>Construyo software. Enseño a crearlo.</h2>
        
        <p>
          Menos diapositivas, mas terminal. Cursos presenciales de <strong>Linux</strong>, <strong>Servidores</strong>, <strong>Cloud</strong> y desarrollo moderno.
        </p>

        <div className="hero-actions-video">
          <Link to="/cursos" className="btn-primary-green">Ver Temario</Link>
          <Link to="/planes" className="btn-secondary-green-transparent">Ver Planes</Link>
        </div>
      </div>
    </section>
  );
};

export default Slider;
