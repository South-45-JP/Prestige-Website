// src/pages/AdminPanel.jsx
import React, { useState } from 'react';

const tabs = [
  'Job Schedule',
  'Entry Instructions',
  'Employee Assignment',
  'Payment Logs',
  'Add New Job',
  'Messaging System'
];

const sampleJobs = [
  {
    date: '2025-06-24',
    time: '10:00 AM',
    service: 'Deep Cleaning',
    client: 'Jessica Holmes',
    address: '101 Maple St',
    employee: 'Rachel'
  },
  {
    date: '2025-06-26',
    time: '2:00 PM',
    service: 'Move-Out Clean',
    client: 'David Tran',
    address: '45 Birch Ave',
    employee: 'Marco'
  },
  {
    date: '2025-07-01',
    time: '11:30 AM',
    service: 'Standard Clean',
    client: 'Emily Green',
    address: '77 Pine Rd',
    employee: 'Amber'
  }
];

const getBiWeeklyDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + i);
    dates.push(newDate.toISOString().split('T')[0]);
  }
  return dates;
};

const renderJobSchedule = () => {
  const dates = getBiWeeklyDates();
  const week1 = dates.slice(0, 7);
  const week2 = dates.slice(7, 14);

  const renderJobsForDate = (date) => {
    const jobs = sampleJobs.filter((job) => job.date === date);
    if (jobs.length === 0) return <div className="text-sm text-gray-400">No jobs</div>;
    return jobs.map((job, idx) => (
      <div key={idx} className="border rounded p-2 bg-white shadow-sm mb-2">
        <div><strong>Time:</strong> {job.time}</div>
        <div><strong>Service:</strong> {job.service}</div>
        <div><strong>Client:</strong> {job.client}</div>
        <div><strong>Address:</strong> {job.address}</div>
        <div><strong>Employee:</strong> {job.employee}</div>
      </div>
    ));
  };

  const renderWeek = (days, label) => (
    <div className="w-1/2 px-2">
      <h4 className="text-lg font-semibold mb-3">{label}</h4>
      {days.map((date, idx) => (
        <div key={idx} className="mb-4">
          <h5 className="font-bold text-gray-700 mb-1">{new Date(date).toDateString()}</h5>
          {renderJobsForDate(date)}
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex gap-4">
      {renderWeek(dates.slice(0, 7), 'This Week')}
      {renderWeek(dates.slice(7, 14), 'Next Week')}
    </div>
  );
};

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('Job Schedule');

  const renderContent = () => {
    switch (activeTab) {
      case 'Job Schedule':
        return renderJobSchedule();
      case 'Entry Instructions':
        return <div>🔑 Entry Instructions for Jobs</div>;
      case 'Employee Assignment':
        return <div>👷 Assign Employees to Jobs</div>;
      case 'Payment Logs':
        return <div>💵 Client Payment Logs</div>;
      case 'Add New Job':
        return <div>📝 Form to Add New Jobs</div>;
      case 'Messaging System':
        return <div>💬 Messaging Interface</div>;
      default:
        return <div>Welcome, Admin!</div>;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full text-left px-3 py-2 rounded hover:bg-gray-700 transition ${
              activeTab === tab ? 'bg-gray-700' : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-6">
        <h3 className="text-xl font-semibold mb-4">{activeTab}</h3>
        <div className="border p-4 rounded shadow bg-gray-50">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
