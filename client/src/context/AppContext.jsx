import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : ''); // ✅ Initialize token from localStorage


  // ✅ Get all doctors
  const getDoctors = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error("Failed to fetch doctors:", data.message);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
      toast.error("Failed to fetch doctors. Please try again later.");
    }
  };

  // ✅ Get a single doctor by ID
  const getDoctorById = async (id) => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/${id}`);
      if (data.success) {
        return data.doctor;
      } else {
        toast.error("Doctor not found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching doctor by ID:", error);
      toast.error("Failed to fetch doctor. Please try again.");
      return null;
    }
  };

  useEffect(() => {

    getDoctors();
  }, []);

  return (
    <AppContext.Provider value={{ token,setToken ,doctors, getDoctors, getDoctorById ,backendUrl}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
