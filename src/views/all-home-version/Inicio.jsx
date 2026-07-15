import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderFourAnimation";
import About from "../../components/about/AboutDarkAnimation";
import Skills from "../../components/skills/SkillsAnimation";
import ExperienciasCarrusel from "../../components/portfolio/ExperienciasCarrusel";
import Footer from "../../components/footer/FooterAnimation";
import useDocumentTitle from "../../components/useDocumentTitle";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";

const HomeFour = () => {
  useDocumentTitle("David Ramirez - @CodeJar");
  return (
    <div className="home-dark">
      <Header />

      {/* Hero Section */}
      <Slider />

      {/* About Me */}
      <section id="about">
        <About />
      </section>

      {/* Education + Experience + Skills */}
      <section id="services">
        <Skills />
      </section>

      {/* Experiencias Carousel */}
      <ExperienciasCarrusel />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp
        zIndex="1"
        phone="+573232805247"
        popupMessage="Hola! Como puedo ayudarte?"
        accountName="David Ramirez"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeFour;
