import styled from "styled-components";
import { DatePicker as AntDatePicker } from "antd";

export interface StyledDateProps {
  error?: boolean;
}

export const Label = styled.label<StyledDateProps>`
  color: #7e88c3;
  font-size: 12px;
  letter-spacing: -0.25px;
  font-weight: 500;
`;

export const DatePicker = styled(AntDatePicker)<StyledDateProps>`
  &&& {
    width: 240px;
    background: #ffffff;
    border: 1px solid #dfe3fa;
    border-radius: 4px;
    color: #0c0e16;

    &&&:focus {
      border: 1px solid #7c5dfa !important;
      box-shadow: none !important;
      outline: none !important;
    }
  }
`;
