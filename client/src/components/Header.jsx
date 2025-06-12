import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
            Book Appointments<br />
            With Your Favorite Doctors
          </h1>

          {/* Group Profiles */}
          <div className="flex items-center gap-4">
            <img
              src={assets.group_profiles}
              alt="group_profiles"
              className="w-14 h-14 rounded-full border-2 border-white shadow"
            />
            <p className="text-sm text-blue-100">
              Trusted by hundreds of patients for quality medical services.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg text-base font-medium shadow-md transition"
          >
            Book Appointment
            <img src={assets.arrow_icon} alt="arrow" className="w-5 h-5" />
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={assets.header_img}
            alt="Doctor Illustration"
            className="w-full max-h-[380px] object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
