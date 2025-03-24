import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderTwo.css";
import logo from "./images/HAFIZAU PNG LOGO INVERTED.png"; // Import your SVG as image

{/* White Icons */}
import linkedInWhtieIcon from "../components/images/whiteicons/LinkedInWhite.svg"; // Import your SVG as image
import youTubeWhiteIcon from "../components/images/whiteicons/YouTubeWhite.svg"; // Import your SVG as image
import codepenWhiteIcon from "../components/images/whiteicons/CodepenWhite.png"; // Import your SVG as image
import githubWhiteIcon from "../components/images/whiteicons/GitHubWhite.svg"; // Import your SVG as image
import behanceWhiteIcon from "../components/images/whiteicons/BehanceWhite.png"; // Import your SVG as image

function HeaderTwo() {
  const [isOpen, setIsOpen] = useState(false); // Desktop dropdown menu
  const [isHovering, setIsHovering] = useState(false); // Desktop hover arrow
  const [isOverlayOpen, setIsOverlayOpen] = useState(false); // Mobile overlay menu

  const toggleMenu = () => setIsOpen((prev) => !prev); // Desktop dropdown
  const toggleMenu2 = () => setIsOverlayOpen((prev) => !prev); // Mobile overlay

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close desktop menu
      setIsOverlayOpen(false); // Close mobile menu
    }
  };



  return (
      <header className="header-container">
        <nav className="nav-bar ">
          {/* Left Logo/Text for Desktop */}
          <div className="text-logo">
            <Link to="/">@HAFIZAU</Link>
          </div>
  
          {/* Right Desktop MENU */}
          <div
            className="menu-toggle desktop-only"
            onClick={toggleMenu}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Arrow + MENU label */}
            {(isHovering || isOpen) && (
              <span className={`arrow ${isOpen ? "rotate" : ""}`}>←</span>
            )}
            <span className="menu-label">MENU</span>
  
            {/* Dropdown for Desktop */}
            {isOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li><Link to="/">HOME</Link></li>
                  <li><Link to="#Projects" onClick={() => { toggleMenu(); scrollToSection("Projects"); }}>PROJECTS</Link></li>
                  <li><Link to="#Archives" onClick={() => { toggleMenu(); scrollToSection("Archives"); }}>ARCHIVES</Link></li>
                  <li><Link to="/synopsis" onClick={toggleMenu}>SYNOPSIS</Link></li>
                  <li><Link to="#Contact" onClick={() => { toggleMenu(); scrollToSection("Contact"); }}>CONTACT</Link></li>
                </ul>
              </div>
            )}
          </div>
  
          {/* Mobile Logo (Hamburger) */}
          <div className="logo-mobile mobile-only" onClick={toggleMenu2}>
            <img src={logo} alt="HAFIZAU Logo" className={isOverlayOpen ? "main-logo active" : "main-logo"} />
          </div>
  
        </nav>
  
        {/* Mobile Overlay Fullscreen */}
        <div className={`mobile-overlay ${isOverlayOpen ? "open" : ""}`}>
          <div className="overlay-content">
  
            <ul className="overlay-info">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="#Projects" onClick={() => { toggleMenu(); scrollToSection("Projects"); }}>PROJECTS</Link></li>
              <li><Link to="#Archives" onClick={() => { toggleMenu(); scrollToSection("Archives"); }}>ARCHIVES</Link></li>
              <li><Link to="/synopsis" onClick={toggleMenu2}>SYNOPSIS</Link></li>
              <li><Link to="#Contact" onClick={() => { toggleMenu(); scrollToSection("Contact"); }}>CONTACT</Link></li>
            </ul>
  
            <div className="contact-info">
              <p className="emailtitle">EMAIL</p>
              <p className="email">aakifumar55@gmail.com</p>
            </div>
            
            <div className="Socials">
  
              <div className="socialTitle">
                  <p>SOCIALS</p>
              </div>
  
              <div className="socialIconsContainer">
                <a href="https://www.linkedin.com/in/hafizau/">
                  <img className="SocialIcon" src={linkedInWhtieIcon} alt="LinkedIn" />
                </a>
                <a href="https://www.youtube.com/@Auvance">
                  <img className="SocialIcon" src={youTubeWhiteIcon} alt="LinkedIn" />
                </a>
                <a href="https://codepen.io/Auvancee">
                  <img className="SocialIcon" src={codepenWhiteIcon} alt="LinkedIn" />
                </a>
                <a href="https://github.com/Auvancee">
                  <img className="SocialIcon" src={githubWhiteIcon} alt="LinkedIn" />
                </a>
                <a href="https://github.com/Auvancee">
                  <img className="SocialIcon" src={behanceWhiteIcon} alt="LinkedIn" />
                </a>
              </div>
            </div>
  
          </div>
        </div>
      </header>
    );
  }
  
  export default HeaderTwo;
  