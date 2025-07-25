import React, { useContext } from 'react';
import { assets } from '../assets/assets.js';
import { AdminContext } from '../context/Admincontext';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const { atoken, setAToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    localStorage.removeItem('atoken');
    setAToken('');
  };

  return (
    <div className="w-full flex justify-between items-center border-b border-gray-200 px-2 pt-2 pb-2">
      {/* Left: Logo and Admin */}
      <div className="flex items-center space-x-3">
        <img
          src={assets.admin_logo}
          alt="Admin Logo"
          className="w-40 h-16 object-contain"
        />
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
          {atoken ? 'Admin' : 'Doctor'}
        </span>
      </div>

      {/* Right: Logout */}
      <button
        onClick={logout}
        className="bg-blue-600 text-white px-4 py-2 rounded-4xl font-medium hover:bg-blue-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
