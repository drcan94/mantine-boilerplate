import { Button } from "@mantine/core";
import React from "react";
import { ExpenseItemProps } from "../data";
import ExpenseDate from "../ExpenseDate";
import { ExpenseItemContainer, ItemDescription, ItemPrice } from "./styles";

const ExpenseItem: React.FC<ExpenseItemProps> = ({
  date,
  description,
  price,
}) => {
  return (
    <ExpenseItemContainer>
      <ExpenseDate date={date} />
      <ItemDescription>
        <h2>{description}</h2>
      </ItemDescription>
      <ItemPrice>${price}</ItemPrice>
      <Button sx={{marginLeft: 10, borderRadius: 20, justifySelf: "flex-end"}}>Change Title</Button>
    </ExpenseItemContainer>
  );
};

export default ExpenseItem;
