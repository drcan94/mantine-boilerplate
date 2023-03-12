import React, { useState } from "react";
import CustomCard from "../../UI/CustomCard";
import CustomButton from "../../UI/CustomButton";
import CustomForm from "../../UI/CustomForm";
import { AgeInput } from "./AgeInput/index";
import { UsernameInput } from "./UsernameInput/index";
import { UserType } from "../UsersList/index";
import ErrorModal from "../../UI/ErrorModal";

const MIN_USERNAME_LENGTH = 6;
const MIN_AGE = 18;
const MAX_AGE = 100;

const userNameErrorMessage = `Must be at least ${MIN_USERNAME_LENGTH} characters long.`;
const ageErrorMessage = `Must be between ${MIN_AGE} and ${MAX_AGE} years.`;

type AddUserProps = {
  setUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
};

export type ErrorType = {
  fieldName: "Name" | "Age";
  errorMessage: string;
};

const AddUser: React.FC<AddUserProps> = ({ setUsers }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);

  const [errorList, setErrorList] = useState<ErrorType[]>([]);

  const [isError, setIsError] = useState(false);

  // validation functions
  const validateUsername = (value: string) =>
    value.trim().length >= MIN_USERNAME_LENGTH;
  const validateAge = (value: number) => value >= MIN_AGE && value <= MAX_AGE;

  // reset form and set isValidated to false (so that the error messages are hidden)
  const resetForm = () => {
    setUsername("");
    setAge("");
    setIsError(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const errors: ErrorType[] = [];

    !validateUsername(username) &&
      errors.push({
        fieldName: "Name",
        errorMessage: userNameErrorMessage,
      });

    !validateAge(+age) &&
      errors.push({
        fieldName: "Age",
        errorMessage: ageErrorMessage,
      });

    if (errors.length > 0) {
      setIsError(true);
      setIsOpenErrorModal(true);
      setErrorList(errors);
      document.body.style.overflow = "hidden";
      return;
    }
    setUsers((prevUsers) => [
      ...prevUsers,
      {
        id: Math.random().toString(),
        name: username,
        age: +age,
      },
    ]);
    resetForm();
  };

  return (
    <React.Fragment>
      {isOpenErrorModal && (
        <ErrorModal
          title={`${errorList.length} error${
            errorList.length > 1 ? "s" : ""
          } found`}
          errorList={errorList}
          onConfirm={() => {
            setIsOpenErrorModal(false);
            document.body.style.overflow = "auto";
          }}
        />
      )}
      <CustomCard>
        <CustomForm onSubmit={handleSubmit}>
          <UsernameInput
            value={username}
            isError={isError}
            errorMessage={userNameErrorMessage}
            isValid={validateUsername(username)}
            onChange={(event) => setUsername(event.target.value)}
          />
          <AgeInput
            value={age}
            isError={isError}
            errorMessage={ageErrorMessage}
            isValid={validateAge(+age)}
            onChange={(event) => setAge(event.target.value)}
          />
          <CustomButton type="submit">Add User</CustomButton>
        </CustomForm>
      </CustomCard>
    </React.Fragment>
  );
};

export default AddUser;
