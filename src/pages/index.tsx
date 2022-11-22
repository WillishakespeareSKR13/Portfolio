import About from "@Src/components/about";
import Hero from "@Src/components/hero";
import useRefJotai from "@Src/hooks/useRefJotai";
import { AtomText, AtomWrapper, css } from "@stacklycore/ui";
import { FC } from "react";

type Props = {};

const Home: FC<Props> = () => {
  const { ref: ref3 } = useRefJotai("PROJECT");
  const { ref: ref4 } = useRefJotai("CV");
  return (
    <>
      <Hero />
      <About />
      {[ref3, ref4].map((key, idx) => (
        <AtomWrapper
          key={`key-${idx}`}
          ref={key}
          css={() => css`
            height: 100vh;
          `}
        >
          <AtomText>asdsd</AtomText>
        </AtomWrapper>
      ))}
    </>
  );
};

export default Home;
