// src/pages/Booking.jsx
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const serviceTitle = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    frequency: 'one-time',
    service: serviceTitle
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing bookings from localStorage
    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');

    // Add the new booking
    const updatedBookings = [...existingBookings, formData];

    // Save back to localStorage
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">Book Your Cleaning</h2>
      {submitted ? (
        <div className="text-green-400 text-center text-xl font-semibold">
          Thank you! We’ve received your request.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required
            className="w-full p-3 rounded bg-gray-800 border border-yellow-500"/>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required
            className="w-full p-3 rounded bg-gray-800 border border-yellow-500"/>
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required
            className="w-full p-3 rounded bg-gray-800 border border-yellow-500"/>
          <input type="text" name="address" placeholder="Service Address" onChange={handleChange} required
            className="w-full p-3 rounded bg-gray-800 border border-yellow-500"/>
          <input type="date" name="date" onChange={handleChange} required
            className="w-full p-3 rounded bg-gray-800 border border-yellow-500"/>
          <input type="time" name="time" onChange={handleChange} required
            className="w-full p-3 rounded bg-gray-800 border border-yellow-500"/>
          <select name="frequency" onChange={handleChange} className="w-full p-3 rounded bg-gray-800 border border-yellow-500">
            <option value="one-time">One-Time Cleaning</option>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Biweekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <button type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded hover:bg-yellow-400 transition">
            Submit Booking Request
          </button>
        </form>
      )}
    </div>
  );
};

export default Booking;
