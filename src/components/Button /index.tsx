import * as S from "./style";
import { IoMdAdd } from "react-icons/io";

export interface ButtonProps extends S.StyledButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <S.Button {...props}>
      {props.icon && (
        <span className="icon">
          <IoMdAdd color="#7C5DFA" />
        </span>
      )}
      {props.add && (
        <span className="add">
          <IoMdAdd color="#7E88C3" />
        </span>
      )}
      {props.children}
    </S.Button>
  );
};
