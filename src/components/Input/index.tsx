import { useState } from "react";
import * as S from "./style";

export interface InputProps extends S.StyledInputProps {
  type: string;
  label?: string;
  getValue(word: string): void;
  value?: any;
  placeholder?: string;
}

export const Input = (props: InputProps) => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState(props.value || "");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.getValue(e.target.value);
  };

  return (
    <>
      {props.label && (
        <S.Label error={error} htmlFor={props.label}>
          {props.label}
        </S.Label>
      )}
      <S.Input
        id={props.label}
        value={value}
        onChange={handleChange}
        error={error}
        placeholder={props.placeholder}
        type={props.type}
      />
    </>
  );
};
