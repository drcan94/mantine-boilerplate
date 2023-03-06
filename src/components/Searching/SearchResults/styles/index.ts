import styled from "@emotion/styled";

export const SearchResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 300px;
    background-color: ${({theme}) => theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.cyan[0]}; 
    box-shadow: 0 0 8px #ddd;
    overflow-y: scroll;
    margin-top: 1rem;
    border-radius: 10px;
`;