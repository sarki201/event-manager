import React, { useContext, useState } from "react";

const AsideContext = React.createContext();
const AsideContextToggle = React.createContext();

export const useAside = () => {
  return useContext(AsideContext);
};
export const useAsideToggle = () => {
  return useContext(AsideContextToggle);
};

export const AsideProvider = ({ children }) => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const toggleAside = () => {
    setIsAsideOpen((prev) => !prev);
  };
  return (
    <AsideContext.Provider value={isAsideOpen}>
      <AsideContextToggle.Provider value={toggleAside}>
        {children}
      </AsideContextToggle.Provider>
    </AsideContext.Provider>
  );
};
