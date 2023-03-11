import React, { createContext, useContext } from "react";
import { useLocalStorage } from "@mantine/hooks";

export type GlobalRtlContextType = {
  rtl: boolean;
  setRtl: (val: boolean | ((prevState: boolean) => boolean)) => void;
};

const RtlContext = createContext<GlobalRtlContextType>({
  rtl: false,
  setRtl: (v) => !v,
});

interface ProviderProps {
  children: React.ReactNode;
}

const RtlContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [rtl, setRtl] = useLocalStorage<boolean>({
    key: "currentRtl",
    defaultValue: false,
    getInitialValueInEffect: false,
  });

  return (
    <RtlContext.Provider value={{ rtl, setRtl }}>
      {children}
    </RtlContext.Provider>
  );
};

export const useRtlContext = () => {
  const context = useContext(RtlContext) as GlobalRtlContextType;
  if (context === undefined) {
    throw new Error("useRtlContext must be used within a RtlContextProvider");
  }
  return context;
};

export default RtlContextProvider;
