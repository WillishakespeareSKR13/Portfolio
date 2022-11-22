import useRefJotai from "@Src/hooks/useRefJotai";
import { PrimaryColorAtom } from "@Src/jotai/primaryColor";
import {
  AtomButton,
  AtomText,
  AtomWrapper,
  backgroundColorFlat,
  ChangeBrightness,
  css,
  IsBackDark,
} from "@stacklycore/ui";
import { useAtomValue } from "jotai";

const About = () => {
  const primaryColor = useAtomValue(PrimaryColorAtom);
  const { ref } = useRefJotai("ABOUT");
  return (
    <AtomWrapper
      ref={ref}
      css={() => css`
        justify-content: center;
        align-items: center;
        flex-direction: row;
        height: 100vh;
        background-color: transparent;
        backdrop-filter: blur(2px);
      `}
    >
      <AtomWrapper
        css={() => css`
          max-width: 1440px;
          padding: 0px 90px;
          z-index: 1;
          background-color: transparent;
          gap: 20px;
        `}
      >
        <AtomText
          css={() => css`
            font-size: 40px;
            font-weight: 400;
          `}
        >
          <b>About</b> Me
        </AtomText>
        <AtomText
          css={() => css`
            font-size: 20px;
            font-weight: 400;
          `}
        >
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
        </AtomText>
        <AtomText
          css={() => css`
            font-size: 40px;
            font-weight: 400;
          `}
        >
          <b>See</b> My CV
        </AtomText>
        <AtomText
          css={() => css`
            font-size: 20px;
            font-weight: 400;
          `}
        >
          I am a creative person, I like to work in a team and I consider that I
          have the ability to solve problems easily. I love frontend development
          and design with more than 3 years of experience specializing in react
          and frontend and more than 5 in the software industry
        </AtomText>
        <AtomButton
          css={() => css`
            padding: 10px 30px;
            ${backgroundColorFlat(primaryColor)};
            border: 1px solid ${primaryColor};
            color: ${IsBackDark(primaryColor)} !important;
            font-weight: 700 !important;
            :hover {
              ${backgroundColorFlat(ChangeBrightness(primaryColor, -20))};
              color: ${IsBackDark(
                ChangeBrightness(primaryColor, -20)
              )} !important;
              border: 1px solid ${ChangeBrightness(primaryColor, 100)};
            }
          `}
        >
          Go to CV
        </AtomButton>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default About;
