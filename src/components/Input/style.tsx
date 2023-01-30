import styled from "styled-components";

export interface StyledInputProps {
  error?: boolean;
  dark?: boolean;
}

export const Input = styled.input<StyledInputProps>`
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #DFE3FA")};
  border-radius: 4px;
  width: 100%;
  background: ${(props) => (props.dark ? "#1E2139" : "#FFFFFF")};
  color: ${(props) => (props.dark ? "#ffffff" : "#0C0E16")};
  font-size: 12px;
  letter-spacing: -0.25px;
  font-weight: 700;
  padding: 6px 10px;
`;

export const Label = styled.label<StyledInputProps>`
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => (props.error ? "red" : "#7E88C3")};
  letter-spacing: -0.25px;
  display: block;
`;
