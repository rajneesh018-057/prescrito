import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AdminContext } from '../context/Admincontext';
import { assets } from '../assets/assets.js';

const AdminSidebar = () => {
  const { atoken } = useContext(AdminContext);

  // Style classes for NavLink
  const navLinkClass = ({ isActive }) =>
    `flex items-center space-x-3 px-4 py-2 rounded-md transition-all ${
      isActive
        ? 'bg-blue-100 text-blue-600 font-semibold shadow-sm'
        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
    }`;

  return (
    <div className="w-60 h-screen border-r border-gray-200 bg-white shadow-md p-4">
      {atoken && (
        <ul className="space-y-2">
          <li>
            <NavLink to="/admin-dashboard" className={navLinkClass}>
              <img src={assets.home_icon} alt="Dashboard" className="w-5 h-5" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctors-list" className={navLinkClass}>
              <img src={assets.people_icon} alt="Doctors" className="w-5 h-5" />
              <span>Doctors</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-appointments" className={navLinkClass}>
              <img src={assets.appointment_icon} alt="Appointments" className="w-5 h-5" />
              <span>Appointments</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-doctor" className={navLinkClass}>
              <img src={assets.add_icon} alt="Add Doctor" className="w-5 h-5" />
              <span>Add Doctor</span>
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default AdminSidebar;
