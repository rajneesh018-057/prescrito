import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Rajneesh Kumar',
    email: 'rajneesh@example.com',
    phone: '+91 9876543210',
    address: 'Shastrinagar, Chhibramau, Kannauj',
    dob: '15 March 2002',
    joined: 'July 2024',
    photo: assets.profile_pic,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...userData });

  // 📷 Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // temporary URL
      setFormData((prev) => ({ ...prev, photo: imageUrl }));
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    setUserData(formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 sm:p-10 text-center">
        {/* Profile Image */}
        <div className="relative inline-block mb-6">
          <img
            src={formData.photo}
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-blue-500 object-cover mx-auto shadow-lg"
          />

          {isEditing && (
            <div className="mt-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          )}
        </div>

        {/* Name & Email */}
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-2 px-4 py-3 text-lg font-medium border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-3 text-lg font-medium border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-gray-800 mb-1">{userData.name}</h2>
            <p className="text-gray-500 mb-6">{userData.email}</p>
          </>
        )}

        {/* Profile Fields */}
        <div className="text-left space-y-4 text-gray-700">
          {[
            ['Phone', 'phone'],
            ['Address', 'address'],
            ['Date of Birth', 'dob'],
            ['Member Since', 'joined'],
          ].map(([label, key]) =>
            isEditing && key !== 'joined' ? (
              <div key={key}>
                <label className="font-semibold block mb-1">{label}</label>
                <input
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ) : (
              <div key={key}>
                <span className="font-semibold">{label}:</span>{' '}
                {userData[key]}
              </div>
            )
          )}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
