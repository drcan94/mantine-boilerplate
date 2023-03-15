import { Text } from "@mantine/core";
import React, { useEffect } from "react";
import { HomeScreenContainer } from "./styles";
import { useAppState } from "../../appStore/hooks";

const HomeScreen: React.FC = () => {
  const state = useAppState();
  const { userLogin } = state;
  const { userInfo, error, loading } = userLogin;
  const { user, token } = userInfo

  useEffect(() => {
    console.log("user", user);
    console.log("token", token);
    console.log("error", error);
    console.log("loading", loading);
  }, [user, token, error, loading]);

  return (
    <HomeScreenContainer>
      <Text align="center">React with Maximilian Schwarzmüller</Text>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
