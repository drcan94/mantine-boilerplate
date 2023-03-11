import { Button } from "@mantine/core";
import React from "react";
import { IExpense } from "../data";
import ExpenseDate from "../ExpenseDate";
import { ExpenseItemContainer, ItemDescription, ItemPrice } from "./styles";
import { useExpensesContext } from "../../../providers/ExpenseDataProvider";

const ExpenseItem: React.FC<IExpense> = ({ id, date, description, price }) => {
  const { setExpensesData } = useExpensesContext();

  const deleteExpenseHandler = () => {
    setExpensesData((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <ExpenseItemContainer>
      <ExpenseDate date={date} />
      <ItemDescription>
        <h2>{description}</h2>
      </ItemDescription>
      <ItemPrice>${price}</ItemPrice>
      <Button
        sx={{ marginLeft: 10, borderRadius: 20, justifySelf: "flex-end" }}
        onClick={deleteExpenseHandler}
      >
        Delete
      </Button>
    </ExpenseItemContainer>
  );
};

export default ExpenseItem;
