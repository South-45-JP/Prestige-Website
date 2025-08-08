import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
  <div className="navbar-logo-top">
    <Link to="/">
      <img src="/images/logo.png" alt="Prestige Shine Logo" className="navbar-logo-img" />
    </Link>
  </div>
      <ul className="navbar-links navbar-links-horizontal">
        <li><Link to="/services" className="navbar-link">Services</Link></li>
        <li><Link to="/about" className="navbar-link">About</Link></li>
        <li><Link to="/contact" className="navbar-link">Contact</Link></li>
        <li><Link to="/quote" className="gold-button">Get an Instant Quote</Link></li>
        <li><Link to="/book" className="gold-button">Book Now</Link></li>
        <li className="login-dropdown" onMouseLeave={() => setDropdownOpen(false)}>
          <button className="gold-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
            Login ⌄
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/login-client">Client Login</Link>
              <Link to="/login-employee">Employee Login</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
