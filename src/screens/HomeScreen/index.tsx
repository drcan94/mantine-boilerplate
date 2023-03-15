import { Text } from "@mantine/core";
import React, { useEffect } from "react";
import { HomeScreenContainer } from "./styles";
import { useAppState } from "../../appStore/hooks";

const HomeScreen: React.FC = () => {
  const state = useAppState();

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <HomeScreenContainer>
      <Text align="center">React with Maximilian Schwarzmüller</Text>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
