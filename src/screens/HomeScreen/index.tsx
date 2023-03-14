import { Text } from "@mantine/core";
import React from "react";
import { HomeScreenContainer } from "./styles";

const HomeScreen: React.FC = () => {
  return (
    <HomeScreenContainer>
      <Text align="center">React with Maximilian Schwarzmüller</Text>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
