import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
  <nav className={`navbar flex justify-between items-center bg-black/30 backdrop-blur-sm px-6 py-3 relative z-50 ${scrolled ? 'scrolled' : ''}`}>
      <div className="flex items-center gap-4">
        {/* Hamburger for mobile/menu */}
        <div className="relative">
          <button
            className="p-2 rounded-md border border-gold bg-black/60 text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-opacity-60"
            onClick={() => setHamburgerOpen((s) => !s)}
            aria-label="Open menu"
            aria-expanded={hamburgerOpen}
            aria-controls="nav-menu"
          >
            <span className="block w-5 h-0.5 bg-gold mb-1"></span>
            <span className="block w-5 h-0.5 bg-gold mb-1"></span>
            <span className="block w-5 h-0.5 bg-gold"></span>
          </button>
          {hamburgerOpen && (
            <div id="nav-menu" className="absolute left-0 mt-2 w-48 bg-black/90 rounded-md border border-gold shadow-lg p-2 flex flex-col z-50">
              <Link to="/services" className="px-3 py-2 text-gold hover:bg-gold hover:text-black rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">View Services</Link>
              <Link to="/about" className="px-3 py-2 text-gold hover:bg-gold hover:text-black rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">About Us</Link>
              <Link to="/contact" className="px-3 py-2 text-gold hover:bg-gold hover:text-black rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">Contact Us</Link>
              <Link to="/quote" className="px-3 py-2 text-gold hover:bg-gold hover:text-black rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">Get a Quote</Link>
              <Link to="/book" className="px-3 py-2 text-gold hover:bg-gold hover:text-black rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">Book a Clean</Link>
              <Link to="/pricing" className="px-3 py-2 text-gold hover:bg-gold hover:text-black rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">Pricing</Link>
            </div>
          )}
        </div>

        <Link to="/" className="navbar-logo flex items-center gap-3">
          <span className="text-gold text-xl font-semibold font-serif tracking-wider">Prestige Shine</span>
        </Link>
      </div>

      <div className="navbar-links flex gap-4 items-center">
        <Link to="/services" className="text-white hover:text-gold transition hidden md:inline">Services</Link>
        <Link to="/about" className="text-white hover:text-gold transition hidden md:inline">About</Link>
        <Link to="/contact" className="text-white hover:text-gold transition hidden md:inline">Contact</Link>
        <Link to="/quote" className="gold-button hidden md:inline">Get an Instant Quote</Link>
        <Link to="/book" className="gold-button hidden md:inline">Book Now</Link>
        <div className="login-dropdown relative" onMouseLeave={() => setDropdownOpen(false)}>
          <button className="gold-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
            Login ⌄
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/login-client">Client Login</Link>
              <Link to="/login-employee">Employee Login</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
