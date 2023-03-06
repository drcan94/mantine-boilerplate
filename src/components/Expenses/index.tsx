import React from "react";
import { ExpensesContainer } from "./styles";
import ExpenseItem from "./ExpenseItem";
import { IExpense } from "./data";

const ExpensesComponent: React.FC<{ items: IExpense[] }> = ({ items }) => {
  return (
    <ExpensesContainer>
      {items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            date={item.date}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </ExpensesContainer>
  );
};

export default ExpensesComponent;
