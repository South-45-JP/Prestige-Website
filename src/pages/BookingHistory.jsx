// src/pages/BookingHistory.jsx
import React, { useState, useEffect } from 'react';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Dummy Data → Replace with real data later from backend/database
    const dummyBookings = [
      {
        id: 1,
        service: "Residential Cleaning",
        date: "2025-05-01",
        time: "10:00 AM",
        status: "Completed",
        address: "123 Main St, Houston, TX"
      },
      {
        id: 2,
        service: "Airbnb Turnover",
        date: "2025-05-05",
        time: "1:00 PM",
        status: "Scheduled",
        address: "456 Ocean Ave, Galveston, TX"
      }
    ];

    setBookings(dummyBookings);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h2 className="text-4xl font-bold text-yellow-500 mb-12 text-center">Your Booking History</h2>

      <div className="space-y-6 max-w-3xl mx-auto">

        {bookings.length === 0 ? (
          <p className="text-center text-gray-500">You have no bookings yet.</p>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id} className="border border-yellow-400 rounded-xl p-6 bg-gray-100 shadow">
              <h3 className="text-xl font-bold mb-2">{booking.service}</h3>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Status:</strong> {booking.status}</p>
              <p><strong>Address:</strong> {booking.address}</p>
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default BookingHistory;
