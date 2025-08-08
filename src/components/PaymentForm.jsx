// src/components/PaymentForm.jsx
import React, { useState } from 'react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiration: '',
    cvv: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-black text-white rounded-xl shadow-md border border-yellow-500 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">Payment Form</h2>
      {submitted ? (
        <div className="text-green-400 font-semibold text-center">
          Payment processed successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-yellow-600 focus:outline-none focus:border-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              maxLength="16"
              className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-yellow-600 focus:outline-none focus:border-yellow-500"
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1">Expiration</label>
              <input
                type="text"
                name="expiration"
                value={formData.expiration}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-yellow-600 focus:outline-none focus:border-yellow-500"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                maxLength="4"
                className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-yellow-600 focus:outline-none focus:border-yellow-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Pay Now
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentForm;
