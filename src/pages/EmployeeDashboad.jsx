// src/pages/EmployeeDashboard.jsx
import React, { useState } from 'react';

const EmployeeDashboard = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [jobs, setJobs] = useState([
    {
      id: 1,
      client: "John Doe",
      service: "Residential Cleaning",
      address: "1234 Main St, Houston, TX",
      date: "April 30, 2025",
      status: "Assigned"
    },
    {
      id: 2,
      client: "Sarah Smith",
      service: "Move-Out Cleaning",
      address: "5678 Oak Ave, Pasadena, TX",
      date: "May 3, 2025",
      status: "Assigned"
    }
  ]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  const markAsDone = (id) => {
    setJobs(jobs.map(job => 
      job.id === id ? { ...job, status: "Completed" } : job
    ));
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-3xl font-bold text-yellow-600 text-center mb-8">
        Employee Portal
      </h1>

      {!loggedIn ? (
        <form
          onSubmit={handleLogin}
          className="max-w-md mx-auto space-y-4 bg-gray-100 p-6 rounded-xl shadow"
        >
          <input
            type="email"
            placeholder="Employee Email"
            required
            className="w-full p-3 rounded border border-yellow-400"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 rounded border border-yellow-400"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded hover:bg-yellow-400 transition"
          >
            Login
          </button>
        </form>
      ) : (
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xl text-center text-green-600">
            ✅ Welcome Employee! Your assigned jobs:
          </p>

          <ul className="space-y-4">
            {jobs.map(job => (
              <li key={job.id} className="bg-gray-100 p-4 rounded shadow">
                <p><strong>Client:</strong> {job.client}</p>
                <p><strong>Service:</strong> {job.service}</p>
                <p><strong>Address:</strong> {job.address}</p>
                <p><strong>Date:</strong> {job.date}</p>
                <p><strong>Status:</strong> {job.status}</p>
                {job.status !== "Completed" && (
                  <button
                    onClick={() => markAsDone(job.id)}
                    className="mt-2 bg-yellow-500 text-black font-bold px-4 py-2 rounded hover:bg-yellow-400 transition"
                  >
                    Mark as Done
                  </button>
                )}
              </li>
            ))}
          </ul>

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white font-bold py-3 rounded hover:bg-red-400 transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeDashboard;
