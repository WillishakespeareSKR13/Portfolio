import { FC } from "react";
import {
  HeroContainerStyled,
  HeroContentImgStyled,
  HeroContentStyled,
  HeroContentTextStyled,
} from "./styled";
import LogoBackground from "@Assets/logoBackground.svg";
import AtomButton from "@Src/components/atoms/button";
import LogoBig from "@Assets/logoBig.svg";

type Props = {};

const SectionHero: FC<Props> = () => {
  return (
    <HeroContainerStyled>
      <HeroContentStyled>
        <LogoBackground />
        <HeroContentTextStyled>
          <p>
            My Name is <b>William</b>
            <br />
            Senior <b>React</b> Developer
            <br />
            <b>UX/UI</b> Designer
          </p>
          <div>
            <AtomButton>Go to CV</AtomButton>
            <AtomButton backgroundColor="#373434">See my projects</AtomButton>
          </div>
        </HeroContentTextStyled>
        <HeroContentImgStyled>
          <LogoBig />
        </HeroContentImgStyled>
      </HeroContentStyled>
    </HeroContainerStyled>
  );
};

export default SectionHero;
