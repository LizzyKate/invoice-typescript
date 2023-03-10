import styled from "styled-components";
import { Button as AntButton } from "antd";

export interface StyledButtonProps {
  color: string;
  backgroundcolor: string;
  disabled: boolean;
  add?: boolean;
  icon?: boolean;
  hoverbackgroundcolor?: string;
  width?: string;
}

export const Button = styled(AntButton)<StyledButtonProps>`
  &&& {
    background-color: ${(props: StyledButtonProps) => props.backgroundcolor};
    color: ${(props: StyledButtonProps) => props.color};
    width: ${(props: StyledButtonProps) => props.width};
    border-radius: 24px;
    font-size: 14px;
    font-weight: 700;
    height: 100%;
    padding: 13px 24px;
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
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
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
      background: ${(props: StyledButtonProps) => props.hoverbackgroundcolor};
    }
  }
`;
