import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeePanel = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("employeeLoggedIn");
    if (!loggedIn) {
      navigate("/employee-login");
    }

    const assignedJobs = JSON.parse(localStorage.getItem("employeeJobs")) || [];
    setJobs(assignedJobs);
  }, [navigate]);

  const markComplete = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].status = "Completed";
    setJobs(updatedJobs);
    localStorage.setItem("employeeJobs", JSON.stringify(updatedJobs));
  };

  const handleLogout = () => {
    localStorage.removeItem("employeeLoggedIn");
    navigate("/employee-login");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-yellow-400">Employee Panel</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 transition"
        >
          Logout
        </button>
      </div>

      <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Assigned Jobs</h3>

      {jobs.length === 0 ? (
        <p className="text-gray-400">No jobs assigned yet.</p>
      ) : (
        <div className="space-y-4">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-gray-800 p-4 rounded-lg border border-yellow-500">
              <p><strong>Client:</strong> {job.clientName}</p>
              <p><strong>Service:</strong> {job.service}</p>
              <p><strong>Address:</strong> {job.address}</p>
              <p><strong>Date:</strong> {job.date}</p>
              <p><strong>Time:</strong> {job.time}</p>
              <p><strong>Status:</strong> {job.status}</p>

              {job.status !== "Completed" && (
                <button
                  onClick={() => markComplete(idx)}
                  className="mt-2 bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400 transition"
                >
                  Mark as Completed
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeePanel;
