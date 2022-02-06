import { FC } from "react";
import { AtomButtoStyled } from "./styled";

export type Props = {
  onClick?: () => void;
  backgroundColor?: string;
  margin?: string;
};

const AtomButton: FC<Props> = (props) => {
  const { children } = props;
  return (
    <AtomButtoStyled {...props}>
      <span>{children}</span>
    </AtomButtoStyled>
  );
};

export default AtomButton;
