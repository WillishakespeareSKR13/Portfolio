import {
  AtomButton,
  AtomIcon,
  AtomInput,
  AtomWrapper,
  ChangeBrightness,
  ChangeTransparency,
  colorIcon,
  css,
  IsBackDark,
  wrapperBlur,
} from "@stacklycore/ui";
import { useState, useEffect } from "react";
import { atom, useAtomValue, useAtom } from "jotai";

import Logo from "@Assets/logo.svg";
import FB from "@Assets/fb.svg";
import Linkedin from "@Assets/in.svg";
import Github from "@Assets/git.svg";
import Twitter from "@Assets/tw.svg";
import useRefJotai, { RefsAtom } from "@Src/hooks/useRefJotai";
import useIntersect from "@Src/hooks/useIntersect";
import useScroll from "@Src/hooks/useScroll";
import { PrimaryColorAtom } from "@Src/jotai/primaryColor";

const LabelsAtom = atom([
  {
    key: "HERO",
    label: "Home",
  },
  {
    key: "ABOUT",
    label: "About",
  },
  {
    key: "PROJECT",
    label: "Project",
  },
  {
    key: "CV",
    label: "CV",
  },
]);

const LabelsWithRefAtom = atom((get) =>
  get(LabelsAtom).map((label) => ({
    ...label,
    ref: get(RefsAtom)[label.key],
  }))
);

const SelectAtom = atom("HERO");
const isScrollAtom = atom(false);

const Navigation = () => {
  const { refs } = useRefJotai();
  const labelWithRef = useAtomValue(LabelsWithRefAtom);
  const primaryColor = useAtomValue(PrimaryColorAtom);
  const [select, setSelect] = useAtom(SelectAtom);
  const [isScroll, setIsScroll] = useAtom(isScrollAtom);

  useIntersect(refs, (entry) => {
    const target = entry.target as HTMLDivElement;
    const ref = refs?.find((ref) => ref.ref.current === target);
    setSelect(entry.isIntersecting ? ref?.id ?? "HERO" : select);
  });

  useScroll((scroll) => setIsScroll(scroll > 20));

  return (
    <AtomWrapper
      as="nav"
      css={(theme) => css`
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        margin-bottom: -80px;
        height: max-content;
        background-color: transparent;
        z-index: 9999;
        justify-content: center;
        align-items: center;
        ${isScroll &&
        css`
          ${wrapperBlur(
            ChangeTransparency(theme?.header?.properties?.blur, 10) ??
              ChangeTransparency("#fff", 10)
          )}
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid
            ${ChangeBrightness(theme?.header?.properties?.background, 20)};
        `};
      `}
    >
      <AtomWrapper
        css={() => css`
          max-width: 1440px;
          flex-direction: row;
          padding: 5px 90px 0px 90px;
          justify-content: space-between;
          align-items: center;
          height: 80px;
          background-color: transparent;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0);

          transition: all 0.3s ease-in-out;
        `}
      >
        <AtomWrapper
          css={() => css`
            flex-direction: row;
            width: max-content;
            background-color: transparent;
            height: 100%;
            gap: 10px;
          `}
        >
          {labelWithRef.map(({ key, ref, label }) => (
            <AtomButton
              key={key}
              onClick={() => {
                window.scrollTo({
                  top: ref?.ref?.current?.offsetTop ?? 0,
                  behavior: "smooth",
                });
              }}
              css={() => css`
                background-color: transparent;
                padding: 0px 30px;
                height: 100%;
                font-size: 12px;
                border-radius: 0px;
                border: 2px solid transparent;
                border-bottom: 2px solid transparent;
                :hover {
                  ${wrapperBlur(
                    ChangeTransparency(primaryColor, 10) ??
                      ChangeTransparency("#fff", 10)
                  )}
                  border: 2px solid ${primaryColor};
                }

                ${key === select &&
                css`
                  border-bottom: 2px solid ${primaryColor};
                `}
              `}
            >
              {label}
            </AtomButton>
          ))}
        </AtomWrapper>
        <Logo />
        <AtomInput
          input={{
            placeholder: "Search",
          }}
        />
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default Navigation;
