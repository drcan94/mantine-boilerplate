import React from "react";
import { StyledButton } from "./styles";
import { useMantineTheme } from "@mantine/core";

type CustomButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  type,
  ...props
}) => {
  const theme = useMantineTheme();
  return (
    <StyledButton type={type || "button"} {...props} theme={theme}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;