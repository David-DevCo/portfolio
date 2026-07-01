import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar] = useState(true);

  const changeBackground = () => {
    // if (window.scrollY >= 71) {
    //   setNavbar(true);
    // } else {
    //   setNavbar(false);
    // }
  };


  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* Header */}
      <header className={navbar ? "main-header fixed-header" : "main-header"}>
        <nav className="container">
          <div className=" header-transparent">
            {/* Brand */}
            <NavLink to="/">
            {/* <img
                className="navbar-brand"
                src="img/logo/estudio91.png"
                alt="brand logo"
              /> */}
              <h1 className="navbar-brand">@CodeJar</h1>
              
            </NavLink>
            {/* / */}
            {/* Mobile Toggle */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleClick}
            >
              <div className={click ? "hamburger active" : "hamburger"}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            {/* / */}
            {/* Top Menu */}
            <div
              className={
                click
                  ? "mobile-menu navbar-collapse justify-content-end active"
                  : "mobile-menu navbar-collapse justify-content-end"
              }
            >
              <Link to="/" className="sidebar-logo">
                <img src="img/logo/logo-light.svg" alt="brand" />
              </Link>
              <Scrollspy
                className="anchor_nav navbar-nav ml-auto"
                items={["home", "about", "services", "work", "blog", "contact"]}
                currentClassName="current"
                offset={-71}
              >
                <li>
                  <a className="nav-link" href="#about" onClick={handleClick}>
                    <span>i am</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#work" onClick={handleClick}>
                    <span>Experiences</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="#services"
                    onClick={handleClick}
                  >
                    <span>Knowledges</span>
                  </a>
                </li>
                {/* <li>
                  <a className="nav-link"
                    href="/cursos">
                    <span>CURSOS</span>
                  </a>
                </li> */}
                <li>
                  <a className="nav-link"
                    href="https://www.linkedin.com/in/david-murillo-7bab9067/"
                    target="_blank" 
                    rel="noreferrer"
                    >
                    <span>linkedin</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="https://github.com/David-DevCo" onClick={handleClick}>
                    <span>Github</span>
                  </a>
                </li>
              </Scrollspy>
              <button
                className=" sidebar-bottom-closer"
                type="button"
                onClick={handleClick}
              >
                Close Sidebar
              </button>
            </div>
            {/* / */}
          </div>
          {/* Container */}
        </nav>
        {/* Navbar */}
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
