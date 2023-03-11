import React from "react";
import { Actions, Control, Controls } from "./styles";
import { ExpenseItemProps, IExpense } from "../../data";
import { useExpensesContext } from "../../../../providers/ExpenseDataProvider/index";

const NewExpenseForm: React.FC = () => {
  const [title, setTitle] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [date, setDate] = React.useState(new Date().toISOString().slice(0, 10));
  const { setExpensesData } = useExpensesContext();
  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    // of course this way is not necessary, but it's a good practice :)
    switch (event.target.id) {
      case "title":
        setTitle(event.target.value);
        break;
      case "amount":
        setAmount(event.target.value);
        break;
      case "date":
        setDate(event.target.value);
        break;
    }
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (title.trim().length === 0 || amount.trim().length === 0) {
      return;
    }
    const expenseData: ExpenseItemProps = {
      description: title,
      price: +amount,
      date: new Date(date),
    };
    setExpensesData((prevState: IExpense[]) => {
      return [...prevState, { ...expenseData, id: Math.random().toString() }];
    });
    setTitle("");
    setAmount("");
    setDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <form onSubmit={submitHandler}>
      <Controls>
        <Control>
          <label htmlFor="title">Title</label>
          <input onChange={inputChangeHandler} id="title" value={title} />
        </Control>
        <Control>
          <label htmlFor="amount">Amount</label>
          <input
            onChange={inputChangeHandler}
            id="amount"
            value={amount}
            type={"number"}
            min={0.01}
            step={0.01}
          />
        </Control>
        <Control>
          <label htmlFor="date">Date</label>
          <input
            onChange={inputChangeHandler}
            id="date"
            value={date}
            type={"date"}
            min={"2019-01-01"}
            step={"2022-12-31"}
          />
        </Control>
      </Controls>
      <Actions>
        <button type="submit">Add Expense</button>
      </Actions>
    </form>
  );
};

export default NewExpenseForm;
