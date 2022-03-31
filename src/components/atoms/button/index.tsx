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
    <AtomButtoStyled
      {...props}
      whileHover={{ scale: 1.1, transition: { duration: 0.3, bounce: 2 } }}
      whileTap={{ scale: 0.98, opacity: 0.8 }}
    >
      <span>{children}</span>
    </AtomButtoStyled>
  );
};

export default AtomButton;
