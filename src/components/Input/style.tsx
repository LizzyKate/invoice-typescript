import styled from "styled-components";

export interface StyledInputProps {
  error?: boolean;
}

export const Input = styled.input<StyledInputProps>`
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #DFE3FA")};
  border-radius: 4px;
  width: 100%;
  color: #0c0e16;
  font-size: 12px;
  letter-spacing: -0.25px;
  font-weight: 700;
`;

export const Label = styled.label<StyledInputProps>`
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => (props.error ? "red" : "#7E88C3")};
  letter-spacing: -0.25px;
  display: block;
`;
