import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (

    <div className="min-h-screen font-serif">
      {/* Hero Section - full viewport */}
  <section className="relative flex flex-col items-center justify-center px-4 text-center" style={{ minHeight: 'calc(100vh - var(--nav-height))' }}>
        {/* Large centered logo */}
        <img
          src="/images/logo.png"
          alt="Prestige Shine Logo"
          className="hero-logo mx-auto mb-6"
          style={{ width: '420px', maxWidth: '85vw' }}
          draggable="false"
        />

        {/* Tagline */}
        <p className="hero-tagline mt-2 mb-16 text-gold text-lg md:text-2xl">THE LUXURY CLEAN YOU DESERVE</p>

        {/* Three small feature cards centered */}
        <div className="feature-cards flex gap-6 justify-center items-stretch mb-20">
          <div className="card w-56 p-4 bg-white text-black rounded shadow-md">
            <h4 className="font-semibold mb-2">Sparkling Results</h4>
            <p className="text-sm">We leave every space glowing with attention to detail and pristine finish.</p>
          </div>
          <div className="card w-56 p-4 bg-white text-black rounded shadow-md">
            <h4 className="font-semibold mb-2">Gold-Standard Service</h4>
            <p className="text-sm">Our team is trained, vetted, and delivers nothing short of royalty-level care.</p>
          </div>
          <div className="card w-56 p-4 bg-white text-black rounded shadow-md">
            <h4 className="font-semibold mb-2">Always On Time</h4>
            <p className="text-sm">Professional, reliable, and respectful of your time every visit.</p>
          </div>
        </div>

        {/* Bottom yellow buttons */}
        <div className="flex gap-6 justify-center mb-8">
          <button onClick={() => navigate('/about')} className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold shadow hover:bg-yellow-500 transition">About Us</button>
          <button onClick={() => navigate('/contact')} className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold shadow hover:bg-yellow-500 transition">Contact Us</button>
        </div>
      </section>

        <div className="py-16 px-6 text-center overflow-visible">
          <h2 className="text-3xl font-bold text-gold mb-8">Our Work Speaks for Itself</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="overflow-visible rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc695c?auto=format&fit=crop&w=800&q=80"
                alt="Person cleaning a residential kitchen."
                className="w-full aspect-video object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="overflow-visible rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc695c?auto=format&fit=crop&w=800&q=80"
                alt="Person cleaning a residential living room."
                className="w-full aspect-video object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="overflow-visible rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Person cleaning a residential bathroom."
                className="w-full aspect-video object-cover hover:scale-105 transition duration-300"
              />
            </div>
          </div> {/* <-- Add this closing div for the grid above */}

  {/* Removed white strip at the bottom */}

        {/* ...existing code... (bottom buttons removed for clarity) */}
      </div>
    </div>
  );
};

export default Home;
