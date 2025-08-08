// src/pages/ClientProfile.jsx
import React, { useState } from 'react';

const ClientProfile = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Pasadena, TX',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', formData);
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">Your Profile</h2>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-200 border border-yellow-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-200 border border-yellow-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-200 border border-yellow-500"
        />
        <input
          type="text"
          name="address"
          placeholder="Service Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-200 border border-yellow-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Change Password (optional)"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-200 border border-yellow-500"
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black py-3 rounded font-bold hover:bg-yellow-400 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ClientProfile;
