import React, { useState } from 'react';

const Calculate = () => {
  const [formData, setFormData] = useState({ phone: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Phone:', formData.phone);
    console.log('Password:', formData.password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium">Phone Number</label>
            <input 
              type="text" 
              name="phone" 
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="+998901234567"
              value={formData.phone} 
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Password</label>
            <input 
              type="password" 
              name="password" 
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="********"
              value={formData.password} 
              onChange={handleChange}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition font-medium"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Calculate;