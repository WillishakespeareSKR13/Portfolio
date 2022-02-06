import { FC, useEffect, useState } from "react";
import {
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
};

const OrganimNavigation: FC<Props> = () => {
  const [scroll, setScroll] = useState(false);

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
  console.log(scroll);
  return (
    <NavigationStyled scroll={scroll}>
      <NavigationContainerStyled>
        <NavigationUlStyled>
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>CV</li>
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
