import React, { useEffect, useState } from "react";
import classes from "./styles/Login.module.css";
import DemoCard from "./DemoCard/index";
import DemoButton from "./DemoButton/index";
import styled from "@emotion/styled";
import { useAuthDispatch } from "./Context";
import { loginUser } from "./Context/actions";

const StyledLoginCard = styled(DemoCard)`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
`;

const LoginDemo: React.FC<{
  onLogin: (email: string, password: string) => void;
}> = ({ onLogin }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const dispatch = useAuthDispatch();

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length >= 6
      );
    }, 500);

    return () => clearTimeout(identifier);
  }, [enteredEmail, enteredPassword]);

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length >= 6);
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", enteredEmail);
      formData.append("password", enteredPassword);
      dispatch(loginUser(formData));

      // this is the old way of doing it by maximilian
      onLogin(enteredEmail, enteredPassword);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledLoginCard>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
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
