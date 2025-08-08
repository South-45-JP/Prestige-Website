import React, { useState } from 'react';

const dummyJobs = [
  {
    id: 1,
    address: '123 Main St, Houston, TX',
    date: '2025-04-25',
    time: '10:00 AM',
    instructions: 'Enter through side gate. Key under mat.',
    completed: false
  },
  {
    id: 2,
    address: '456 Oak Dr, Pasadena, TX',
    date: '2025-04-26',
    time: '2:00 PM',
    instructions: 'Code for door is 4582.',
    completed: false
  }
];

const Employee = () => {
  const [jobs, setJobs] = useState(dummyJobs);

  const toggleComplete = (id) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, completed: !job.completed } : job
    );
    setJobs(updatedJobs);
  };

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-3xl font-bold text-yellow-600 mb-6 text-center">Employee Dashboard</h1>

      {jobs.length === 0 ? (
        <p className="text-center">No jobs assigned yet.</p>
      ) : (
        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className={`p-6 rounded-xl shadow border ${
                job.completed ? 'bg-green-100 border-green-500' : 'bg-gray-100 border-yellow-500'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">Job #{job.id}</h3>
              <p><strong>Address:</strong> {job.address}</p>
              <p><strong>Date:</strong> {job.date}</p>
              <p><strong>Time:</strong> {job.time}</p>
              <p><strong>Entry Instructions:</strong> {job.instructions}</p>

              <button
                onClick={() => toggleComplete(job.id)}
                className={`mt-4 px-4 py-2 rounded font-semibold ${
                  job.completed ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                }`}
              >
                {job.completed ? 'Mark as Not Done' : 'Mark as Done'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Employee;
