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
    url: "https://www.linkedin.com/in/willskr/",
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

        ::after {
          content: "";
          position: absolute;
          top: 0px;
          border-radius: 10px;
          background-color: ${primaryColor};
          height: 2px;
          width: 50%;
          width: ${(timer?.timer * 100) / timer?.end}%;
          transition: all 0.98s linear;
          z-index: 9999;
        }
      `}
    >
      <AtomWrapper
        css={() => css`
          max-width: 1440px;
          flex-direction: row;
          padding: 0px 90px;
          @media (max-width: 600px) {
            padding: 0px 40px;
          }
          justify-content: space-between;
          align-items: center;
          height: max-content;
          background-color: transparent;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0);

          transition: all 0.3s ease-in-out;
          display: grid;
          grid-template-columns: 280px 180px 280px;
          gap: 20px;
          @media (max-width: 1024px) {
            display: flex;
            flex-direction: column-reverse;
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 15px 0px 0px 0px;
          }
        `}
      >
        <AtomWrapper
          css={() => css`
            flex-direction: row;
            background-color: transparent;
            height: 100%;
            gap: 10px;
            width: 100%;
            @media (max-width: 1024px) {
              justify-content: center;
              align-items: center;
            }
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
                padding: 0px 10px;
                height: 100%;
                height: 65px;
                font-size: 12px;
                border-radius: 0px;
                border: 1px solid transparent;
                border-bottom: 2px solid transparent;

                :hover {
                  :after {
                    opacity: 1;
                  }
                  ${wrapperBlur(
                    ChangeTransparency(primaryColor, 10) ??
                      ChangeTransparency("#fff", 10)
                  )}
                  border: 1px solid transparent;
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
            width: 100%;
            height: 30px;
            justify-self: center;
            justify-content: center;
            align-items: center;
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
            width: 100%;
            justify-content: flex-end;
            @media (max-width: 1024px) {
              justify-content: center;
              align-items: center;
            }
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
