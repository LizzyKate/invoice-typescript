import * as S from "./style";
import { useState } from "react";
import { Select } from "antd";

export interface SelectProps extends S.StyledSelectProps {
  label?: string;
  value?: any;
  getValue(word: string): void;
  options: {
    label: string;
    value: string;
  }[];
}

const handleChange = (value: any, option: any) => {
  console.log(`selected ${value}`);
};

export const SelectValue = (props: SelectProps) => {
  return (
    <S.CustomSelectContainer>
      {props.label && <S.Label htmlFor={props.label}>{props.label}</S.Label>}

      <S.SelectStyle
        bordered={false}
        onChange={handleChange}
        options={props.options}
      ></S.SelectStyle>
    </S.CustomSelectContainer>
  );
};
