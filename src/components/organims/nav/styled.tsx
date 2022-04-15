import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { Props } from "./index";

export const NavigationStyled = styled.nav<Props>`
  width: 100vw;
  height: 90px;
  background-color: ${({ scroll }) => (scroll ? `#1e1c1c` : `transparent`)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
`;

export const NavigationContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0px 100px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    justify-content: center;
  }
  align-items: center;
`;
export const NavigationUlStyled = styled.ul`
  display: flex;
  color: #aaa2a2;
  list-style-type: none;
  font-family: Monserrat, sans-serif;
  font-weight: 500;
  li {
    cursor: pointer;
    margin-right: 30px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavigationSocialContainerStyled = styled.ul`
  display: flex;
  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    margin-left: 30px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

type LabelLiStyledProps = {
  active: boolean;
};

export const LabelLiStyled = styled.li<LabelLiStyledProps>`
  padding: 0px 0px 5px 0px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid #c93c3c;
    `}
`;
