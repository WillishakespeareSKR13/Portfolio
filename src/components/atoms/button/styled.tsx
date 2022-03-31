import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Props } from "./index";

export const AtomButtoStyled = styled(motion.button)<Props>`
  border: none;
  color: white;
  cursor: pointer;
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 50px;
  background-color: ${({ backgroundColor }) => backgroundColor || `#ea4242`};
  height: 50px;
  border-radius: 4px;
  margin: ${({ margin }) => margin || `0 30px 0 0`};
  span {
    margin-top: 1px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 17px;
  }
`;
