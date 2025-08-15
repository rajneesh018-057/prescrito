import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [userData, setUserData] = useState(null);

  // ✅ Get all doctors
  const getDoctors = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message || 'Failed to fetch doctors');
      }
    } catch (error) {
      console.error('Error fetching doctors:', error);
      toast.error('Failed to fetch doctors.');
    }
  };

  // ✅ Get single doctor by ID
  const getDoctorById = async (id) => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/${id}`);
      if (data.success) return data.doctor;
      toast.error('Doctor not found');
      return null;
    } catch (error) {
      console.error('Error fetching doctor by ID:', error);
      toast.error('Failed to fetch doctor.');
      return null;
    }
  };

  // ✅ Load logged-in user profile
  const loadUserData = async () => {
    if (!token) return;
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/getprofile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) {
        setUserData(data.user);
      } else {
        toast.error(data.message || 'Failed to load user data');
      }
    } catch (error) {
      console.error('Error loading user data:', error);
      toast.error('Failed to load user data.');
    }
  };

  // ✅ Update user profile
  const updateUserData = async (updatedData) => {
    if (!token) return toast.error('You must be logged in to update profile');
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/updateprofile`,
        updatedData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (data.success) {
        setUserData(data.user);
        toast.success('Profile updated successfully!');
      } else {
        toast.error(data.message || 'Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile.');
    }
  };

  // ✅ Fetch doctors on first load
  useEffect(() => {
    getDoctors();
  }, []);

  // ✅ Load user data when token changes
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      loadUserData();
    } else {
      localStorage.removeItem('token');
      setUserData(null);
    }
  }, [token]);

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        doctors,
        getDoctors,
        getDoctorById,
        backendUrl,
        userData,
        setUserData,
        loadUserData,
        updateUserData, // <-- added here
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
