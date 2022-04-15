import styled from "@emotion/styled";
import OrganimNavigation from "@Src/components/organims/nav";
import SectionAbout from "@Src/components/section/about";
import SectionHero from "@Src/components/section/hero";
import Observer from "@Src/hook/observerHook";
import { FC, useEffect, useMemo, useRef, useState } from "react";

type Props = {};

const Home: FC<Props> = () => {
  const [Select, setSelect] = useState<string>("HERO");
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

  const refs = [ref1, ref2, ref3, ref4];

  Observer(refs, (entry) => {
    const target = entry.target as HTMLDivElement;
    if (entry.isIntersecting) {
      setSelect(`${target.id}`);
    }
  });

  return (
    <>
      <OrganimNavigation valueKey={Select} refs={refs} />
      <SectionHero ref={ref1} id="HERO" />
      <SectionAbout ref={ref2} id="ABOUT" />
      <SectionAbout ref={ref3} id="PROJECT" />
      <SectionAbout ref={ref4} id="CV" />
    </>
  );
};

export default Home;
