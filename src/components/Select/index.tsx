import * as S from "./style";
import { useState } from "react";

export interface SelectProps extends S.StyledSelectProps {
  label?: string;
  value?: any;
  getValue(word: string): void;
  options: {
    label: string;
    value: string;
  }[];
}

export const SelectValue = (props: SelectProps) => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState(props.value || props.options[0].value);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    props.getValue(e.target.value);
  };

  return (
    <S.CustomSelectContainer>
      {props.label && (
        <S.Label error={error} htmlFor={props.label}>
          {props.label}
        </S.Label>
      )}

      <S.SelectStyle
        bordered={false}
        value={value}
        error={error}
        onBlur={() => setError(false)}
        onFocus={() => setError(false)}
      >
        <option value={props.options[0].value} disabled selected>
          {props.options[0].label}
        </option>
        {props.options.slice(1).map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.SelectStyle>
    </S.CustomSelectContainer>
  );
};
