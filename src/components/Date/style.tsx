import styled from "styled-components";

export interface StyledDateProps {
  error?: boolean;
}

export const Label = styled.label<StyledDateProps>`
  color: #7e88c3;
  font-size: 12px;
  letter-spacing: -0.25px;
  font-weight: 500;
`;
