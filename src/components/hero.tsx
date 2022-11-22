import LogoBackground from "@Assets/logoBackground.svg";
import {
  AtomButton,
  AtomText,
  AtomWrapper,
  backgroundColorFlat,
  backgroundColorOutline,
  ChangeBrightness,
  ChangeTransparency,
  css,
  IsBackDark,
} from "@stacklycore/ui";
import useRefJotai from "@Src/hooks/useRefJotai";
import { useAtomValue } from "jotai";
import { AnimatePresence, motion } from "framer-motion";
import { SelectAtom } from "@Src/jotai/labels";
import { PrimaryColorAtom } from "@Src/jotai/primaryColor";

const Hero = () => {
  const primaryColor = useAtomValue(PrimaryColorAtom);
  const select = useAtomValue(SelectAtom);
  const { ref } = useRefJotai("HERO");

  return (
    <AtomWrapper
      ref={ref}
      as="section"
      css={() => css`
        justify-content: center;
        align-items: center;
        flex-direction: row;
        height: 100vh;
      `}
    >
      <AtomWrapper
        css={() => css`
          position: relative;
          max-width: 1440px;
          padding: 0px 90px;
          z-index: 1;
          background-color: transparent;
          gap: 20px;
          .logoBack {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(-20%, -40%);
            margin: auto 0 auto auto;
            height: 80vh;
            z-index: -1;
            filter: blur(30px);
            path {
              fill: ${ChangeTransparency(primaryColor, 20)};
              stroke: ${ChangeTransparency(primaryColor, 20)};
            }
          }
        `}
      >
        <AnimatePresence exitBeforeEnter>
          <AtomText
            as="p"
            key={select}
            css={() => css`
              font-size: 44px;
              font-weight: 400;
              b {
                font-weight: 700;
              }

              transform: all 0.25s ease-in-out;
            `}
          >
            My Name is <b>William</b>
            <br />
            <AtomText
              css={() => css`
                font-size: 44px;
                span {
                  font-size: 44px;
                  font-weight: 700;
                  color: ${primaryColor};
                }
              `}
            >
              Senior
              <motion.span
                key={select}
                initial={{ marginLeft: 0, opacity: 0, filter: "blur(10px)" }}
                animate={{ marginLeft: 20, opacity: 1, filter: "blur(0px)" }}
                exit={{ marginLeft: 40, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {select}
              </motion.span>
            </AtomText>
            <br />
            <b>Team</b> Leader
          </AtomText>
        </AnimatePresence>
        <AtomWrapper
          css={() => css`
            flex-direction: row;
            background-color: transparent;
            gap: 20px;
            height: 40px;
          `}
        >
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
            See my projects
          </AtomButton>
          <AtomButton
            css={() => css`
              padding: 10px 30px;
              ${backgroundColorOutline(primaryColor)};
              border: 2px solid ${primaryColor};
              color: ${primaryColor} !important;
              font-weight: 700 !important;
              :hover {
                ${backgroundColorOutline(ChangeBrightness(primaryColor, -20))};
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
        <LogoBackground className="logoBack" />
      </AtomWrapper>
      <AtomWrapper
        css={() => css`
          position: absolute;
          justify-content: center;
          align-items: center;
          right: 0;
          height: 100%;
          width: 120%;
          margin: 0 -80% 0 0;
          transform: skew(-30deg, 0deg);
          background: ${ChangeBrightness(primaryColor, -50)};
          transition: all 0.3s ease-in-out;
          :before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 2px;
            height: 999999%;
            background: ${primaryColor};
            z-index: 1;
            transition: all 0.3s ease-in-out;
          }
          :after {
            position: absolute;
            content: "";
            right: 0;
            bottom: 0;
            height: 50%;
            width: 100%;
            transform: skew(0deg, 0deg);
            background: linear-gradient(
              180deg,
              transparent,
              #000000a8 50%,
              #000000 100%
            );
          }
          z-index: 0;

          transition: all 0.3s ease-in-out;
        `}
      />
    </AtomWrapper>
  );
};

export default Hero;
