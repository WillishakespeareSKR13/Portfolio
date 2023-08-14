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
  AtomLink,
  AtomText,
  AtomWrapper,
  ChangeBrightness,
  ChangeTransparency,
  css,
} from "@stacklycore/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom, useAtomValue } from "jotai";
import GithubIcon from "@Src/assets/git.svg";
import WebIcon from "@Src/assets/web.svg";

const Projects = () => {
  const primaryColor = useAtomValue(PrimaryColorAtom);
  const { ref, refs } = useRefJotai("PROJECT");
  const [project, setProject] = useAtom(ProjectAtom);
  const [projectImages, setProjectImages] = useAtom(ProjectImagesAtom);

  const { setTimer, timer } = useTimer({
    key: "PROJECT",
    end: 40,
    callback: () => {
      setProject(
        project?.key >= project?.projects.length - 1 ? 0 : project?.key + 1
      );
      setTimer(() => 0);
    },
  });

  const { setTimer: setTimerImages, timer: timerImages } = useTimer({
    key: "IMAGES",
    end: 12,
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
        height: max-content;
        min-height: 100vh;
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
              font-size: 14px;
              margin-bottom: 2px;
            `}
          >
            {project?.project?.technologies.join(", ")}
          </AtomText>
          <AtomText
            css={() => css`
              font-size: 16px;
            `}
          >
            {project?.project?.description}
          </AtomText>
          <AtomWrapper
            css={() => css`
              padding: 10px 0px;
              flex-direction: row;
              gap: 15px;
              a {
                cursor: pointer;
                svg {
                  width: 22px;
                  height: 22px;
                }
              }
            `}
          >
            {project?.project?.github === "PRIVATE" ? (
              <></>
            ) : (
              <AtomLink href={project?.project?.github} target="_blank">
                <GithubIcon />
              </AtomLink>
            )}
            <AtomLink href={project?.project?.link} target="_blank">
              <WebIcon />
            </AtomLink>
          </AtomWrapper>
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
            height: calc(100vh * 0.45);
            img {
              object-fit: cover;
              width: 70vw;
              height: 100%;
              border: 1px solid ${ChangeTransparency(primaryColor, 40)};
              transition: box-shadow 0.3s ease-in-out;
              object-position: center center;
              object-fit: cover;
            }
            img:nth-of-type(2) {
              border: 1px solid ${primaryColor};
            }
          `}
        >
          {projectImages?.sorted?.map((e) => (
            <AnimatePresence
              mode="wait"
              custom={{
                direction: projectImages?.direction,
                isPrincipal: e?.position === projectImages?.sorted[1]?.position,
              }}
            >
              <motion.img
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                key={e.id}
                custom={{
                  direction: projectImages?.direction,
                  isPrincipal:
                    e?.position === projectImages?.sorted[1]?.position,
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.14 },
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
            ::before {
              content: "";
              border-radius: 10px;
              background-color: ${primaryColor};
              height: 1px;
              width: ${(timerImages?.timer * 100) / timerImages?.end}%;
              transition: all 0.98s linear;
            }
          `}
        />

        <AtomWrapper
          css={() => css`
            flex-direction: row;
            flex-wrap: wrap;
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
                flex-basis: 150px;
                flex-grow: 1;
                height: 140px;
                background-color: transparent;
                cursor: pointer;
                background-image: url(${e.image});
                background-size: cover;
                background-position: center center;
                transition: all 0.3s ease-in-out;
              `}
            >
              <AtomWrapper
                css={() => css`
                  background-color: #0000006e;
                  width: 100%;
                  height: 100%;
                  justify-content: center;
                  align-items: center;
                  backdrop-filter: blur(2px);
                  border: 1px solid ${ChangeTransparency(primaryColor, 40)};
                  ${e.position === project.key &&
                  css`
                    border: 1px solid ${primaryColor};
                    background-color: ${ChangeTransparency(
                      ChangeBrightness(primaryColor, -200),
                      60
                    )};
                  `}
                `}
              >
                <AtomText
                  css={() => css`
                    font-size: 18px;
                    font-weight: 600;
                    ${e.position === project.key &&
                    css`
                      color: ${primaryColor};
                    `}
                  `}
                >
                  {e.title}
                </AtomText>
              </AtomWrapper>
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
            ::before {
              content: "";
              border-radius: 10px;
              background-color: ${primaryColor};

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

type VariantsProps = {
  direction: EnumDirection;
  isPrincipal: boolean;
};
const variants = {
  enter: (props: VariantsProps) => {
    return {
      x: props?.direction === "RIGHT" ? -200 : 200,
      filter: "blur(10px)",
      opacity: 0,
    };
  },
  center: (props: VariantsProps) => ({
    zIndex: 1,
    x: 0,
    filter: "blur(0px)",
    opacity: props.isPrincipal ? 1 : 0.3,
  }),
  exit: (props: VariantsProps) => {
    return {
      zIndex: 0,
      filter: "blur(10px)",
      x: props?.direction === "RIGHT" ? 200 : -200,
      opacity: 0,
    };
  },
};
