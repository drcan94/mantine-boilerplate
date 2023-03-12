import React from "react";
import { StyledErrorCard, Backdrop } from "./styles";
import { useMantineTheme } from "@mantine/core";
import { ErrorType } from "../../Users/AddUser/index";

type ErrorModalProps = {
  title: string;
  errorList: ErrorType[];
  onConfirm: () => void;
};

const ErrorModal: React.FC<ErrorModalProps> = ({
  title,
  errorList,
  onConfirm,
}) => {
  const theme = useMantineTheme();
  return (
    <React.Fragment>
      <Backdrop />
      <StyledErrorCard theme={theme}>
        <header>
          <h2>{title}</h2>
        </header>
        <div className="content">
          {errorList.map((error, index) => (
            <p key={error.fieldName}>
              {index + 1} - <strong>{error.fieldName}</strong>: {error.errorMessage}
            </p>
          ))}
        </div>
        <footer className="actions">
          <button onClick={onConfirm}>Okay</button>
        </footer>
      </StyledErrorCard>
    </React.Fragment>
  );
};

export default ErrorModal;
