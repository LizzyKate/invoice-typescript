import styled from "styled-components";

export interface StyledSelectProps {
  error?: boolean;
  dark?: boolean;
}

export const CustomSelectContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const Select = styled.select<StyledSelectProps>`
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #DFE3FA")};
  border-radius: 4px;
  width: 50%;
  background: ${(props) => (props.dark ? "#1E2139" : "#FFFFFF")};
  color: ${(props) => (props.dark ? "#ffffff" : "#0C0E16")};
  font-size: 12px;
  letter-spacing: -0.25px;
  font-weight: 700;
  padding: 6px 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: block;
  line-height: 1.5;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  &:disabled {
    color: #6c757d;
    background-color: #e9ecef;
  }
  option {
    /* Add your custom styles here */
    background-color: #fff;
    appearance: none;
    background-clip: padding-box;
  }
  opt-group {
    background: red;
  }
`;

export const Label = styled.label<StyledSelectProps>`
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => (props.error ? "red" : "#7E88C3")};
  letter-spacing: -0.25px;
  display: block;
`;
