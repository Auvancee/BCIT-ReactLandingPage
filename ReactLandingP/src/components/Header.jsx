import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./images/HAFIZAU PNG LOGO INVERTED.png"; // Import your SVG as image

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Desktop dropdown menu
  const [isHovering, setIsHovering] = useState(false); // Desktop hover arrow
  const [isOverlayOpen, setIsOverlayOpen] = useState(false); // Mobile overlay menu

  const toggleMenu = () => setIsOpen((prev) => !prev); // Desktop dropdown
  const toggleMenu2 = () => setIsOverlayOpen((prev) => !prev); // Mobile overlay

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

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
                <li><Link to="#About" onClick={toggleMenu}>ABOUT</Link></li>
                <li><Link to="#Featured" onClick={toggleMenu}>FEATURED</Link></li>
                <li><Link to="/synopsis" onClick={toggleMenu}>SYNOPSIS</Link></li>
                <li><Link to="/works" onClick={toggleMenu}>PROJECTS</Link></li>
                <li><Link to="#Contact" onClick={toggleMenu}>CONTACT</Link></li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Logo (Hamburger) */}
        <div className="logo-mobile mobile-only" onClick={toggleMenu2}>
          <img src={logo} alt="HAFIZAU Logo" className="main-logo" />
        </div>
      </nav>

      {/* Mobile Overlay Fullscreen */}
      <div className={`mobile-overlay ${isOverlayOpen ? "open" : ""}`}>
        <div className="overlay-content">
          <ul>
            <li><Link to="#Services" onClick={toggleMenu2}>SERVICES</Link></li>
            <li><Link to="/works" onClick={toggleMenu2}>PROJECTS</Link></li>
            <li><Link to="/synopsis" onClick={toggleMenu2}>SYNOPSIS</Link></li>
            <li><Link to="#Ovations" onClick={toggleMenu2}>OVATIONS</Link></li>
            <li><Link to="#Contact" onClick={toggleMenu2}>CONTACT</Link></li>
          </ul>
          <div className="contact-info">
            <p>EMAIL</p>
            <p>thanks@you.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
