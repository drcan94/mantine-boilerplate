import React from "react";
import { ExpensesContainer } from "./styles";
import NewExpense from "./NewExpense";
import ExpenseFilter from "./ExpenseFilter";
import AllExpenses from "./AllExpenses";

const ExpensesComponent: React.FC = () => {
  const [filteredYear, setFilteredYear] = React.useState<string>("all");
  return (
    <React.Fragment>
      <NewExpense />
      <ExpensesContainer>
        <ExpenseFilter
          filteredYear={filteredYear}
          setFilteredYear={setFilteredYear}
        />
        <AllExpenses filteredYear={filteredYear} />
      </ExpensesContainer>
    </React.Fragment>
  );
};

export default ExpensesComponent;
