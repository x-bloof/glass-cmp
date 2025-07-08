"use client";

import { createContext, useContext } from "react";
import useOverlaysStates from "@/lib/CMP/cmp.overlaysStates";

const OverlaysContext = createContext(null);

export const OverlaysProvider = ({ children }) => {
  const overlays = useOverlaysStates();

  return (
    <OverlaysContext.Provider value={overlays}>
      {children}
    </OverlaysContext.Provider>
  );
};

export const useOverlays = () => {
  const ctx = useContext(OverlaysContext);
  return ctx;
};
