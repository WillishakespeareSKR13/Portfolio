import About from "@Src/components/about";
import Contact from "@Src/components/contact";
import Hero from "@Src/components/hero";
import Projects from "@Src/components/projects";
import { FC } from "react";

type Props = {};

const Home: FC<Props> = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
