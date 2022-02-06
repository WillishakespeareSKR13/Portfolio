import OrganimNavigation from "@Src/components/organims/nav";
import SectionAbout from "@Src/components/section/about";
import SectionHero from "@Src/components/section/hero";
import { FC } from "react";

type Props = {};

const Home: FC<Props> = () => {
  return (
    <>
      <OrganimNavigation />
      <SectionHero />
      <SectionAbout />
    </>
  );
};

export default Home;
