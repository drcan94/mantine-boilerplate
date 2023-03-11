import React from "react";
import { useExpensesContext } from "../../../providers/ExpenseDataProvider/index";
import ExpenseItem from "../ExpenseItem/index";

const AllExpenses = ({ filteredYear }: { filteredYear: string }) => {
  const { expensesData } = useExpensesContext();
  return (
    <React.Fragment>
      {expensesData
        .filter((item) => {
          if (filteredYear === "all") {
            return true;
          }
          return item.date.getFullYear().toString() === filteredYear;
        })
        .sort((a, b) => {
          if (a.date > b.date) {
            return -1;
          }
          if (a.date < b.date) {
            return 1;
          }
          return 0;
        })
        .map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              description={item.description}
              price={item.price}
              date={item.date}
            />
          );
        })}
    </React.Fragment>
  );
};

export default AllExpenses;

// directly filtering in the map function
// {
//   expensesData.map((item) => {
//     if (
//       filteredYear !== "all" &&
//       item.date.getFullYear().toString() !== filteredYear
//     ) {
//       return null;
//     }
//     return (
//       <ExpenseItem
//         key={item.id}
//         description={item.description}
//         price={item.price}
//         date={item.date}
//       />
//     );
//   });
// }
