import React, { createContext, useContext, useEffect, useState } from "react";

const ViewportContext = createContext();

const getSizes = () => {
  if (typeof window !== 'undefined') {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
}

export const ViewportProvider = ({ children }) => {
  const [viewport, setViewport] = useState(getSizes())

  const handleResize = () => {
    setViewport(getSizes())
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[])

  return (
    <ViewportContext.Provider value={viewport}>
      {children}
    </ViewportContext.Provider>
  )
};

export const useViewport = () => useContext(ViewportContext);
