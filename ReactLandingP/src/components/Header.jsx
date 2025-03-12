import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <header className="header-container">
      <nav className="nav-bar">
        {/* Left Logo */}
        <div className="text-logo">
          <Link to="/">@HAFIZAU</Link>
        </div>

        {/* Right Menu with Hover + Toggle */}
        <div
          className="menu-toggle"
          onClick={toggleMenu}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          
          {/* Arrow appears on hover or when menu is open */}
          {(isHovering || isOpen) && (
            <span className={`arrow ${isOpen ? "rotate" : ""}`}>←</span>
          )}
          <span className="menu-label">MENU</span>

          {/* Dropdown Menu */}
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
      </nav>
    </header>
  );
}

export default Header;
