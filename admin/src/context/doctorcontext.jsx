import React, { createContext } from "react";

// Create context
export const DoctorContext = createContext();

// Provider component
const DoctorProvider = ({ children }) => {
  const contextValue = {
    // shared doctor-related state or functions here
  };

  return (
    <DoctorContext.Provider value={contextValue}>
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorProvider;
