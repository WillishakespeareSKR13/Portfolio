import { FC, RefObject, useEffect, useState } from "react";
import {
  LabelLiStyled,
  NavigationContainerStyled,
  NavigationSocialContainerStyled,
  NavigationStyled,
  NavigationUlStyled,
} from "./styled";
import Logo from "@Assets/logo.svg";
import FB from "@Assets/fb.svg";
import Linkedin from "@Assets/in.svg";
import Github from "@Assets/git.svg";
import Twitter from "@Assets/tw.svg";

export type Props = {
  scroll?: boolean;
  valueKey?: string;
  refs?: RefObject<HTMLDivElement>[];
};

const LABELS = [
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
];

const OrganimNavigation: FC<Props> = (props) => {
  const { valueKey, refs } = props;
  const [scroll, setScroll] = useState(true);

  const getScroll = () => {
    setScroll(window.scrollY > 100);
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener(`scroll`, getScroll, true);
    }
    watchScroll();
    return () => {
      window.removeEventListener(`scroll`, getScroll, true);
    };
  });
  return (
    <NavigationStyled scroll={scroll}>
      <NavigationContainerStyled>
        <NavigationUlStyled>
          {LABELS.map(({ key, label }) => (
            <LabelLiStyled
              key={key}
              active={key === valueKey}
              onClick={() => {
                const findRef = refs?.find((ref) => ref?.current?.id === key);
                window.scrollTo({
                  top: (findRef?.current?.offsetTop ?? 0) + -90,
                  behavior: "smooth",
                });
              }}
            >
              {label}
            </LabelLiStyled>
          ))}
        </NavigationUlStyled>
        <Logo />
        <NavigationSocialContainerStyled>
          <button>
            <FB />
          </button>
          <button>
            <Linkedin />
          </button>
          <button>
            <Github />
          </button>
          <button>
            <Twitter />
          </button>
        </NavigationSocialContainerStyled>
      </NavigationContainerStyled>
    </NavigationStyled>
  );
};

export default OrganimNavigation;
