import { FC, forwardRef, RefObject } from "react";
import { AboutContainerStyled, AboutContentStyled } from "./styled";
import AtomButton from "@Src/components/atoms/button";

type Props = {
  id?: string;
};

const SectionAbout = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { id } = props;
  return (
    <AboutContainerStyled ref={ref} id={id}>
      <AboutContentStyled>
        <h3>
          <b>About</b> Me
        </h3>
        <p>
          I am a creative person, I like to work in a team and I consider that I
          have the ability to solve problems easily. I love frontend development
          and design with more than 3 years of experience specializing in react
          and frontend and more than 5 in the software industry
          <br />
          <br />
          I would love to be part of a work team in which I can apply all my
          knowledge and, at the same time, allow me to develop professionally in
          which I can express myself creatively helping in large projects.
          <br />
          <br />
          Thanks to my specialized training, I believe that I can add value and
          continue to develop professionally in a company that matches my values
          ​​and expectations.
        </p>
        <h3>
          <b>See</b> My CV
        </h3>
        <p>
          I am a creative person, I like to work in a team and I consider that I
          have the ability to solve problems easily. I love frontend development
          and design with more than 3 years of experience specializing in react
          and frontend and more than 5 in the software industry
        </p>
        <AtomButton>Go to CV</AtomButton>
      </AboutContentStyled>
    </AboutContainerStyled>
  );
});

export default SectionAbout;
