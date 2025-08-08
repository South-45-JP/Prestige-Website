import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    if (email === 'admin@prestige.com' && password === 'prestigeadmin123') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      alert('Incorrect email or password.');
    }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <form onSubmit={handleLogin} className="space-y-4 bg-gray-900 p-8 rounded-xl border border-yellow-500">
        <input
          type="email"
          placeholder="Enter Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 border border-yellow-500"
        />
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 border border-yellow-500"
        />
        />
        <button className="w-full bg-yellow-500 text-black p-3 rounded font-semibold hover:bg-yellow-400 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
