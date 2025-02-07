import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";
import logo from "../img/logo.png"; // Import your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Button */}
        <button className="logo-button" aria-label="Honda Home">
          <img src={logo} alt="Honda Logo" className="logo-img" />
          <span className="tagline"></span>
        </button>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        
          <NavItem title="Model Line" />
          <NavItem title="Investor Relations" />
          <NavItem title="About Us" hasDropdown />
          <NavItem title="Services" hasDropdown />
          <NavItem title="Discover" hasDropdown />
        </ul>
       

        {/* Mobile Menu Toggle */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

// Nav Item Component with Dropdown
const NavItem = ({ title, hasDropdown }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <li className="nav-item">
      <button
        className="nav-link"
        onClick={() => hasDropdown && setDropdownOpen(!dropdownOpen)}
      >
        {title} {hasDropdown && <span className="dropdown-arrow"></span>}
      </button>
      {hasDropdown && dropdownOpen && (
        <ul className="dropdown-menu">
          <li><a href="/">Option 1</a></li>
          <li><a href="/">Option 2</a></li>
        </ul>
      )}
    </li>
  );
};

export default Navbar;
