import React from "react";
import Users from "../../components/Users";
import { UsersScreenContainer } from "./styles";

const UsersScreen: React.FC = () => {
  return (
    <UsersScreenContainer>
      <Users />
    </UsersScreenContainer>
  );
};

export default UsersScreen;
