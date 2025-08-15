import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyProfile = () => {
  const { userData, setUserData } = useContext(AppContext);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    joined: '',
    photo: ''
  });

  useEffect(() => {
    if (userData) {
      setFormData(prev => ({
        ...prev,
        ...userData
      }));
    }
  }, [userData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
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

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-6 sm:p-8">
        
        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={formData.photo || '/default-avatar.png'}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover shadow-md"
          />
          {isEditing && (
            <div className="mt-3">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          )}
        </div>

        {/* Name & Email */}
        <div className="text-center mb-6">
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Email Address"
              />
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800">{formData.name}</h2>
              <p className="text-gray-500">{formData.email}</p>
            </>
          )}
        </div>

        {/* Profile Details */}
        <div className="space-y-4">
          {[
            ['Phone', 'phone'],
            ['Address', 'address'],
            ['Date of Birth', 'dob'],
            ['Member Since', 'joined']
          ].map(([label, key]) => (
            <div key={key} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span className="font-semibold text-gray-700">{label}</span>
              {isEditing && key !== 'joined' ? (
                <input
                  name={key}
                  value={formData[key] || ''}
                  onChange={handleChange}
                  className="w-full sm:w-2/3 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder={label}
                />
              ) : (
                <span className="text-gray-600 break-words sm:text-right w-full sm:w-2/3">
                  {formData[key]}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
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
