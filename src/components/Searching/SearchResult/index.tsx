import React from "react";
import { IUser } from "../../../screens/SearchScreen";
import { SearchResultContainer } from "./styles";
import { useMantineTheme } from "@mantine/core";

const SearchResult: React.FC<{ result: IUser }> = ({ result }) => {
  const theme = useMantineTheme();

  return (
    <SearchResultContainer theme={theme}>{result.name}</SearchResultContainer>
  );
};

export default SearchResult;
