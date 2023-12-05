// useDate.ts
import { createContext, useState, useContext, ReactNode } from "react";

const month = new Date().getMonth();
const year = new Date().getFullYear();

interface DateContextProps {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const dateInfo = { month, year };

export const DateContext = createContext<DateContextProps | undefined>(
  undefined
);

interface DateProviderProps {
  children: ReactNode;
}

export const DateProvider = ({ children }: DateProviderProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const contextValue = {
    currentDate,
    setCurrentDate,
  };

  return (
    <DateContext.Provider value={contextValue}>{children}</DateContext.Provider>
  );
};

const useDate = () => {
  const context = useContext(DateContext);

  if (!context) {
    throw new Error("useDate must be used within a DateProvider");
  }

  return context;
};

export default useDate;
