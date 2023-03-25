import React, { useEffect } from "react";
import { HomeScreenContainer } from "./styles";
import { useAppState } from "../../appStore/hooks";

const HomeScreen: React.FC = () => {
  const { userLogin } = useAppState(); // global state
  const { userInfo, error, loading } = userLogin;
  const { user, token } = userInfo;

  useEffect(() => {
    console.log("user", user);
    console.log("token", token);
    console.log("error", error);
    console.log("loading", loading);
  }, [user, token, error, loading]);

  return <HomeScreenContainer></HomeScreenContainer>;
};

export default HomeScreen;
