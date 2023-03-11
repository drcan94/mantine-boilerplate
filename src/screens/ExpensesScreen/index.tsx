import React from "react";
import ExpensesComponent from "../../components/Expenses";
import { ExpensesContainer } from "./styles";
import ExpensesContextProvider from "../../providers/ExpenseDataProvider";

const ExpensesScreen: React.FC = () => {
  return (
    <ExpensesContainer>
      <ExpensesContextProvider>
        <ExpensesComponent />
      </ExpensesContextProvider>
    </ExpensesContainer>
  );
};

export default ExpensesScreen;
