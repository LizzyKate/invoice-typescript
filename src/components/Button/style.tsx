import styled, { css } from "styled-components";

export interface StyledButtonProps {
  color: string;
  backgroundColor: string;
  disabled: boolean;
  width: string;
  add: boolean;
  icon: boolean;
}

export const Button = styled.button<StyledButtonProps>`
  background-color: ${(props: StyledButtonProps) => props.backgroundColor};
  color: ${(props: StyledButtonProps) => props.color};
  width: ${(props: StyledButtonProps) => props.width};
  border-radius: 24px;
  font-size: 12px;
  letter-spacing: -0.25px;
  font-weight: 700;
  padding: 8px 10px;
  margin-top: 10px;
  ${(props) =>
    props.icon &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      .icon {
        border-radius: 50%;
        background-color: #fff;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
  ${(props) =>
    props.add &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      .add {
        margin-right: 3px;
      }
    `}
`;
