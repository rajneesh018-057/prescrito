import React from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = React.useState(false);
  const [token, setToken] = React.useState(true); // Assume logged in

  const handleLogout = () => {
    // localStorage.removeItem('token'); // if using token
    setToken(false);
    navigate('/');
  };

  return (
    <nav className="w-full bg-amber-200 shadow-md py-4">
      <div className="w-full flex items-center justify-between px-12">
        
        {/* Logo & Branding */}
        <div className="flex items-center gap-x-4">
          <img src={assets.logo} alt="Logo" className="w-50 h-14" />
          
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-x-12 text-lg font-medium text-gray-700">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 underline' : 'hover:text-blue-500'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctors" className={({ isActive }) => isActive ? 'text-blue-600 underline' : 'hover:text-blue-500'}>
              All Doctors
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-600 underline' : 'hover:text-blue-500'}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-600 underline' : 'hover:text-blue-500'}>
              About
            </NavLink>
          </li>
        </ul>

        {/* Auth Section */}
        <div className="relative">
          {!token ? (
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg text-base hover:bg-blue-700 transition-all shadow-sm"
              onClick={() => navigate('/login')}
            >
              Create Account
            </button>
          ) : (
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
              <img
                src={assets.profile_pic}
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-white shadow"
              />
              <img
                src={assets.dropdown_icon}
                alt="Dropdown"
                className="w-5 h-5"
              />
            </div>
          )}

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg w-48 text-gray-800 z-50">
              <ul className="py-2">
                <li
                  onClick={() => navigate('/profile')}
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
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                >
                  🚪 Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
