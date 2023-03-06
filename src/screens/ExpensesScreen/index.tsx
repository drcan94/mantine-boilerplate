import React from "react";
import { expenses } from "../../components/Expenses/data";
import ExpensesComponent from "../../components/Expenses";
import { ExpensesContainer } from "./styles";

const ExpensesScreen: React.FC = () => {
  return (
    <ExpensesContainer>
      <ExpensesComponent items={expenses} />
      <ExpensesComponent items={expenses} />
      <ExpensesComponent items={expenses} />
    </ExpensesContainer>
  );
};

export default ExpensesScreen;
