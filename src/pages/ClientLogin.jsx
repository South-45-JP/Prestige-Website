import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClientLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo credentials
    const demoEmail = "client@prestige.com";
    const demoPassword = "123clean";

    if (formData.email === demoEmail && formData.password === demoPassword) {
      localStorage.setItem("clientLoggedIn", "true");
      navigate("/client-dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Client Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-3 rounded bg-gray-800 border border-yellow-500"/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full p-3 rounded bg-gray-800 border border-yellow-500"/>
        <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-3 rounded hover:bg-yellow-400 transition">Login</button>
      </form>
    </div>
  );
};

export default ClientLogin;
