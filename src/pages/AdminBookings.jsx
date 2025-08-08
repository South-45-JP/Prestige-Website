import React, { useState } from 'react';

const dummyBookings = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '555-123-4567',
    address: '789 Elm St, Houston, TX',
    service: 'Residential Cleaning',
    date: '2025-04-27',
    time: '11:00 AM',
    frequency: 'One-Time',
    status: 'Pending'
  },
  {
    id: 2,
    name: 'David Smith',
    email: 'david@example.com',
    phone: '555-987-6543',
    address: '321 Maple Ave, Pasadena, TX',
    service: 'Move-In / Move-Out Cleaning',
    date: '2025-04-29',
    time: '1:00 PM',
    frequency: 'One-Time',
    status: 'Pending'
  }
];

const AdminBookings = () => {
  const [bookings, setBookings] = useState(dummyBookings);

  const updateStatus = (id, newStatus) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    );
    setBookings(updatedBookings);
  };

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-3xl font-bold text-yellow-600 mb-6 text-center">Admin Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-center">No bookings yet.</p>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="p-6 rounded-xl shadow border bg-gray-100 border-yellow-500 space-y-2"
            >
              <h3 className="text-xl font-bold">Booking #{booking.id}</h3>
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><strong>Phone:</strong> {booking.phone}</p>
              <p><strong>Address:</strong> {booking.address}</p>
              <p><strong>Service:</strong> {booking.service}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Frequency:</strong> {booking.frequency}</p>
              <p><strong>Status:</strong> {booking.status}</p>

              <div className="space-x-2 mt-4">
                <button
                  onClick={() => updateStatus(booking.id, 'In Progress')}
                  className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500"
                >
                  Mark In Progress
                </button>
                <button
                  onClick={() => updateStatus(booking.id, 'Completed')}
                  className="bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-green-600"
                >
                  Mark Completed
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminBookings;
