import styled from "@emotion/styled";

export const AboutContainerStyled = styled.section`
  width: 100vw;
  display: flex;
  position: relative;
  min-height: 100vh;
  background-color: #ffffff;
  position: relative;
  justify-content: center;
`;

export const AboutContentStyled = styled.div`
  width: 100vw;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 90px 100px 300px 100px;

  font-family: "Montserrat", sans-serif;
  h3 {
    font-size: 33px;
    margin-bottom: 20px;
  }

  p {
    max-width: 900px;
    font-size: 18px;
    margin-bottom: 50px;
  }

  p:nth-of-type(1) {
    margin-bottom: 100px;
  }
`;
