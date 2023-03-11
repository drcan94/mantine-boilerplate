import React from "react";
import { NewExpenseContainer } from "./styles";
import NewExpenseForm from "./NewExpenseForm/index";

const NewExpense: React.FC = () => {


  return (
    <NewExpenseContainer>
      <NewExpenseForm />
    </NewExpenseContainer>
  );
};

export default NewExpense;
