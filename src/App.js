import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Quote from './pages/Quote';
import ClientLogin from './pages/ClientLogin';
import EmployeeLogin from './pages/EmployeeLogin';

function App() {
  return (
    <Router>
  {/* Global background moved to CSS (src/index.css) */}
  {/* Top logo, always visible. Add top spacing so it's not hidden by the fixed navbar */}
      <div style={{ position: 'relative', zIndex: 10001, width: '100%', textAlign: 'center', paddingTop: '68px', paddingBottom: '8px' }}>
        <img
          src="/images/logo.png"
          alt="Prestige Shine Logo"
          style={{ width: '180px', maxWidth: '90vw', margin: '0 auto', boxShadow: '0 4px 24px #0008', borderRadius: '16px' }}
          draggable="false"
        />
      </div>
      <Navbar />
  <div style={{ position: 'relative', zIndex: 2, paddingTop: '12px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/login-client" element={<ClientLogin />} />
          <Route path="/login-employee" element={<EmployeeLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
