import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderThree.css";
import logotwo from "./images/HAFIZAU PNG LOGO.png"; // Import your SVG as image

{/* Black Icons */}
import linkedInBlackIcon from "../components/images/blackicons/LinkedInBlack.png"; // Import your SVG as image
import youTubeBlackIcon from "../components/images/blackicons/YouTubeBlack.png"; // Import your SVG as image
import codepenBlackIcon from "../components/images/blackicons/CodePenBlack.png"; // Import your SVG as image
import githubBlackIcon from "../components/images/blackicons/GitHubBlack.png"; // Import your SVG as image
import behanceBlackIcon from "../components/images/blackicons/BehanceBlack.png"; // Import your SVG as image


function HeaderThree() {
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
    <header className="header-container-three">
            <nav className="nav-bar-three">
              {/* Left Logo/Text for Desktop */}
              <div className="text-logo-three">
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
                  <span className={`arrow-three ${isOpen ? "rotate" : ""}`}>←</span>
                )}
                <span className="menu-label-three">MENU</span>
      
                {/* Dropdown for Desktop */}
                {isOpen && (
                  <div className="dropdown-menu-three">
                    <ul>
                      <li><Link to="/">HOME</Link></li>
                      <li><Link to="#Projects" onClick={() => { toggleMenu(); scrollToSection("Synopsis"); }}>SYNOPSIS</Link></li>
                      <li><Link to="#Archives" onClick={() => { toggleMenu(); scrollToSection("Skillset"); }}>SKILLSET</Link></li>
                      <li><Link to="/works" onClick={toggleMenu}>PROJECTS</Link></li>
                      <li><Link to="#Contact" onClick={() => { toggleMenu(); scrollToSection("Contact"); }}>CONTACT</Link></li>
                    </ul>
                  </div>
                )}
              </div>
      
              {/* Mobile Logo (Hamburger) */}
              <div className="logo-mobile mobile-only" onClick={toggleMenu2}>
                <img src={logotwo} alt="HAFIZAU Logo" className={isOverlayOpen ? "main-logo active" : "main-logo"} />
              </div>
      
            </nav>
      
            {/* Mobile Overlay Fullscreen */}
            <div className={`mobile-overlay-three ${isOverlayOpen ? "open" : ""}`}>
              <div className="overlay-content-three">
      
                <ul className="overlay-info-three">
                  <li><Link to="/">HOME</Link></li>
                  <li><Link to="#Projects" onClick={() => { toggleMenu(); scrollToSection("Projects"); }}>PROJECTS</Link></li>
                  <li><Link to="#Archives" onClick={() => { toggleMenu(); scrollToSection("Archives"); }}>ARCHIVES</Link></li>
                  <li><Link to="/synopsis" onClick={toggleMenu2}>SYNOPSIS</Link></li>
                  <li><Link to="#Contact" onClick={() => { toggleMenu(); scrollToSection("Contact"); }}>CONTACT</Link></li>
                </ul>
      
                <div className="contact-info-three">
                  <p className="emailtitlethree">EMAIL</p>
                  <p className="emailthree">aakifumar55@gmail.com</p>
                </div>
                
                <div className="Socials-Three">
      
                  <div className="socialTitleThree">
                      <p>SOCIALS</p>
                  </div>
      
                  <div className="socialIconsContainerThree">
                    <a href="https://www.linkedin.com/in/hafizau/">
                      <img className="SocialIcon" src={linkedInBlackIcon} alt="LinkedIn" />
                    </a>
                    <a href="https://www.youtube.com/@Auvance">
                      <img className="SocialIcon" src={youTubeBlackIcon} alt="LinkedIn" />
                    </a>
                    <a href="https://codepen.io/Auvancee">
                      <img className="SocialIcon" src={codepenBlackIcon} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/Auvancee">
                      <img className="SocialIcon" src={githubBlackIcon} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/Auvancee">
                      <img className="SocialIcon" src={behanceBlackIcon} alt="LinkedIn" />
                    </a>
                  </div>
                </div>
      
              </div>
            </div>
          </header>
  )
}

export default HeaderThree;