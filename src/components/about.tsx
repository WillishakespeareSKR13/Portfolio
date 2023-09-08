import useRefJotai from "@Src/hooks/useRefJotai";
import { PrimaryColorAtom } from "@Src/jotai/primaryColor";
import {
  AtomButton,
  AtomLink,
  AtomText,
  AtomWrapper,
  ChangeTransparency,
  css,
  IsBackDark,
} from "@stacklycore/ui";
import { useAtomValue } from "jotai";
import ReactIcon from "@Src/assets/icons/react.svg";
import NextJSIcon from "@Src/assets/icons/nextjs.svg";
import JavaScriptIcon from "@Src/assets/icons/javascript.svg";
import TypeScriptIcon from "@Src/assets/icons/typescript.svg";
import GraphQLIcon from "@Src/assets/icons/graphql.svg";

const initYear = 2016;

const About = () => {
  const primaryColor = useAtomValue(PrimaryColorAtom);
  const { ref } = useRefJotai("ABOUT");
  return (
    <AtomWrapper
      ref={ref}
      css={() => css`
        position: relative;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        height: max-content;
        min-height: 100vh;
        background-color: #000000c0;
        backdrop-filter: blur(2px);
        padding-bottom: 80px;
        :before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 40px;
          transform: translate(0%, -100%);
          background: linear-gradient(180deg, #00000000, #000000c0 100%);
        }
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
          <b>About</b> Me
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
          Greetings! <b>I'm William Jesus</b>, a Senior Frontend Developer and
          <b> UI/UX</b> Designer hailing from the vibrant tech scene of Mexico.
          With over seven years of unwavering commitment to the software
          industry, I've not just honed my skills, but I've also embraced a
          journey of continuous learning and growth.
          <br />
          <br />
          My journey through the ever-evolving landscape of technology has been
          nothing short of <b>exhilarating.</b> From the thrill of mastering
          diverse technologies to the satisfaction of contributing to a
          multitude of <b>projects,</b> each experience has added a unique
          brushstroke to my professional canvas.
          <br />
          <br />
          But there's something more profound that fuels my{" "}
          <b>passion—a deep-seated</b> belief that the right team and company
          can elevate not just my work, but my very soul. I'm on the lookout for
          a new adventure, a place where my <b>skills</b> harmonize with the
          values and aspirations of a like-minded collective.
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
          Do you want to know more about me? You can{" "}
          <AtomLink
            href="https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/pdf/CovarrubiasRamosWilliamCV_English.pdf"
            target="_blank"
            rel="noreferrer"
            css={() => css`
              color: ${primaryColor};
              text-decoration: underline;
              transition: all 0.3s ease-in-out;
              font-size: 16px;
              :hover {
                cursor: pointer;
              }
            `}
          >
            <b>Download my CV</b>
          </AtomLink>{" "}
          and contact me.
        </AtomText>
        <AtomText
          css={() => css`
            font-size: 28px;
            font-weight: 400;
          `}
        >
          <b>Skills</b>
        </AtomText>
        <AtomWrapper
          css={() => css`
            flex-direction: row;
            gap: 20px;
            background-color: transparent;
          `}
        >
          {[
            {
              id: "react",
              icon: <ReactIcon />,
              name: "React & React Native",
              color: "#61dafb",
            },
            {
              id: "next-js",
              icon: <NextJSIcon />,
              name: "NextJS",
              color: "#d333f6",
            },
            {
              id: "typescript",
              icon: <TypeScriptIcon />,
              name: "TypeScript",
              color: "#3178c6",
            },
            {
              id: "javascript",
              icon: <JavaScriptIcon />,
              name: "JavaScript",
              color: "#f7df1e",
            },
            {
              id: "graphql",
              icon: <GraphQLIcon />,
              name: "GraphQL",
              color: "#e535ab",
            },
          ].map((item) => (
            <AtomWrapper
              key={item.id}
              css={() => css`
                width: max-content;
                position: relative;
                svg {
                  width: 40px;
                  height: 40px;
                  path {
                    fill: #e6e6e6;
                    transition: all 0.3s ease-in-out;
                  }
                }
                :hover {
                  svg {
                    filter: drop-shadow(
                      0px 0px 10px ${ChangeTransparency(item?.color, 60)}
                    );
                    path {
                      fill: ${item?.color};
                    }
                  }
                }
                ::after {
                  content: "${item.name}";
                  position: absolute;
                  top: -10px;
                  left: 50%;
                  transform: translate(-50%, -100%);
                  width: max-content;
                  height: max-content;
                  font-family: "Roboto", sans-serif;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding: 6px 20px;
                  font-size: 12px;
                  font-weight: 700;
                  box-shadow: 0px 0px 10px 0px
                    ${ChangeTransparency(item?.color, 80)};
                  background-color: ${item?.color};
                  color: ${IsBackDark(item?.color)};
                  border-radius: 4px;
                  opacity: 0;
                  transition: all 0.3s ease-in-out;
                }
                :hover {
                  ::after {
                    opacity: 1;
                  }
                }
              `}
            >
              {item.icon}
            </AtomWrapper>
          ))}
        </AtomWrapper>
        <AtomText
          css={() => css`
            font-size: 28px;
            font-weight: 400;
          `}
        >
          <b>Jobs</b> & Freelance
        </AtomText>
        <AtomWrapper
          css={() => css`
            flex-direction: column;
            gap: 20px;
            background-color: transparent;
          `}
        >
          {WORKS.map((e) => (
            <>
              <AtomWrapper
                key={e.id}
                css={() => css`
                  gap: 10px;
                  background-color: transparent;
                `}
              >
                <AtomWrapper
                  css={() => css`
                    background-color: transparent;
                    justify-content: flex-start;
                    align-items: center;
                    width: max-content;
                    max-width: 100%;
                    flex-direction: row;
                    flex-wrap: wrap;
                    gap: 20px;
                  `}
                >
                  <AtomWrapper
                    css={() => css`
                      background-color: transparent;
                      width: max-content;
                    `}
                  >
                    <AtomText
                      css={() => css`
                        font-size: 28px;
                        font-weight: 700;
                      `}
                    >
                      {e.company}
                    </AtomText>
                    <AtomLink href={e?.url} target="_blank">
                      <AtomText
                        css={() => css`
                          cursor: pointer;
                          text-decoration: underline;
                          :hover {
                            color: ${primaryColor};
                          }
                        `}
                      >
                        {e.website}
                      </AtomText>
                    </AtomLink>
                  </AtomWrapper>
                  <AtomWrapper
                    css={() => css`
                      width: max-content;
                      background-color: transparent;
                    `}
                  >
                    <AtomText>{e.date}</AtomText>
                    <AtomText>{e.position}</AtomText>
                  </AtomWrapper>
                  <AtomWrapper
                    css={() => css`
                      width: max-content;
                      background-color: transparent;
                    `}
                  >
                    <AtomText>{e.type}</AtomText>
                    <AtomText
                      css={() => css`
                        word-break: break-all;
                      `}
                    >
                      {e.technologies.join(", ")}
                    </AtomText>
                  </AtomWrapper>
                </AtomWrapper>
                <AtomWrapper
                  css={() => css`
                    width: max-content;
                    background-color: transparent;
                    max-width: 100%;
                    flex-direction: column;
                    gap: 2px;
                  `}
                >
                  {e.points?.map((e) => (
                    <AtomText
                      key={e}
                      dangerouslySetInnerHTML={{
                        __html: `• ${e}`,
                      }}
                      css={() => css`
                        b {
                          font-weight: 700;
                          color: ${primaryColor};
                          transition: all 0.3s ease-in-out;
                        }
                        transition: all 0.3s ease-in-out;
                      `}
                    />
                  ))}
                </AtomWrapper>
              </AtomWrapper>
              {e.otherprojects && (
                <AtomWrapper
                  css={() => css`
                    width: 100%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    background-color: transparent;
                    gap: 20px;

                    transition: all 0.3s ease-in-out;
                  `}
                >
                  <AtomWrapper
                    css={() => css`
                      display: flex;
                      flex-direction: row;
                      justify-content: center;
                      align-items: center;
                      width: 100%;
                      z-index: 1;
                      height: 1px;
                      border-radius: 10px;
                      background-color: ${primaryColor};
                      gap: 10px;
                    `}
                  />
                  <AtomText
                    css={() => css`
                      text-align: center;
                      color: ${primaryColor};
                      transition: all 0.3s ease-in-out;
                      white-space: nowrap;
                    `}
                  >
                    some other freelance jobs or projects between dates
                  </AtomText>
                  <AtomWrapper
                    css={() => css`
                      display: flex;
                      flex-direction: row;
                      justify-content: center;
                      align-items: center;
                      width: 100%;
                      z-index: 1;
                      height: 1px;
                      border-radius: 10px;
                      background-color: ${primaryColor};
                      gap: 10px;
                    `}
                  />
                </AtomWrapper>
              )}
            </>
          ))}
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default About;

const WORKS = [
  {
    id: -1,
    company: "Gentera",
    position: "Senior Javascript Developer",
    date: "Feb 2023 - Sep 2023",
    website: "Gentera.com.mx",
    url: "https://www.gentera.com.mx/",
    type: "Full Time (Hybrid)",
    otherprojects: false,
    technologies: ["React", "React Native", "TypeScript", "Jest", "Cypress"],
    points: [
      "<b>Senior Javascript Developer</b>",
      "built the architecture and schema bases for a react native application for the <b>financial</b> sector",
      "Take decisions in architecture and development",
      "Creation Infrastructure to frontend <b>(Graphs infrastructure)</b> based on (Atomic Design & Hexagonal infrastructure)",
      "Creation and Implementation of UI Library <b>(Rollup & Tree Shaking)</b>",
      "Creation and Implementation of Functions as services in Front",
      "Implementation of <b>Jest</b> and <b>Cypress</b>",
    ],
  },
  {
    id: 0,
    company: "Ixulabs",
    position: "Team Leader",
    date: "Mar 2021 - Ene 2023",
    website: "Ixulabs.com",
    url: "https://ixulabs.com/",
    type: "Full Time (Remote)",
    otherprojects: false,
    technologies: [
      "React",
      "NextJS",
      "React Native",
      "TypeScript",
      "GraphQL",
      "Rollup",
      "Jest",
    ],
    points: [
      "<b>Team Leader</b>",
      "Organize and coordinate the work of the team",
      "Take decisions in architecture and development",
      "Creation Infrastructure to frontend <b>(Graphs infrastructure)</b> based on (Atomic Design & Hexagonal infrastructure)",
      "Creation and Implementation of UI Library <b>(Rollup & Tree Shaking)</b>",
      "Creation and Implementation of Functions as services in Front",
      "Implementation of <b>Jest</b> and <b>Cypress</b>",
      "Creation of Authentication System SRR and SSG",
      "Integration of Layout & Design Patterns in Front",
      "Integration of Dynamic SEO for Blog and Web Pages",
      "Creation of Dynamic Web Creation System with integration of Front & Back services, Similar to Wordpress Based 100% on React Next",
    ],
  },
  {
    id: 1,
    otherprojects: true,
    company: "Stackly Code",
    position: "Frontend Developer",
    date: "Feb 2020 - Feb 2021",
    website: "Stacklycode.com",
    url: "https://stacklycode.com/",
    type: "Full Time (Remote)",
    technologies: [
      "React",
      "NextJS",
      "Emotion",
      "TypeScript",
      "GraphQL",
      "Mongo DB",
    ],
    points: [
      "In Stackly Code I was a designer and developer of your page helping in the SEO positioning",
      "Implement improvements in the development and performance of the web",
    ],
  },
  {
    id: 3,
    otherprojects: true,
    company: "Fazt Community",
    position: "Frontend Developer",
    date: "Oct 2020 - Nov 2020",
    website: "Faztcommunity.com",
    url: "https://faztcommunity.club/",
    type: "Freelance",
    technologies: ["React", "NextJS", "Emotion", "Storybook", "TypeScript"],
    points: [
      "In Fazt Community I helped in the Design and development of the main landing being also participated in the development team as part of the project leader",
    ],
  },
  {
    id: 6,
    company: "ITSON Guaymas",
    position: "Software Engineer",
    date: "Ene 2015 - Dic 2019",
    website: "ITSON Guaymas",
    url: "https://www.itson.edu.mx/",
    type: "University Student",
    technologies: ["Unity", "C#", "Visual Basic", "SQL Server", "HTML", "CSS"],
  },
];
