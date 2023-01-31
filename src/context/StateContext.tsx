import { ConfigProvider, theme } from "antd";
import React, { createContext, useState, useContext } from "react";

// type Mode = "light" | "dark";

type Mode = {
  dark: boolean;
};

interface ContextValue {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
  handleClick: () => void;
}

const defaultState: ContextValue = {
  mode: { dark: false },
  setMode: () => {},
  handleClick: () => {},
};

interface Props {
  children: React.ReactNode;
}

const Context = createContext<ContextValue | undefined>(defaultState);

export const StateContext: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<Mode>({ dark: false });
  const handleClick = () => {
    setMode((previousValue) => ({ dark: !previousValue.dark }));
  };
  return (
    <ConfigProvider
      theme={{
        algorithm: mode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Context.Provider
        value={{
          mode,
          setMode,
          handleClick,
        }}
      >
        {children}
      </Context.Provider>
    </ConfigProvider>
  );
};

export const useStateContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error(
      "useStateContext must be used within a StateContext provider"
    );
  }
  return context;
};
