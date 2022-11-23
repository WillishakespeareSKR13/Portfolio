import useRefJotai from "@Src/hooks/useRefJotai";
import { PrimaryColorAtom } from "@Src/jotai/primaryColor";
import { AtomLink, AtomText, AtomWrapper, css } from "@stacklycore/ui";
import { useAtomValue } from "jotai";

const Projects = () => {
  const primaryColor = useAtomValue(PrimaryColorAtom);
  const { ref, refs } = useRefJotai("PROJECT");
  return (
    <AtomWrapper
      ref={ref}
      css={() => css`
        position: relative;
        justify-content: center;
        align-items: flex-start;
        flex-direction: row;
        height: 100vh;
        background-color: #000000c0;
        backdrop-filter: blur(2px);
      `}
    >
      <AtomWrapper
        css={() => css`
          max-width: 1440px;
          padding: 0px 90px;
          z-index: 1;
          background-color: transparent;
          gap: 20px;
        `}
      >
        <AtomText
          css={() => css`
            font-size: 40px;
            font-weight: 400;
          `}
        >
          <b>Projects</b>
        </AtomText>
        <AtomText
          css={() => css`
            font-size: 16px;
            font-weight: 400;
            b {
              color: ${primaryColor};
              transition: all 0.3s ease-in-out;
            }
            transition: all 0.3s ease-in-out;
          `}
        >
          These are some of the projects I have worked on.
          <br />
          If you like some of them, or you want work in a project with me,
          please{" "}
          <b
            onClick={() => {
              window.scrollTo({
                top:
                  (refs?.find((e) => e.id === "CONTACT")?.ref?.current
                    ?.offsetTop ?? 0) + -120,
                behavior: "smooth",
              });
            }}
          >
            contact me
          </b>
        </AtomText>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default Projects;
