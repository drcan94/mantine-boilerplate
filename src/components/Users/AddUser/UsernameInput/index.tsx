import CustomInput from "../../../UI/CustomInput/index";

type UsernameInputProps = {
  value: string;
  isError: boolean;
  isValid: boolean;
  errorMessage: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

export const UsernameInput: React.FC<UsernameInputProps> = ({
  value,
  isError,
  isValid,
  errorMessage,
  onChange,
}) => {
  return (
    <CustomInput
      id="username"
      label="Name"
      value={value}
      isError={isError}
      isValid={isValid}
      errorMessage={errorMessage}
      onChange={onChange}
    />
  );
};
