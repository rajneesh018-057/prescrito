import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const specializationOptions = [
  'General Physician',
  'Gynecologist',
  'Dermatologist',
  'Neurologist',
  'Gastroenterologist',
];

const timingOptions = [
  '9 AM - 12 PM',
  '12 PM - 3 PM',
  '3 PM - 6 PM',
  '6 PM - 9 PM',
];

const feeOptions = ['500', '1000', '2000', '3000', '4000'];

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    degree: '',
    experience: '',
    feesPerConsultation: '',
    timings: '',
    email: '',
    password: '',
    address: '',
    about: '',
    profilePic: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePic') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (let key in formData) {
        data.append(key, formData[key]);
      }

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/add-doctor`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('atoken')}`,
          },
        }
      );

      // Fixed: Check res.data.success instead of data.success
      if (res.data.success) {
        console.log("Toast Triggered");
        toast.success('Doctor added successfully!');
        setFormData({
          name: '',
          specialization: '',
          degree: '',
          experience: '',
          feesPerConsultation: '',
          timings: '',
          email: '',
          password: '',
          address: '',
          about: '',
          profilePic: '',
        });
      } else {
        toast.error(res.data.message || 'Failed to add doctor');
      }
    } catch (error) {
      console.error('Error adding doctor:', error);
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-4 p-4 shadow-lg border rounded-md bg-white">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">➕ Add New Doctor</h2>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
          {formData.profilePic ? (
            <img
              src={URL.createObjectURL(formData.profilePic)}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
              No Image
            </div>
          )}
        </div>
        <label className="relative cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
          Upload Photo
          <input
            type="file"
            name="profilePic"
            accept="image/*"
            onChange={handleChange}
            className="absolute inset-0 opacity-0"
          />
        </label>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Input name="name" value={formData.name} onChange={handleChange} label="Full Name" />
        <SelectInput name="specialization" value={formData.specialization} onChange={handleChange} label="Specialization" options={specializationOptions} />
        <Input name="degree" value={formData.degree} onChange={handleChange} label="Degree" />
        <Input name="experience" value={formData.experience} onChange={handleChange} label="Experience (yrs)" type="number" />
        <SelectInput name="feesPerConsultation" value={formData.feesPerConsultation} onChange={handleChange} label="Consultation Fee" options={feeOptions.map(fee => `₹${fee}`)} />
        <SelectInput name="timings" value={formData.timings} onChange={handleChange} label="Timings" options={timingOptions} />
        <Input name="email" value={formData.email} onChange={handleChange} label="Email" type="email" />
        <Input name="password" value={formData.password} onChange={handleChange} label="Password" type="password" />
        <Input name="address" value={formData.address} onChange={handleChange} label="Address" />

        <div className="md:col-span-2">
          <label className="block text-sm text-gray-700 mb-1">About</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Short description about doctor"
          ></textarea>
        </div>

        <div className="md:col-span-2 flex justify-end mt-2">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

// Reusable input component
const Input = ({ name, value, onChange, label, type = 'text' }) => (
  <div>
    <label className="block text-sm text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
);

// Reusable select component
const SelectInput = ({ name, value, onChange, label, options }) => (
  <div>
    <label className="block text-sm text-gray-700 mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
    >
      <option value="">Select</option>
      {options.map((opt, i) => (
        <option key={i} value={opt.replace('₹', '')}>{opt}</option>
      ))}
    </select>
  </div>
);

export default AddDoctor;