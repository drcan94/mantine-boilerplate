import styled from "@emotion/styled";

export const ExpensesFilterContainer = styled.div`
  color: white;
  padding: 0 1rem; // this is not needed
`;

export const ExpensesFilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  margin: 1rem 0;
`;

export const ExpensesFilterLabel = styled.label`
  font-weight: bold;
`;

export const ExpensesFilterSelect = styled.select`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
`;
