import CustomInput from "../../../UI/CustomInput/index";

type AgeInputProps = {
  value: string;
  isError: boolean;
  isValid: boolean;
  errorMessage: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

export const AgeInput: React.FC<AgeInputProps> = ({
  value,
  isError,
  isValid,
  errorMessage,
  onChange,
}) => {
  return (
    <CustomInput
      id="age"
      label="Age (Years)"
      value={value}
      type="number"
      isError={isError}
      isValid={isValid}
      errorMessage={errorMessage}
      onChange={onChange}
    />
  );
};


