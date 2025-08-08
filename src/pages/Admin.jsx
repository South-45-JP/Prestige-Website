// src/pages/Admin.jsx
import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(storedBookings);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-12">
      <h1 className="text-4xl font-bold text-yellow-500 mb-8">Admin Panel - Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking, idx) => (
            <div
              key={idx}
              className="border border-yellow-500 rounded-xl p-6 bg-gray-100 shadow space-y-2"
            >
              <h2 className="text-xl font-semibold">{booking.name}</h2>
              <p>📍 <strong>Address:</strong> {booking.address}</p>
              <p>📅 <strong>Date:</strong> {booking.date} - <strong>Time:</strong> {booking.time}</p>
              <p>🧹 <strong>Service:</strong> {booking.service}</p>
              <p>📆 <strong>Frequency:</strong> {booking.frequency}</p>
<p>
  <strong>Status:</strong>{' '}
  {booking.completed ? (
    <span className="text-green-500 font-bold">Completed</span>
  ) : (
    <span className="text-yellow-500">Not Completed</span>
  )}
</p>


              <button className="mt-2 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition">
                Mark as Completed
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
