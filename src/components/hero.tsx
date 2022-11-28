import LogoBackground from "@Assets/logoBackground.svg";
import {
  AtomButton,
  AtomText,
  AtomWrapper,
  ChangeBrightness,
  ChangeTransparency,
  css,
} from "@stacklycore/ui";
import useRefJotai from "@Src/hooks/useRefJotai";
import { useAtomValue } from "jotai";
import { AnimatePresence, motion } from "framer-motion";
import { SelectAtom } from "@Src/jotai/labels";
import { PrimaryColorAtom } from "@Src/jotai/primaryColor";
import { ButtonFlatCSS, ButtonOutlinedCSS } from "@Src/css/button";

const Hero = () => {
  const primaryColor = useAtomValue(PrimaryColorAtom);
  const select = useAtomValue(SelectAtom);
  const { ref, refs } = useRefJotai("HERO");

  return (
    <AtomWrapper
      ref={ref}
      as="section"
      css={() => css`
        justify-content: center;
        align-items: center;
        flex-direction: row;
        height: max-content;
        min-height: 100vh;
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
        <AnimatePresence mode="wait">
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
            disabledAnimation
            onClick={() => {
              const ProjectRef =
                refs?.find((e) => e.id === "PROJECT")?.ref?.current
                  ?.offsetTop ?? 0;
              window.scrollTo({
                top: ProjectRef - 120,
                behavior: "smooth",
              });
            }}
            css={() => css`
              ${ButtonFlatCSS(primaryColor)}
            `}
          >
            See my projects
          </AtomButton>
          <AtomButton
            onClick={() => {
              window.open(
                "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/pdf/CovarrubiasRamosWilliamCV_English.pdf",
                "_blank"
              );
            }}
            disabledAnimation
            css={() => css`
              ${ButtonOutlinedCSS(primaryColor)}
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
            height: 300vh;
            background: ${primaryColor};
            box-shadow: 0px 0 8px ${primaryColor};
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
