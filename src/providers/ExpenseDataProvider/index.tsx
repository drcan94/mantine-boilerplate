import React, { createContext, useContext } from "react";
import { expenses, IExpense } from "../../components/Expenses/data";
import { useLocalStorage } from "@mantine/hooks";
import superjson from "superjson";

export type GlobalExpensesType = {
  expensesData: IExpense[];
  setExpensesData: React.Dispatch<React.SetStateAction<IExpense[]>>;
};

const ExpensesContext = createContext<GlobalExpensesType | undefined>(
  undefined
);

interface ProviderProps {
  children: React.ReactNode;
}

const ExpensesContextProvider: React.FC<ProviderProps> = ({ children }) => {
  console.log("ExpensesContextProvider");
  const [expensesData, setExpensesData] = useLocalStorage<IExpense[]>({
    key: "expensesData",
    defaultValue: expenses,
    getInitialValueInEffect: false,
    serialize: superjson.stringify,
    deserialize: (str) => (str === undefined ? expenses : superjson.parse(str)),
  });

  return (
    <ExpensesContext.Provider value={{ expensesData, setExpensesData }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpensesContext = () => {
  const context = useContext(ExpensesContext) as GlobalExpensesType;
  if (context === undefined) {
    throw new Error(
      "useExpensesContext must be used within a ExpensesContextProvider"
    );
  }
  return context;
};

export default ExpensesContextProvider;
