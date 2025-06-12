import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { doctorsData } from '../assets/assets';
import dayjs from 'dayjs';

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = doctorsData.find(doc => doc.id === parseInt(id));

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const getNext7Days = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = dayjs().add(i, 'day');
      days.push({
        day: date.format('ddd'),
        fullDate: date.format('YYYY-MM-DD'),
        label: date.format('ddd, MMM D')
      });
    }
    return days;
  };

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM',
    '06:00 PM', '07:00 PM'
  ];

  const handleTimeSlotSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = () => {
    // Here you would typically send the appointment data to your backend
    alert(`Appointment booked with Dr. ${doctor.name} on ${selectedDate} at ${selectedTime}`);
    // Reset selections
    setSelectedDate(null);
    setSelectedTime(null);
  };

  if (!doctor) {
    return <div className="text-center py-20 text-xl text-red-600">Doctor not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md mt-8 rounded-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={doctor.image} alt={doctor.name} className="w-60 h-60 object-cover rounded-lg shadow" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{doctor.name}</h2>
          <p className="text-gray-700 mb-1"><strong>Speciality:</strong> {doctor.speciality}</p>
          <p className="text-gray-700 mb-1"><strong>Education:</strong> {doctor.education}</p>
          <p className="text-gray-700 mb-1"><strong>Address:</strong> {doctor.address}</p>
          <p className="text-gray-700 mb-1"><strong>Contact:</strong> {doctor.contact}</p>
          <p className="text-gray-700 mb-1"><strong>About:</strong> {doctor.about}</p>
          <p className="text-gray-700 mb-1"><strong>Appointment Fee:</strong> {doctor.appointmentFee}</p>
          <p className="text-yellow-500 mt-2"><strong>Rating:</strong> ⭐ {doctor.rating}</p>
        </div>
      </div>

      {/* Day & Time Slot Selection */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-3">Select a Date</h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {getNext7Days().map((dateObj) => (
            <button
              key={dateObj.fullDate}
              onClick={() => {
                setSelectedDate(dateObj.fullDate);
                setSelectedTime(null); // Reset time when date changes
              }}
              className={`min-w-[100px] px-3 py-2 rounded-md border
                ${selectedDate === dateObj.fullDate ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}
              `}
            >
              <div className="font-medium">{dateObj.day}</div>
              <div className="text-sm">{dateObj.label}</div>
            </button>
          ))}
        </div>

        {/* Show Time Slots */}
        {selectedDate && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Available Time Slots on {dayjs(selectedDate).format('MMM D, YYYY')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => handleTimeSlotSelect(slot)}
                  className={`py-2 px-3 rounded-md font-medium
                    ${selectedTime === slot 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-green-100 hover:bg-green-200 text-green-800'}
                  `}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Appointment Confirmation Button */}
        {selectedDate && selectedTime && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleBookAppointment}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Confirm Appointment - {doctor.appointmentFee}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDetails;