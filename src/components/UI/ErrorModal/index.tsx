import React from "react";
import { StyledErrorCard, StyledBackdrop } from "./styles";
import { useMantineTheme } from "@mantine/core";
import { ErrorType } from "../../Users/AddUser/index";
import CustomButton from "../CustomButton/index";
import { createPortal } from "react-dom";

type ErrorModalProps = {
  title: string;
  errorList: ErrorType[];
  onConfirm: () => void;
};

type BackdropProps = {
  onConfirm: () => void;
};

const Backdrop: React.FC<BackdropProps> = ({ onConfirm }) => {
  return <StyledBackdrop onClick={onConfirm} />;
};

type OverlayProps = {
  title: string;
  errorList: ErrorType[];
  onConfirm: () => void;
};

const ModalOverlay: React.FC<OverlayProps> = ({
  title,
  errorList,
  onConfirm,
}) => {
  return (
    <StyledErrorCard>
      <header>
        <h2>{title}</h2>
      </header>
      <div className="content">
        {errorList.map((error, index) => (
          <p key={error.fieldName}>
            {index + 1} - <strong>{error.fieldName}</strong>:{" "}
            {error.errorMessage}
          </p>
        ))}
      </div>
      <footer className="actions">
        <CustomButton onClick={onConfirm}>Okay</CustomButton>
      </footer>
    </StyledErrorCard>
  );
};

const ErrorModal: React.FC<ErrorModalProps> = ({
  title,
  errorList,
  onConfirm,
}) => {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {createPortal(
        <ModalOverlay
          title={title}
          errorList={errorList}
          onConfirm={onConfirm}
        />,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
