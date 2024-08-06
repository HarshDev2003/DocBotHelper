'use client'
// components/LoginComponent.js
import { useState } from 'react';
import React from 'react';
const Page = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await fetch('backend\middlewares\auth.js', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }

    //   const data = await response.json();
    //   console.log('Success:', data);
    // } catch (error) {
    //   console.error('Error:', error);
    // }
    console.log(formData)
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
 

      <div className={`transition-opacity duration-300 `}>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-500 uppercase">Account Login</h1>
        </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full">
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Login</button>
      </form>
    </div>
    </div>

      
    
    
  );
};

export default Page;
