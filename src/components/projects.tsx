import useRefJotai from "@Src/hooks/useRefJotai";
import useTimer from "@Src/hooks/useTimer";
import { PrimaryColorAtom } from "@Src/jotai/primaryColor";
import {
  EnumDirection,
  ProjectAtom,
  ProjectImagesAtom,
} from "@Src/jotai/projects";
import { AtomButton, AtomText, AtomWrapper, css } from "@stacklycore/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";

const Projects = () => {
  const primaryColor = useAtomValue(PrimaryColorAtom);
  const { ref, refs } = useRefJotai("PROJECT");
  const [project, setProject] = useAtom(ProjectAtom);
  const [projectImages, setProjectImages] = useAtom(ProjectImagesAtom);

  const { setTimer } = useTimer({
    key: "PROJECT",
    end: 30,
    callback: () => {
      setProject(
        project?.key >= project?.projects.length - 1 ? 0 : project?.key + 1
      );
      setTimer(() => 0);
    },
  });

  const { setTimer: setTimerImages } = useTimer({
    key: "IMAGES",
    end: 8,
    callback: () => {
      setProjectImages("LEFT");
      setTimerImages(() => 0);
    },
  });

  return (
    <AtomWrapper
      ref={ref}
      css={() => css`
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
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
              cursor: pointer;
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
      <AtomWrapper
        css={() => css`
          padding: 40px 0px;
          align-items: center;
          justify-content: center;
          background-color: #000000c0;
          backdrop-filter: blur(2px);
          gap: 20px;
        `}
      >
        <AtomWrapper
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              setProjectImages("LEFT");
            } else if (swipe > swipeConfidenceThreshold) {
              setProjectImages("RIGHT");
            }
          }}
          css={() => css`
            position: relative;
            width: max-content;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            img {
              object-fit: cover;
              width: 80vw;
              height: calc(80vw * 0.4);
            }
          `}
        >
          {projectImages?.sorted?.map((e) => (
            <AnimatePresence mode="wait" custom={projectImages?.direction}>
              <motion.img
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                key={e.id}
                custom={projectImages?.direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                src={e?.image}
              />
            </AnimatePresence>
          ))}
          <AtomButton
            disabledAnimation
            css={() => css`
              padding: 10px 20px;
              background-color: transparent;
              border: 1px solid transparent;
              position: absolute;
              z-index: 1;
              top: 50%;
              left: calc(50% - 50vw + 4px);
              transform: translateY(-50%);
              transition: all 0.3s ease-in-out;
            `}
            onClick={() => {
              setProjectImages("RIGHT");
            }}
          >
            {`<`}
          </AtomButton>
          <AtomButton
            css={() => css`
              padding: 10px 20px;
              background-color: transparent;
              border: 1px solid transparent;
              position: absolute;
              z-index: 1;
              top: 50%;
              right: calc(50% - 50vw);
              transform: translateY(-50%);
              transition: all 0.3s ease-in-out;
            `}
            onClick={() => {
              setProjectImages("LEFT");
            }}
          >
            {`>`}
          </AtomButton>
        </AtomWrapper>
        <AtomWrapper
          css={() => css`
            max-width: 1440px;
            padding: 0px 90px;
            z-index: 1;
            background-color: transparent;
            gap: 10px;
          `}
        >
          <AtomWrapper>
            <AtomText>{project?.project?.title}</AtomText>
            <AtomText>{project?.project?.description}</AtomText>
          </AtomWrapper>
          <AtomWrapper
            css={() => css`
              flex-direction: row;
              gap: 20px;
            `}
          >
            {project?.projects?.map((e) => (
              <AtomWrapper
                key={e.id}
                onHoverStart={() => {
                  setProject(e.position);
                  setTimer(() => 0);
                  setTimerImages(() => 0);
                }}
                css={() => css`
                  width: 200px;
                  height: 200px;
                  background-color: red;
                `}
              >
                <AtomText>{e.title}</AtomText>
              </AtomWrapper>
            ))}
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default Projects;

const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  enter: (direction: EnumDirection) => {
    return {
      x: direction === "RIGHT" ? -100 : 100,
      filter: "blur(10px)",
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    filter: "blur(0px)",
    opacity: 1,
  },
  exit: (direction: EnumDirection) => {
    return {
      zIndex: 0,
      filter: "blur(10px)",
      x: direction === "RIGHT" ? 100 : -100,
      opacity: 0,
    };
  },
};
