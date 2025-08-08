import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages (replace with real ones as you build)
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
      <Navbar />
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
    </Router>
  );
}

export default App;
