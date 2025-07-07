import React, { useState } from 'react';
import { assets } from '../assets/assets';
import Footer from '../components/Footer'; // ⬅️ Make sure path is correct
import dayjs from 'dayjs';

const Appointments = () => {
  const [filter, setFilter] = useState('All');

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctorName: 'Dr. Olivia Bennett',
      specialty: 'Gynecologist',
      date: '2025-07-10',
      time: '11:00 AM',
      status: 'Upcoming',
      location: 'Room 203, Women Care Clinic',
      image: assets.doc2,
    },
    {
      id: 2,
      doctorName: 'Dr. Harry Clarke',
      specialty: 'Neurologist',
      date: '2025-06-28',
      time: '02:30 PM',
      status: 'Completed',
      location: 'Neuro Center, Building B',
      image: assets.doc3,
    },
    {
      id: 3,
      doctorName: 'Dr. Sophie Walker',
      specialty: 'Dermatologist',
      date: '2025-07-01',
      time: '10:00 AM',
      status: 'Cancelled',
      location: 'Skin Care Unit, 2nd Floor',
      image: assets.doc4,
    },
  ]);

  const cancelAppointment = (id) => {
    setAppointments((prev) =>
      prev.map((apt) =>
        apt.id === id ? { ...apt, status: 'Cancelled' } : apt
      )
    );
  };

  const filteredAppointments = appointments
    .filter((apt) => filter === 'All' || apt.status === filter)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="bg-blue-50 p-6 flex-grow">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          My Appointments
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {['All', 'Upcoming', 'Completed', 'Cancelled'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full border transition ${
                filter === type
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-100'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Appointment Cards */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {filteredAppointments.length === 0 ? (
            <p className="text-center text-gray-500">
              No {filter.toLowerCase()} appointments found.
            </p>
          ) : (
            filteredAppointments.map((apt) => (
              <div
                key={apt.id}
                className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-6"
              >
                <img
                  src={apt.image}
                  alt={apt.doctorName}
                  className="w-20 h-20 rounded-full object-cover border-2 border-blue-400"
                />

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {apt.doctorName}
                  </h3>
                  <p className="text-sm text-gray-600">{apt.specialty}</p>
                  <p className="mt-1 text-sm text-gray-600">
                    <span className="font-medium">Date:</span>{' '}
                    {dayjs(apt.date).format('DD MMM YYYY')} |{' '}
                    <span className="font-medium">Time:</span> {apt.time}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">Location:</span> {apt.location}
                  </p>
                  <p
                    className={`mt-2 text-sm font-semibold ${
                      apt.status === 'Cancelled'
                        ? 'text-red-500'
                        : apt.status === 'Completed'
                        ? 'text-gray-500'
                        : 'text-green-600'
                    }`}
                  >
                    {apt.status}
                  </p>
                </div>

                {apt.status === 'Upcoming' && (
                  <button
                    onClick={() => cancelAppointment(apt.id)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl"
                  >
                    Cancel
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Footer at Bottom */}
      <Footer />
    </div>
  );
};

export default Appointments;
