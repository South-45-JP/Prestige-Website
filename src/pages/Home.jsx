import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen font-serif relative overflow-visible bg-black">
      {/* Luxury Login Button */}
      <button
        onClick={() => navigate('/admin')}
        className="absolute top-8 right-12 bg-gold text-black font-bold px-6 py-2 rounded-full shadow-lg border-2 border-gold hover:bg-black hover:text-gold hover:border-gold transition-all duration-300 text-lg z-20"
        style={{ letterSpacing: '0.05em' }}
      >
        Login
      </button>

      {/* Luxury Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/images/luxury-bg.png"
          alt="Luxury gold background"
          className="w-full h-full object-cover object-center select-none pointer-events-none"
          draggable="false"
        />
        {/* Optional: dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Action Buttons removed as requested */}
      {/* Hero Content */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] pt-32 pb-16 px-4 text-center relative z-10">
        <h1 className="text-gold text-6xl md:text-8xl font-bold tracking-widest uppercase drop-shadow-lg font-serif mb-2" style={{ textShadow: 'rgb(255, 200, 100) 0px 1px 8px' }}>
          PRESTIGE SHINE CLEANING
        </h1>
        {/* Gold Accent Line */}
        <div className="h-1 w-32 bg-gradient-to-r from-gold via-yellow-300 to-gold rounded-full mb-6 mt-2 shadow-gold/50 shadow-lg"></div>
        <h2 className="text-gold text-2xl md:text-4xl font-semibold tracking-widest uppercase font-serif mb-6" style={{ textShadow: 'rgb(255, 200, 100) 0px 1px 8px' }}>

          THE LUXURY CLEAN YOU DESERVE
        </h2>


      </section>

      <div className="relative py-16 px-6 text-center overflow-visible">
        {/* Luxury gold/black background image */}
        <img
          src="/images/luxury-bg.png"
          alt="Luxury gold background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-100 select-none pointer-events-none"
          draggable="false"
        />
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10">
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
          </div>
        </div>
      </div>

      <div className="px-6 py-16 bg-gray-100 text-black">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Prestige Shine?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold mb-2">✨ Sparkling Results</h3>
            <p>We leave every space glowing with attention to detail and pristine finish.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold mb-2">👑 Gold-Standard Service</h3>
            <p>Our team is trained, vetted, and delivers nothing short of royalty-level care.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold mb-2">🕐 Always On Time</h3>
            <p>Professional, reliable, and respectful of your time every visit.</p>
          </div>
        </div>
      </div>

      <div className="py-12 px-6 bg-black text-center space-x-4">
        <button
          onClick={() => navigate('/services')}
          className="bg-yellow-400 text-black px-5 py-3 rounded font-semibold shadow hover:bg-yellow-500 transition inline-block"
        >
          View Services
        </button>
        <button
          onClick={() => navigate('/about')}
          className="bg-yellow-400 text-black px-5 py-3 rounded font-semibold shadow hover:bg-yellow-500 transition inline-block"
        >
          About Us
        </button>
        <button
          onClick={() => navigate('/contact')}
          className="bg-yellow-400 text-black px-5 py-3 rounded font-semibold shadow hover:bg-yellow-500 transition inline-block"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Home;
