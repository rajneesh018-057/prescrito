import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { AppContext } from '../context/AppContext';

const DoctorDetails = () => {
  const { id } = useParams();
  const { getDoctorById } = useContext(AppContext);
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      setLoading(true);
      const fetchedDoctor = await getDoctorById(id);
      setDoctor(fetchedDoctor);
      setLoading(false);
    };

    fetchDoctor();
  }, [id]);

  const getNext7Days = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = dayjs().add(i, 'day');
      days.push({
        day: date.format('ddd'),
        fullDate: date.format('YYYY-MM-DD'),
        label: date.format('ddd, MMM D'),
      });
    }
    return days;
  };

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM',
    '06:00 PM', '07:00 PM',
  ];

  const handleBookAppointment = () => {
    alert(`Appointment booked with Dr. ${doctor.name} on ${selectedDate} at ${selectedTime}`);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  if (loading) return <div className="text-center py-10 text-lg">Loading doctor...</div>;

  if (!doctor) return <div className="text-center py-20 text-xl text-red-600">Doctor not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md mt-8 rounded-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={doctor.profilePic}
          alt={doctor.name}
          className="w-60 h-60 object-cover rounded-lg shadow"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{doctor.name}</h2>
          <p className="text-gray-700 mb-1"><strong>Specialization:</strong> {doctor.specialization}</p>
          <p className="text-gray-700 mb-1"><strong>Degree:</strong> {doctor.degree}</p>
          <p className="text-gray-700 mb-1"><strong>Experience:</strong> {doctor.experience} years</p>
          <p className="text-gray-700 mb-1"><strong>Fee:</strong> ₹{doctor.feesPerConsultation}</p>
          <p className="text-gray-700 mb-1">
            <strong>Availability:</strong> {doctor.available ? 'Available' : 'Not Available'}
          </p>
          <p className="text-gray-700 mb-4"><strong>About:</strong> {doctor.about}</p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-3">Select a Date</h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {getNext7Days().map((dateObj) => (
            <button
              key={dateObj.fullDate}
              onClick={() => {
                setSelectedDate(dateObj.fullDate);
                setSelectedTime(null);
              }}
              className={`min-w-[100px] px-3 py-2 rounded-md border
                ${selectedDate === dateObj.fullDate
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700'}
              `}
            >
              <div className="font-medium">{dateObj.day}</div>
              <div className="text-sm">{dateObj.label}</div>
            </button>
          ))}
        </div>

        {selectedDate && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Available Time Slots</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTime(slot)}
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

        {selectedDate && selectedTime && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleBookAppointment}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Confirm Appointment - ₹{doctor.feesPerConsultation}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDetails;
