import AtomSeo from "@Src/components/AtomSeo";
import About from "@Src/components/about";
import Contact from "@Src/components/contact";
import Hero from "@Src/components/hero";
import Projects from "@Src/components/projects";
import { FC } from "react";

type Props = {};

const Home: FC<Props> = () => {
  return (
    <>
      <AtomSeo
        title="Welcome to my portfolio"
        content=" I'm a full-stack developer with a passion for building beautiful and functional user experiences. I'm currently working as a freelancer and looking for new opportunities."
        description="Hi My Name is William Jesus I'm a Senior Software Engineer with over 10 years of experience building web applications. I'm a full-stack developer with a passion for building beautiful and functional user experiences. I'm currently working as a freelancer and looking for new opportunities."
        image="/images/faces.png"
        url="https://www.willskr.com/"
      />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
