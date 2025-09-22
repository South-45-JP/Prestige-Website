import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom styles for luxury effect

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <nav className="navbar flex items-center justify-between px-4 py-2 bg-black/80 backdrop-blur-lg fixed w-full z-50">
      {/* Hamburger - left */}
      <button
        className="hamburger mr-4"
        aria-label="Open menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="block w-6 h-0.5 bg-yellow-400 mb-1"></span>
        <span className="block w-6 h-0.5 bg-yellow-400 mb-1"></span>
        <span className="block w-6 h-0.5 bg-yellow-400"></span>
      </button>
      {/* Logo - center */}
      <Link to="/" className="flex-grow flex justify-center">
        <img src="/images/logo.png" alt="Prestige Shine Logo" className="h-12 drop-shadow" />
      </Link>
      {/* Login Dropdown - right */}
      <div className="relative ml-4">
        <button
          className="gold-button"
          onClick={() => setLoginOpen(!loginOpen)}
        >
          Login
        </button>
        {loginOpen && (
          <div className="dropdown absolute right-0 mt-2 w-52 bg-black/95 rounded shadow-lg border border-yellow-400 z-50">
            <Link to="/client/login" className="block px-4 py-2 text-yellow-400 hover:bg-yellow-400 hover:text-black">Client Login</Link>
            <Link to="/employee/login" className="block px-4 py-2 text-yellow-400 hover:bg-yellow-400 hover:text-black">Employee Login</Link>
            <Link to="/admin/login" className="block px-4 py-2 text-yellow-400 hover:bg-yellow-400 hover:text-black">Admin Login</Link>
          </div>
        )}
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu fixed top-16 left-0 w-72 bg-black/95 rounded-r-lg shadow-lg p-6 border-r-2 border-yellow-400 z-40">
          <Link to="/" className="block text-yellow-400 mb-4 font-bold">Home</Link>
          <Link to="/services" className="block text-yellow-400 mb-4 font-bold">Services</Link>
          <Link to="/booking" className="block text-yellow-400 mb-4 font-bold">Book Now</Link>
          <Link to="/quote" className="block text-yellow-400 mb-4 font-bold">Get Quote</Link>
          <Link to="/contact" className="block text-yellow-400 mb-4 font-bold">Contact</Link>
          <Link to="/blog" className="block text-yellow-400 mb-4 font-bold">Blog</Link>
          <Link to="/emergency" className="block text-yellow-400 mb-4 font-bold">Emergency Clean</Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
