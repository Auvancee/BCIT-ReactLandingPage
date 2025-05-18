import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderOne.css";
import logo from "/OtherImages/HAFIZAU PNG LOGO INVERTED.png"; // Import your SVG as image

{/* White Icons */}
import linkedInWhtieIcon from "/whiteicons/LinkedInWhite.svg"; // Import your SVG as image
import youTubeWhiteIcon from "/whiteicons/YouTubeWhite.svg"; // Import your SVG as image
import codepenWhiteIcon from "/whiteicons/CodepenWhite.png"; // Import your SVG as image
import githubWhiteIcon from "/whiteicons/GitHubWhite.svg"; // Import your SVG as image
import behanceWhiteIcon from "/whiteicons/BehanceWhite.png"; // Import your SVG as image

function HeaderOne() {
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
      <nav className="nav-bar">
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
                <li><Link to="#About" onClick={() => { toggleMenu(); scrollToSection("About"); }}>ABOUT</Link></li>
                <li><Link to="#Featured" onClick={() => { toggleMenu(); scrollToSection("Featured"); }}>FEATURED</Link></li>
                <li><Link to="#Misson" onClick={() => { toggleMenu(); scrollToSection("Mission"); }}>MISSIONS</Link></li>
                <li><Link to="/synopsis" onClick={toggleMenu}>SYNOPSIS</Link></li>
                <li><Link to="/works" onClick={toggleMenu}>PROJECTS</Link></li>
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
            <li><Link to="#About" onClick={() => { toggleMenu(); scrollToSection("About"); }}>ABOUT</Link></li>
            <li><Link to="#Featured" onClick={() => { toggleMenu(); scrollToSection("Featured"); }}>FEATURED</Link></li>
            <li><Link to="#Misson" onClick={() => { toggleMenu(); scrollToSection("Mission"); }}>MISSON</Link></li>
            <li><Link to="/synopsis" onClick={toggleMenu2}>SYNOPSIS</Link></li>
            <li><Link to="/works" onClick={toggleMenu2}>PROJECTS</Link></li>
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
                <img className="SocialIcon" src={youTubeWhiteIcon} alt="YouTube" />
              </a>
              <a href="https://codepen.io/Auvancee">
                <img className="SocialIcon" src={codepenWhiteIcon} alt="Codepen" />
              </a>
              <a href="https://github.com/Auvancee">
                <img className="SocialIcon" src={githubWhiteIcon} alt="Github" />
              </a>
              <a href="https://www.behance.net/auvance">
                <img className="SocialIcon" src={behanceWhiteIcon} alt="Behance" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default HeaderOne;
