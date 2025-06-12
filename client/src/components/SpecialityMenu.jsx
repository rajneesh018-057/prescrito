import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const specialities = [
  { name: 'General Physician', icon: assets.general_physician },
  { name: 'Gynecologist', icon: assets.gynecologist },
  { name: 'Dermatologist', icon: assets.dermatologist },
  { name: 'Neurologist', icon: assets.neurologist },
  { name: 'Gastroenterologist', icon: assets.gastroenterologist },
];

const Specialities = () => {
  const navigate = useNavigate();

  const handleSpecialityClick = (speciality) => {
    navigate(`/doctors?speciality=${encodeURIComponent(speciality)}`);
  };

  return (
    <section className="bg-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8">
          Explore Our Specialities
        </h2>

        <div className="flex gap-8 flex-wrap justify-center items-center">
          {specialities.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSpecialityClick(item.name)}
              className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-14 h-14 object-contain mb-2"
              />
              <span className="text-sm font-medium text-gray-700 text-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
