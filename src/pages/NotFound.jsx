import React from 'react';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-6xl font-bold text-yellow-500 mb-4">404</h1>
    <p className="text-2xl text-gray-700 mb-8">Page Not Found</p>
    <a href="/" className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold shadow hover:bg-yellow-500 transition">Go Home</a>
  </div>
);

export default NotFound;
