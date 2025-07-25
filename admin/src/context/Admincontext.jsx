// context/Admincontext.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [atoken, setAToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

  useEffect(() => {
    const storedToken = localStorage.getItem("atoken");
    if (storedToken) {
      setAToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/admin/all-doctors`,{}, {
        headers: {
          Authorization: `Bearer ${atoken}`,
        },
      });

      if (data.success) {
        setDoctors(data.doctors);
        console.log("Doctors fetched successfully:", data.doctors);
        toast.success('Doctors fetched successfully!');
      } else {
        toast.error('Failed to fetch doctors');
      }
    } catch (error) {
      toast.error("Error fetching doctors");
      console.error(error);
    }
  };
const changeDoctorAvailability = async (doctorId, available) => {
  try {
    const { data } = await axios.post(
      `${backendUrl}/api/admin/change-availability`,
      { doctorId, available },
      {
        headers: {
          Authorization: `Bearer ${atoken}`,
        },
      }
    );

    if (data.success) {
      toast.success('Doctor availability updated!');
      
      // ✅ Instead of refetching all, update specific doctor in local state
      setDoctors((prevDoctors) =>
        prevDoctors.map((doc) =>
          doc._id === doctorId ? { ...doc, available: available } : doc
        )
      );
    } else {
      toast.error(data.message || 'Failed to update availability');
    }
  } catch (error) {
    console.error("Error updating availability:", error);
    toast.error("Error updating availability");
  }
};

  const contextValue = {
    atoken,
    setAToken,
    backendUrl,
    isAuthenticated,
    setIsAuthenticated,
    doctors,
    setDoctors,
    getAllDoctors,
    changeDoctorAvailability,
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
