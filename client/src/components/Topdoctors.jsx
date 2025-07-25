import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors, getAllDoctors, atoken } = useContext(AppContext);

  useEffect(() => {
    if (atoken && doctors.length === 0) {
      getAllDoctors(); // fetch only if not already loaded
    }
  }, [atoken]);

  const topEightDoctors = doctors.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Top Doctors</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {topEightDoctors.map((doctor) => (
          <div
            key={doctor._id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-4 text-center"
          >
            <img
              src={doctor.profilePic}
              alt={doctor.name}
              className="w-24 h-24 mx-auto object-cover rounded-full border-2 border-blue-500 shadow"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{doctor.name}</h3>
            <p className="text-blue-600 text-sm font-medium">{doctor.specialization}</p>
            <p className="text-green-600 text-xs font-semibold mt-1">
            {doctor.available ? '✅ Available' : '❌ Unavailable'}
            </p>
            <button
              onClick={() => navigate(`/doctor/${doctor._id}`)}
              className="mt-3 text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full transition"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>

      {/* See All Doctors Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => navigate('/doctors')}
          className="text-lg font-medium text-blue-600 hover:text-blue-800 hover:underline transition"
        >
          👨‍⚕️ See All Doctors →
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
