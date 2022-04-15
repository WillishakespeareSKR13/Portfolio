import { FC, forwardRef, RefObject } from "react";
import {
  HeroContainerStyled,
  HeroContentImgStyled,
  HeroContentStyled,
  HeroContentTextStyled,
} from "./styled";
import LogoBackground from "@Assets/logoBackground.svg";
import AtomButton from "@Src/components/atoms/button";
import LogoBig from "@Assets/logoBig.svg";

type Props = {
  id?: string;
};

const SectionHero = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { id } = props;

  return (
    <HeroContainerStyled ref={ref} id={id}>
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
});

export default SectionHero;
