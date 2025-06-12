import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { doctorsData } from '../assets/assets';

const Doctors = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const selectedSpeciality = queryParams.get('speciality');

  const specialities = ['All', ...new Set(doctorsData.map(doc => doc.speciality))];

  const filteredDoctors =
    selectedSpeciality && selectedSpeciality !== 'All'
      ? doctorsData.filter(doc => doc.speciality === selectedSpeciality)
      : doctorsData;

  const handleFilterChange = (e) => {
    const value = e.target.value;
    navigate(value === 'All' ? '/doctors' : `/doctors?speciality=${value}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 drop-shadow-md">Meet Our Specialists</h2>
        <blockquote className="italic text-gray-600 text-lg max-w-xl mx-auto">
          “The best doctor gives the least medicine.”
          <br />
          <span className="text-sm block mt-1 text-gray-400">– Benjamin Franklin</span>
        </blockquote>
      </div>

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="sticky top-20 bg-white shadow-xl rounded-xl p-6 border border-blue-100">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">🩺 Speciality Filter</h3>
            <select
              value={selectedSpeciality || 'All'}
              onChange={handleFilterChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            >
              {specialities.map((spec, index) => (
                <option key={index} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out border border-blue-100"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 mx-auto object-cover rounded-full border-4 border-blue-200 shadow-md"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">{doctor.name}</h3>
              <p className="text-blue-600 text-sm font-medium mt-1">{doctor.speciality}</p>
              <div className="mt-2">
                <span className="inline-block text-green-600 text-xs font-semibold bg-green-100 px-2 py-1 rounded-full">
                  ✅ Available
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* No Doctors Message */}
      {filteredDoctors.length === 0 && (
        <p className="text-center text-red-600 mt-12 text-lg font-semibold bg-red-100 py-3 px-6 rounded-md inline-block">
          No doctors found for “{selectedSpeciality}”
        </p>
      )}
    </div>
  );
};

export default Doctors;
