// src/pages/ClientHistory.jsx


const ClientHistory = () => {
  const bookingHistory = [
    {
      id: 1,
      date: '2025-03-15',
      service: 'Residential Cleaning',
      address: '123 Main St, Pasadena, TX',
      status: 'Completed',
      payment: 'Paid',
    },
    {
      id: 2,
      date: '2025-04-05',
      service: 'Move-In / Move-Out',
      address: '456 Oak Ave, Dickinson, TX',
      status: 'Completed',
      payment: 'Unpaid',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">Your Booking History</h2>

      {bookingHistory.length === 0 ? (
        <p>No past bookings yet.</p>
      ) : (
        <table className="w-full table-auto border-collapse border border-yellow-400">
          <thead>
            <tr className="bg-yellow-400 text-black">
              <th className="border border-yellow-500 p-3">Date</th>
              <th className="border border-yellow-500 p-3">Service</th>
              <th className="border border-yellow-500 p-3">Address</th>
              <th className="border border-yellow-500 p-3">Status</th>
              <th className="border border-yellow-500 p-3">Payment</th>
              <th className="border border-yellow-500 p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookingHistory.map((booking) => (
              <tr key={booking.id}>
                <td className="border border-yellow-300 p-3">{booking.date}</td>
                <td className="border border-yellow-300 p-3">{booking.service}</td>
                <td className="border border-yellow-300 p-3">{booking.address}</td>
                <td className="border border-yellow-300 p-3">{booking.status}</td>
                <td className="border border-yellow-300 p-3">{booking.payment}</td>
                <td className="border border-yellow-300 p-3">
                  {booking.payment === 'Unpaid' ? (
                    <button className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400">Pay Now</button>
                  ) : (
                    <button className="bg-green-500 text-white px-3 py-1 rounded">Receipt</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClientHistory;
