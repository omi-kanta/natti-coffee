'use client';

import { createContext, useContext, useState } from 'react';

type LoadingContextType = {
  loaderShowing: boolean;
  setLoaderShowing: (v: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType>({
  loaderShowing: false,
  setLoaderShowing: () => {},
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loaderShowing, setLoaderShowing] = useState(false);
  return (
    <LoadingContext.Provider value={{ loaderShowing, setLoaderShowing }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);
