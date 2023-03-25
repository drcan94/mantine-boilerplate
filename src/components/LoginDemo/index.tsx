import React, { useEffect, useReducer, useState } from "react";
import classes from "./styles/Login.module.css";
import DemoCard from "./DemoCard";
import DemoButton from "./DemoButton";
import styled from "@emotion/styled";
import { loginUser } from "../../appStore/modules/user/actions";
import { useAppDispatch } from "../../appStore/hooks";
import { MantineTheme } from "@mantine/core";
import { emailReducer } from "./emailReducer";
import { passwordReducer } from './passwordReducer';

const StyledLoginCard = styled(DemoCard)<{ theme: MantineTheme }>`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
  & input {
    color: ${({ theme }) =>
      theme.colorScheme === "dark"
        ? theme.colors.orange[9]
        : theme.colors.gray[8]};
  }
`;

const LoginDemo: React.FC<{
  onLogin: (email: string, password: string) => void;
}> = ({ onLogin }) => {
  const [email, emailDispatch] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [password, passwordDispatch] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        email.value.includes("@") && password.value.trim().length >= 6
      );
    }, 200);

    return () => clearTimeout(identifier);
  }, [email.value, password.value]);

  const validateEmailHandler = () => {
    emailDispatch({
      type: "SET_EMAIL_VALIDITY",
      isValid: email.value.includes("@"),
    });
  };

  const validatePasswordHandler = () => {
    passwordDispatch({
      type: "SET_PASSWORD_VALIDITY",
      isValid: password.value.trim().length >= 6,
    });
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emailDispatch({
      type: "SET_EMAIL",
      value: event.target.value,
    });
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    passwordDispatch({
      type: "SET_PASSWORD",
      value: event.target.value,
    });
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", email.value);
      formData.append("password", password.value);
      dispatch(loginUser(formData));

      // this is the old way of doing it by maximilian
      onLogin(email.value, password.value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledLoginCard>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            email.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={email.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            password.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <DemoButton
            type="submit"
            className={classes.btn}
            disabled={!formIsValid}
          >
            Login
          </DemoButton>
        </div>
      </form>
    </StyledLoginCard>
  );
};

export default LoginDemo;
