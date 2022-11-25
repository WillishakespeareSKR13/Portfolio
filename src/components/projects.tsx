import useRefJotai from "@Src/hooks/useRefJotai";
import useTimer from "@Src/hooks/useTimer";
import { PrimaryColorAtom } from "@Src/jotai/primaryColor";
import {
  EnumDirection,
  ProjectAtom,
  ProjectImagesAtom,
} from "@Src/jotai/projects";
import {
  AtomButton,
  AtomText,
  AtomWrapper,
  ChangeTransparency,
  css,
} from "@stacklycore/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom, useAtomValue } from "jotai";

const Projects = () => {
  const primaryColor = useAtomValue(PrimaryColorAtom);
  const { ref, refs } = useRefJotai("PROJECT");
  const [project, setProject] = useAtom(ProjectAtom);
  const [projectImages, setProjectImages] = useAtom(ProjectImagesAtom);

  const { setTimer, timer } = useTimer({
    key: "PROJECT",
    end: 30,
    callback: () => {
      setProject(
        project?.key >= project?.projects.length - 1 ? 0 : project?.key + 1
      );
      setTimer(() => 0);
    },
  });

  const { setTimer: setTimerImages, timer: timerImages } = useTimer({
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
          width: 100%;
          max-width: 1440px;
          padding: 20px 90px;
          align-items: center;
          justify-content: center;
          background-color: #000000c0;
          backdrop-filter: blur(2px);
          gap: 20px;
          hr {
            filter: blur(1px);
            opacity: 0.3;
            width: 100%;
            height: 1px;
            background-color: transparent;
            border: 1px solid ${primaryColor};
            transition: all 0.3s ease-in-out;
          }
          transition: all 0.3s ease-in-out;
        `}
      >
        <hr />
        <AtomWrapper
          css={() => css`
            background-color: transparent;
          `}
        >
          <AtomText
            css={() => css`
              font-size: 30px;
              font-weight: 600;
            `}
          >
            {project?.project?.title}
          </AtomText>
          <AtomText
            css={() => css`
              font-size: 12px;
              margin-bottom: 2px;
            `}
          >
            {project?.project?.technologies.join(", ")}
          </AtomText>
          <AtomText
            css={() => css`
              font-size: 14px;
            `}
          >
            {project?.project?.description}
          </AtomText>
        </AtomWrapper>
        <AtomWrapper
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              setProjectImages("LEFT");
              setTimerImages(() => 0);
            } else if (swipe > swipeConfidenceThreshold) {
              setProjectImages("RIGHT");
              setTimerImages(() => 0);
            }
          }}
          css={() => css`
            position: relative;
            width: max-content;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            background-color: transparent;
            gap: 40px;
            height: calc(80vw * 0.4);
            img {
              object-fit: cover;
              width: 70vw;
              height: 100%;
              border-radius: 4px;
              border: 2px solid #00000000;
              box-shadow: 0px 0px 20px 0px #000000c0;
              border: 2px solid ${ChangeTransparency(primaryColor, 40)};
              box-shadow: 0px 0px 20px 0px
                ${ChangeTransparency(primaryColor, 20)};
              transition: box-shadow 0.3s ease-in-out;
            }
            img:nth-of-type(2) {
              border: 2px solid ${primaryColor};
              box-shadow: 0px 0px 20px 0px
                ${ChangeTransparency(primaryColor, 50)};
              opacity: 1 !important;
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
                  opacity: { duration: 0.2 },
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
              setTimerImages(() => 0);
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
              setTimerImages(() => 0);
            }}
          >
            {`>`}
          </AtomButton>
        </AtomWrapper>
        <AtomWrapper
          css={() => css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 70vw;
            max-width: 1440px;
            z-index: 1;
            height: 2px;
            border-radius: 10px;
            background-color: #1a1a1ac0;
            gap: 10px;
            filter: blur(1px);
            ::before {
              content: "";
              border-radius: 10px;
              background-color: ${primaryColor};
              box-shadow: 0px 0px 5px 1px
                ${ChangeTransparency(primaryColor, 50)};
              height: 1px;
              width: ${(timerImages?.timer * 100) / timerImages?.end}%;
              transition: all 0.98s linear;
            }
          `}
        />

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
                justify-content: center;
                align-items: center;
                flex-basis: 200px;
                flex-grow: 1;
                height: 140px;
                background-color: transparent;
                border-radius: 4px;
                border: 2px solid ${ChangeTransparency(primaryColor, 40)};
                ${e.position === project.key &&
                css`
                  border: 2px solid ${primaryColor};
                  background-color: ${ChangeTransparency(primaryColor, 20)};
                  backdrop-filter: blur(10px);
                  box-shadow: 0px 0px 20px 0px
                    ${ChangeTransparency(primaryColor, 50)};
                `}
              `}
            >
              <AtomText
                css={() => css`
                  font-size: 18px;
                `}
              >
                {e.title}
              </AtomText>
            </AtomWrapper>
          ))}
        </AtomWrapper>
        <AtomWrapper
          css={() => css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            z-index: 1;
            height: 2px;
            border-radius: 10px;
            background-color: #1a1a1ac0;
            gap: 10px;
            filter: blur(1px);
            ::before {
              content: "";
              border-radius: 10px;
              background-color: ${primaryColor};
              box-shadow: 0px 0px 5px 1px
                ${ChangeTransparency(primaryColor, 50)};
              height: 1px;
              width: ${(timer?.timer * 100) / timer?.end}%;
              transition: all 0.98s linear;
            }
          `}
        />
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
      x: direction === "RIGHT" ? -200 : 200,
      filter: "blur(10px)",
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    filter: "blur(0px)",
    opacity: 0.3,
  },
  exit: (direction: EnumDirection) => {
    return {
      zIndex: 0,
      filter: "blur(10px)",
      x: direction === "RIGHT" ? 200 : -200,
      opacity: 0,
    };
  },
};
