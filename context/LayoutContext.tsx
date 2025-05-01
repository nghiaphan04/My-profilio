
"use client";

import { createContext, useContext, useState } from "react";

interface LayoutContextType {
  showNav: boolean;
  setShowNav: (show: boolean) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [showNav, setShowNav] = useState(true);

  return (
    <LayoutContext.Provider value={{ showNav, setShowNav }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};
