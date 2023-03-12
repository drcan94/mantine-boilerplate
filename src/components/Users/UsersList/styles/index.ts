import styled from "@emotion/styled";
import { StyledCard } from "../../../UI/CustomCard/styles";

export const UsersCard = styled(StyledCard)`
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0 1rem;
  & ul {
    padding: 1rem 0;
  }

  & li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;
