import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submission:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-3xl font-bold text-yellow-600 text-center mb-6">Contact Us</h1>

      {submitted ? (
        <div className="text-green-500 text-center text-xl font-semibold">
          Thank you for your message! We'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-100 border border-yellow-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-100 border border-yellow-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-100 border border-yellow-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-100 border border-yellow-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-100 border border-yellow-500 h-32"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
