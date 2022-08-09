import { useContext } from "react";
import { createContext } from "react";

export const DepsContext = createContext({});

export const useDeps = () => {
  return useContext(DepsContext);
};

export const DepsProvider = ({ children, services }) => {
  return (
    <DepsContext.Provider value={services}>{children}</DepsContext.Provider>
  );
};
