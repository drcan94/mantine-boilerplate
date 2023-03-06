import styled from "@emotion/styled";
import { Text, TextProps, MantineTheme } from '@mantine/core';

export const SearchResultContainer = styled(Text)<TextProps | {theme: MantineTheme}>`
  padding: 10px 20px;
  &:hover {
    background-color: ${({theme}) => theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]}; 
  }
`;
