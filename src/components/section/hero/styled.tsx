import styled from "@emotion/styled";

export const HeroContainerStyled = styled.section`
  width: 100vw;
  display: flex;
  position: relative;
  min-height: 100vh;
  background-color: #1e1c1c;
  position: relative;
  justify-content: center;
  :after {
    content: "";
    position: absolute;
    right: 0;
    height: 100%;
    width: 70%;
    margin: 0 -25% 0 0;
    transform: skew(-30deg, 0deg);
    background-color: #c93c3c;
    z-index: 0;
  }
  @media (max-width: 1024px) {
    :after {
      display: none;
    }
  }
`;

export const HeroContentStyled = styled.div`
  width: 100vw;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin: 90px 100px 90px 100px;
  position: relative;
  z-index: 2;
  svg {
    position: absolute;
    left: -5%;
    top: 100%;
    transform: translate(10%, -100%);
    margin: auto 0 auto auto;
    height: 90%;
    z-index: -1;
  }
`;

export const HeroContentTextStyled = styled.div`
  width: max-content;
  @media (max-width: 1024px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    color: #fff;
    line-height: 150%;
    font-size: 40px;
    b {
      font-weight: 600;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    div {
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
      button {
        margin: 10px 10px;
      }
    }
    p {
      font-size: 30px;
      text-align: center;
    }
  }
  @media (max-width: 425px) {
    div {
    }
    p {
      font-size: 25px;
    }
  }
`;

export const HeroContentImgStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    position: relative;
    width: 100%;
    height: 100%;
    path {
      fill: #1e1c1c;
    }
  }
  height: 65%;
  width: max-content;
  max-height: 500px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
