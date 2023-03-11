import React from "react";
import { ExpensesFilterSelect } from "./styles/index";
import {
  ExpensesFilterContainer,
  ExpensesFilterControl,
  ExpensesFilterLabel,
} from "./styles/index";

type ExpenseFilterProps = {
  filteredYear: string;
  setFilteredYear: (year: string) => void;
};

const ExpenseFilter: React.FC<ExpenseFilterProps> = ({
  filteredYear,
  setFilteredYear,
}) => {
  return (
    <ExpensesFilterContainer>
      <ExpensesFilterControl>
        <ExpensesFilterLabel>Filter by year</ExpensesFilterLabel>
        <ExpensesFilterSelect
          value={filteredYear}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setFilteredYear(event.target.value)
          }
        >
          <option value="all">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </ExpensesFilterSelect>
      </ExpensesFilterControl>
    </ExpensesFilterContainer>
  );
};

export default ExpenseFilter;
