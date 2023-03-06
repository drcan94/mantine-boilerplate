import React, { useState } from "react";
import { InputWrapper } from "./styles";
import { IconSearch } from "@tabler/icons-react";
import { useMantineTheme } from '@mantine/core';

interface SearchBarProps {
  setResults: React.Dispatch<React.SetStateAction<any>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setResults }) => {
  const [input, setInput] = useState<string>("");
  const theme = useMantineTheme();
  const fetchData = async (value: string) => {
    // fetch data from API
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      const filteredData = json.filter((user: any) => {
        return (
          value &&
          user &&
          user.name &&
          user.name.toLowerCase().includes(value.toLowerCase())
        );
      });
      setResults(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    fetchData(e.target.value);
  };

  return (
    <InputWrapper theme={theme}>
      <IconSearch color="blue" />
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={handleChange}
      />
    </InputWrapper>
  );
};

export default SearchBar;
