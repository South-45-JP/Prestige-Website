// src/pages/Services.jsx
import { useState } from 'react';
import { Home, Repeat, Building2, Layers3, Sparkles } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Airbnb Cleaning',
    description: 'Turnover cleaning service for short-term rental properties with attention to detail.',
    image: 'https://source.unsplash.com/featured/?airbnb,cleaning',
    tags: ['Kitchen', 'Bathroom', 'Linens'],
    icon: () => <Home size={28} className="text-gold" />
  },
  {
    id: 2,
    title: 'Move In / Move Out Cleaning',
    description: 'Thorough cleaning for homes before moving in or after moving out.',
    image: 'https://source.unsplash.com/featured/?moveout,cleaning',
    tags: ['Floors', 'Windows', 'Baseboards'],
    icon: () => <Layers3 size={28} className="text-gold" />
  },
  {
    id: 3,
    title: 'Deep Cleaning',
    description: 'Comprehensive cleaning service targeting dirt and grime in hard-to-reach areas.',
    image: 'https://source.unsplash.com/featured/?deep,cleaning',
    tags: ['Appliances', 'Blinds', 'Behind Furniture'],
    icon: () => <Sparkles size={28} className="text-gold" />
  },
  {
    id: 4,
    title: 'Standard Cleaning',
    description: 'Regular surface-level cleaning to keep your space tidy and fresh.',
    image: 'https://source.unsplash.com/featured/?home,cleaning',
    tags: ['Dusting', 'Vacuuming', 'Trash Removal'],
    icon: () => <Home size={28} className="text-gold" />
  },
  {
    id: 5,
    title: 'Recurring Cleaning',
    description: 'Scheduled cleaning service weekly, bi-weekly, or monthly.',
    image: 'https://source.unsplash.com/featured/?recurring,cleaning',
    tags: ['Flexible Schedule', 'Same Cleaner'],
    icon: () => <Repeat size={28} className="text-gold" />
  },
  {
    id: 6,
    title: 'Office Cleaning',
    description: 'Professional cleaning for office spaces and work environments.',
    image: 'https://source.unsplash.com/featured/?office,cleaning',
    tags: ['Desks', 'Break Rooms', 'Restrooms'],
    icon: () => <Building2 size={28} className="text-gold" />
  }
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-gold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map(service => (
          <button
            key={service.id}
            onClick={() => openModal(service)}
            className="bg-gold text-black py-4 px-6 rounded-2xl font-semibold shadow-md hover:scale-105 transition flex items-center gap-2 justify-center"
          >
            {service.icon()}
            {service.title}
          </button>
        ))}
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white text-black rounded-2xl p-6 max-w-md w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              {selectedService.icon()} {selectedService.title}
            </h2>
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <p className="mb-4">{selectedService.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedService.tags.map((tag, idx) => (
                <span key={idx} className="bg-gold text-black px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={`/book?service=${encodeURIComponent(selectedService.title)}`}
              className="inline-block bg-gold text-black font-bold py-2 px-4 rounded-xl hover:bg-yellow-500 transition"
            >
              Schedule Now
            </a>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black text-lg font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
