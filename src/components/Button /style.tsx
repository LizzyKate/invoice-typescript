import styled from "styled-components";
import { Button as AntButton } from "antd";

export interface StyledButtonProps {
  color: string;
  backgroundColor: string;
  disabled: boolean;
  width: string;
  add: boolean;
  icon: boolean;
}

export const Button = styled(AntButton)<StyledButtonProps>`
  &&& {
    background-color: ${(props: StyledButtonProps) => props.backgroundColor};
    color: ${(props: StyledButtonProps) => props.color};
    width: ${(props: StyledButtonProps) => props.width};
    border-radius: 24px;
    font-size: 12px;
    letter-spacing: -0.25px;
    font-weight: 700;
    padding: 8px 10px;
    margin-top: 10px;
    ${({ icon }) =>
      icon &&
      `
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
    ${({ add }) =>
      add &&
      `display: flex;
      align-items: center;
      justify-content: center;
      .add {
        margin-right: 3px;
      }
    `}
    &&&:hover {
      border: none;
    }
  }
`;
