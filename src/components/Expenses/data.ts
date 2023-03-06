export type ExpenseItemProps = {
  date: Date;
  description: string;
  price: number;
};

export interface IExpense extends ExpenseItemProps {
  id: string;
}

export const expenses: IExpense[] = [
  {
    id: "e1",
    description: "Toilet Paper",
    price: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    description: "New TV",
    price: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    description: "Car Insurance",
    price: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    description: "New Desk (Wooden)",
    price: 450,
    date: new Date(2021, 5, 12),
  },
];
