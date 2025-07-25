import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../context/Admincontext';
import { toast } from 'react-toastify';

const Login = () => {
  const [role, setRole] = useState('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { backendUrl, setAToken, setIsAuthenticated } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const url =
        role === 'admin'
          ? `${backendUrl}/api/admin/login`
          : `${backendUrl}/api/doctor/login`;

      const { data } = await axios.post(url, { email, password });

      console.log("Login API response:", data);

      if (data.success || data.message) {
        setAToken(data.token);
        setIsAuthenticated(true); // ✅ Mark user as authenticated
        localStorage.setItem('atoken', data.token);
        toast.success("Login successful!");

        // You can also redirect if needed
        // navigate(role === 'admin' ? '/admin/dashboard' : '/doctor/dashboard');
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setRole('admin')}
            className={`px-4 py-2 rounded-l-md font-medium transition ${
              role === 'admin' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Admin
          </button>
          <button
            onClick={() => setRole('doctor')}
            className={`px-4 py-2 rounded-r-md font-medium transition ${
              role === 'doctor' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Doctor
          </button>
        </div>

        <h2 className="text-center text-2xl font-semibold mb-6 text-gray-800">
          {role === 'admin' ? 'Admin Login' : 'Doctor Login'}
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Login as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
