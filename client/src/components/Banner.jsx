import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <section className="bg-blue-700 relative overflow-visible py-12 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center relative z-10">

        {/* Left Side */}
        <div className="text-white space-y-6 z-10">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Book Appointment<br />
            With 100+ Trusted Doctors
          </h1>
          <p className="text-white/90 text-base md:text-lg">
            Connect with top specialists and get quality healthcare at your convenience.
          </p>
          <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
            Create Account
          </button>
        </div>

        {/* Right Side - Image Outside Banner */}
        <div className="relative md:static mt-10 md:mt-0">
          <img
            src={assets.appointment_img}
            alt="appointment"
            className="w-[350px] md:w-[400px] max-w-full object-contain md:absolute md:-right-16 md:-bottom-8 drop-shadow-xl"
          />
        </div>
      </div>

      {/* Optional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 via-blue-600 to-blue-500 opacity-30 z-0"></div>
    </section>
  );
};

export default Banner;
