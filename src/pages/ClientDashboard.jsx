// pages/EmployeeDashboard.jsx
import React, { useState, useEffect } from "react";

const mockJobs = [
  {
    id: 1,
    client: "John Doe",
    address: "1234 Oak St, Houston, TX",
    date: "2025-04-22",
    time: "10:00 AM",
    service: "Residential Cleaning",
    status: "Assigned",
    notes: "Gate code is 4432",
  },
  {
    id: 2,
    client: "Emily Smith",
    address: "5678 Pine St, Galveston, TX",
    date: "2025-04-23",
    time: "2:00 PM",
    service: "Airbnb Turnover",
    status: "Assigned",
    notes: "Key in lockbox, code 5567",
  },
];

const EmployeeDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Replace with API call later
    setJobs(mockJobs);
  }, []);

  const markComplete = (id) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, status: "Completed" } : job
      )
    );
  };

  const rescheduleJob = (id) => {
    alert("Reschedule function coming soon for job ID: " + id);
  };

  const cancelJob = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8 animate-pulse">Employee Dashboard</h1>
      <div className="grid gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-yellow-400 transition-transform hover:scale-105 hover:shadow-yellow-500/50"
          >
            <p><strong>Client:</strong> {job.client}</p>
            <p><strong>Address:</strong> {job.address}</p>
            <p><strong>Date:</strong> {job.date}</p>
            <p><strong>Time:</strong> {job.time}</p>
            <p><strong>Service:</strong> {job.service}</p>
            <p><strong>Notes:</strong> {job.notes}</p>
            <p><strong>Status:</strong> <span className={job.status === 'Completed' ? 'text-green-400' : 'text-yellow-300'}>{job.status}</span></p>
            {job.status !== "Completed" && (
              <div className="mt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => markComplete(job.id)}
                  className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-500 transition-all"
                >
                  Mark as Completed
                </button>
                <button
                  onClick={() => rescheduleJob(job.id)}
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all"
                >
                  Reschedule
                </button>
                <button
                  onClick={() => cancelJob(job.id)}
                  className="px-4 py-2 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
