import {
  AtomButton,
  AtomLink,
  AtomWrapper,
  ChangeBrightness,
  ChangeTransparency,
  css,
  wrapperBlur,
} from "@stacklycore/ui";
import { atom, useAtomValue, useAtom } from "jotai";

import Logo from "@Assets/logo.svg";
import FB from "@Assets/fb.svg";
import Linkedin from "@Assets/in.svg";
import Github from "@Assets/git.svg";
import Twitter from "@Assets/tw.svg";
import useRefJotai, { RefsAtom } from "@Src/hooks/useRefJotai";
import useIntersect from "@Src/hooks/useIntersect";
import { PrimaryColorAtom } from "@Src/jotai/primaryColor";
import useChangeKey from "@Src/hooks/useChangeKey";

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
    key: "CONTACT",
    label: "Contact",
  },
]);

const LabelsWithRefAtom = atom((get) =>
  get(LabelsAtom).map((label) => ({
    ...label,
    ref: get(RefsAtom)[label.key],
  }))
);

const SelectAtom = atom("HERO");

export const Urls = [
  {
    icon: <FB />,
    url: "https://www.facebook.com/willishakespeare13/",
  },
  {
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/william-jesus-covarrubias-ramos-84410339/",
  },
  {
    icon: <Github />,
    url: "https://github.com/WillishakespeareSKR13",
  },
  {
    icon: <Twitter />,
    url: "https://twitter.com/William36924486",
  },
];

const Navigation = () => {
  const { refs } = useRefJotai();
  const labelWithRef = useAtomValue(LabelsWithRefAtom);
  const primaryColor = useAtomValue(PrimaryColorAtom);
  const [select, setSelect] = useAtom(SelectAtom);

  useIntersect(refs, (entry) => {
    const target = entry.target as HTMLDivElement;
    const ref = refs?.find((ref) => ref.ref.current === target);
    setSelect(entry.isIntersecting ? ref?.id ?? "HERO" : select);
  });

  const { timer } = useChangeKey();

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

        ${wrapperBlur(
          ChangeTransparency(theme?.header?.properties?.blur, 10) ??
            ChangeTransparency("#fff", 10)
        )}
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid
          ${ChangeBrightness(theme?.header?.properties?.background, 20)};

        ::before {
          content: "";
          filter: blur(1px);
          border-radius: 10px;
          background-color: ${primaryColor};
          box-shadow: 0px 0px 5px 1px ${ChangeTransparency(primaryColor, 80)};
          height: 1px;
          width: ${(timer?.timer * 100) / timer?.end}%;
          transition: all 0.98s linear;
        }
      `}
    >
      <AtomWrapper
        css={() => css`
          max-width: 1440px;
          flex-direction: row;
          padding: 0px 90px 0px 90px;
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
              disabledAnimation
              onClick={() => {
                window.scrollTo({
                  top: (ref?.ref?.current?.offsetTop ?? 0) + -120,
                  behavior: "smooth",
                });
              }}
              css={() => css`
                transition: all 0.2s ease;
                position: relative;
                background-color: transparent;
                padding: 0px 30px;
                height: 100%;
                font-size: 12px;
                border-radius: 0px;
                border: 2px solid transparent;
                border-bottom: 2px solid transparent;

                :after {
                  content: "";
                  position: absolute;
                  bottom: -4px;
                  left: 0px;
                  width: 100%;
                  height: 2px;
                  background-color: ${primaryColor};
                  filter: blur(4px);
                  box-shadow: 0px 2px 10px 0px ${primaryColor};
                  opacity: 0;
                }
                :hover {
                  :after {
                    opacity: 1;
                  }
                  ${wrapperBlur(
                    ChangeTransparency(primaryColor, 10) ??
                      ChangeTransparency("#fff", 10)
                  )}
                  border: 2px solid transparent;
                  border-bottom: 2px solid ${primaryColor};
                }

                ${key === select &&
                css`
                  border-bottom: 2px solid ${primaryColor};
                  :after {
                    opacity: 1;
                  }
                `}
              `}
            >
              {label}
            </AtomButton>
          ))}
        </AtomWrapper>
        <AtomWrapper
          css={() => css`
            width: 180px;
            background-color: transparent;
          `}
        >
          <Logo />
        </AtomWrapper>
        <AtomWrapper
          css={() => css`
            flex-direction: row;
            width: max-content;
            background-color: transparent;
            gap: 40px;
            padding: 0px 40px;
          `}
        >
          {Urls.map(({ icon, url }) => (
            <AtomLink
              href={url}
              css={() => css`
                cursor: pointer;
                background-color: transparent;
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
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default Navigation;
