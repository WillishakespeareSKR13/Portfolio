import {
  AtomButton,
  AtomInput,
  AtomLink,
  AtomText,
  AtomWrapper,
  backgroundColorInput,
  css,
} from "@stacklycore/ui";
import useRefJotai from "@Src/hooks/useRefJotai";
import { useAtomValue } from "jotai";
import { SelectAtom } from "@Src/jotai/labels";
import { PrimaryColorAtom } from "@Src/jotai/primaryColor";
import Logo from "@Assets/logo.svg";

import { Urls } from "./navigation";
import { motion } from "framer-motion";
import { ButtonFlatCSS } from "@Src/css/button";

const Contact = () => {
  const primaryColor = useAtomValue(PrimaryColorAtom);
  const select = useAtomValue(SelectAtom);
  const { ref, refs } = useRefJotai("CONTACT");

  return (
    <AtomWrapper
      ref={ref}
      as="section"
      css={() => css`
        justify-content: center;
        align-items: center;
        height: max-content;
        justify-content: space-between;
        min-height: max-content;
      `}
    >
      <AtomWrapper
        css={() => css`
          position: relative;
          max-width: 1440px;
          padding: 40px 90px 40px 90px;
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
          <b>Contact</b>
        </AtomText>

        <AtomText
          css={() => css`
            font-size: 16px;
            font-weight: 400;
            b {
              cursor: pointer;
              color: ${primaryColor};
              transition: all 0.3s ease-in-out;
            }
            transition: all 0.3s ease-in-out;
          `}
        >
          Any question you have or something you want to share with me,
          <br /> you can email me at <b>skr13@outlook.com</b> or find me in this
          accounts:
        </AtomText>
        <AtomWrapper
          css={() => css`
            flex-direction: row;
            width: max-content;
            background-color: transparent;
            gap: 40px;
          `}
        >
          {Urls.map(({ icon, url }) => (
            <AtomLink
              href={url}
              css={() => css`
                cursor: pointer;
                svg {
                  height: 18px;
                }
              `}
              target="_blank"
            >
              {icon}
            </AtomLink>
          ))}
        </AtomWrapper>
        <AtomWrapper
          css={(theme) => css`
            gap: 20px;
            label {
              width: 100%;
              input {
                width: 100%;
                ${backgroundColorInput(
                  theme?.input?.properties?.background ?? "#ffffff",
                  primaryColor
                )}
              }
            }
            .textarea {
              width: 100%;
              position: relative;
              display: flex;
              flex-direction: column;
              gap: 5px;
              span {
                padding: 0px 0px 4px 0px;
                font-family: "Inter", sans-serif;
                font-size: 12px;
                font-weight: 600;
                color: ${theme.input?.properties?.label ?? "#222222"};
              }
              textarea {
                font-family: "Inter", sans-serif;
                font-size: 12px;
                font-weight: 600;
                margin: 0px 0px 0px 0px;
                padding: 15px;
                height: 250px;
                width: 100%;
                border-radius: 4px;
                ${backgroundColorInput(
                  theme?.input?.properties?.background ?? "#ffffff",
                  primaryColor
                )}
              }
            }
          `}
        >
          <AtomWrapper
            css={() => css`
              width: 100%;
              gap: 20px;
              flex-direction: row;
            `}
          >
            <AtomInput labeltext="Name" />
            <AtomInput labeltext="Subject" />
          </AtomWrapper>
          <AtomInput labeltext="Email" />
          <motion.label className="textarea">
            <motion.span>Type your message here</motion.span>
            <motion.textarea />
          </motion.label>
          <AtomButton
            css={() => css`
              ${ButtonFlatCSS(primaryColor)}
              padding: 8px 30px;
            `}
          >
            Send
          </AtomButton>
        </AtomWrapper>
        <AtomWrapper
          css={() => css`
            padding: 20px 0px 10px 0px;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            svg {
              width: max-content;
              height: 60px;
            }
          `}
        >
          <Logo />
        </AtomWrapper>
      </AtomWrapper>

      <AtomWrapper
        css={() => css`
          width: 100%;
          height: 40px;
          background-color: ${primaryColor};
          ::before {
            content: "";
            width: 100%;
            height: 100%;
            background: linear-gradient(
              -90deg,
              #000000 0%,
              #000000 5%,
              transparent 50%,
              #000000 95%,
              #000000 100%
            );
            transition: all 0.25s ease-in-out;
          }
          transition: all 0.25s ease-in-out;
        `}
      />
    </AtomWrapper>
  );
};

export default Contact;
