import React, { useContext ,useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { AppContext } from '../context/AppContext.jsx';
import { toast } from 'react-toastify'; // ✅ Import toast
import { assets } from '../assets/assets'; // ✅ Make sure assets contains logo, profile_pic, dropdown_icon

const Navbar = () => {
  const navigate = useNavigate();
const {backendUrl, token, setToken}= useContext(AppContext); // ✅ Ensure AppContext value is [backendUrl, token, setToken]
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
  
  };

  return (
    <nav className="w-full bg-amber-200 shadow-md relative z-50">
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={assets.logo} alt="Logo" className="w-12 h-12" />
          <span className="text-xl font-bold text-gray-800">Prescrito</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-x-10 text-lg font-medium text-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'hover:text-blue-500'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'hover:text-blue-500'
              }
            >
              All Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'hover:text-blue-500'
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'hover:text-blue-500'
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Profile + Hamburger */}
        <div className="flex items-center gap-3">
          {/* Profile Dropdown */}
          {token && (
            <div className="relative">
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                <img
                  src={assets.profile_pic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border"
                />
                <img
                  src={assets.dropdown_icon}
                  alt="Dropdown"
                  className="w-4 h-4"
                />
              </div>

              {showDropdown && (
                <div className="absolute right-0 mt-3 bg-white rounded-lg shadow-md w-48 text-gray-800 z-50">
                  <ul className="py-2">
                    <li
                      onClick={() => navigate('/myprofile')}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      👤 My Profile
                    </li>
                    <li
                      onClick={() => navigate('/appointments')}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      📅 My Appointments
                    </li>
                    <li
                      onClick={handleLogout}
                      className="px-4 py-2 hover:bg-gray-100 text-red-600 cursor-pointer"
                    >
                      🚪 Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Login Button */}
          {!token && (
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          )}

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="md:hidden"
          >
            <svg
              className="w-7 h-7 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <ul className="md:hidden absolute right-4 top-[85px] bg-white border rounded-xl shadow-md text-gray-700 w-48 text-base font-medium py-2 z-40">
          <li>
            <NavLink
              to="/"
              onClick={() => setShowMenu(false)}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctors"
              onClick={() => setShowMenu(false)}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              All Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setShowMenu(false)}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setShowMenu(false)}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              About
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
