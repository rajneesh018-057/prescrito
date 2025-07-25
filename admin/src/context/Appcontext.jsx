import React, { createContext } from "react";

// Create context
export const AppContext = createContext();

// Create provider
const AppProvider = ({ children }) => {
  const contextValue = {
    // Add any shared values/functions here
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
