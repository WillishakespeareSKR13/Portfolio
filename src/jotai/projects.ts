import { atom } from "jotai";
import { atomWithDefault } from "jotai/utils";

export const ProjectsAtom = atom([
  {
    id: "1",
    title: "Stackly UI",
    description: "A UI library for ReactJS",
    image:
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap1.png",
    images: [
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap1.png",
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap2.png",
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap3.png",
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap4.png",
    ],
    technologies: ["ReactJS", "Typescript", "Styled Components"],
    link: "https://stackly-ui.vercel.app/",
    github: "https://github.com/StacklyCode/StacklyUI",
  },
  {
    id: "2",
    title: "The Film Vault",
    description: "Cinema website",
    image:
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/tfv/1.png",
    images: [
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/tfv/2.png",
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/tfv/3.png",
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/tfv/4.png",
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/tfv/5.png",
    ],
    technologies: ["ReactJS", "Typescript", "Stackly UI"],
    link: "https://tfv-client.vercel.app/",
    github: "PRIVATE",
  },

  {
    id: "3",
    title: "Stackly UI 3",
    description: "A UI library for ReactJS",
    image:
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap1.png",
    images: [
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap1.png",
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap2.png",
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap3.png",
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap4.png",
    ],
    technologies: ["ReactJS", "Typescript", "Styled Components"],
    link: "https://stackly-ui.vercel.app/",
    github: "https://github.com/StacklyCode/StacklyUI",
  },
  {
    id: "4",
    title: "Stackly UI 4",
    description: "A UI library for ReactJS",
    image:
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap1.png",
    images: [
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap1.png",
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap2.png",
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap3.png",
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap4.png",
    ],
    technologies: ["ReactJS", "Typescript", "Styled Components"],
    link: "https://stackly-ui.vercel.app/",
    github: "https://github.com/StacklyCode/StacklyUI",
  },
  {
    id: "5",
    title: "Stackly UI 5",
    description: "A UI library for ReactJS",
    image:
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap1.png",
    images: [
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap1.png",
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap2.png",
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap3.png",
      "https://storage.googleapis.com/stackly-assets/porfolio-willishakespeare/img/Stackly_UI/cap4.png",
    ],
    technologies: ["ReactJS", "Typescript", "Styled Components"],
    link: "https://stackly-ui.vercel.app/",
    github: "https://github.com/StacklyCode/StacklyUI",
  },
]);

export const ProjectKeyAtom = atom(0);
export const ProjectAtom = atom(
  (get) => {
    const key = get(ProjectKeyAtom);
    const projects = get(ProjectsAtom)?.map((e, idx) => ({
      ...e,
      position: idx,
    }));
    const project = projects[key];
    return {
      projects,
      key,
      project,
    };
  },
  (get, set, arg: number) => {
    set(ProjectKeyAtom, arg);
    const projects = get(ProjectsAtom);
    const project = projects[arg];
    set(ProjectImagesOrderAtom, project?.images?.map((_, idx) => idx) ?? []);
  }
);

export const ProjectImagesOriginalAtom = atom((get) => {
  const project = get(ProjectAtom);
  return {
    id: project.project.id,
    images: project.project?.images ?? [],
    originalPosition: project?.project?.images?.map((_, idx) => idx) ?? [],
  };
});

export const ProjectImagesOrderAtom = atomWithDefault(
  (get) => get(ProjectImagesOriginalAtom).originalPosition
);

export type EnumDirection = "LEFT" | "RIGHT";
export const ProjectImagesDirectionAtom = atom("LEFT");

export const ProjectImagesAtom = atom(
  (get) => {
    const projectImagesOriginal = get(ProjectImagesOriginalAtom);
    const images = projectImagesOriginal.images?.map((e, idx) => ({
      image: e,
      position: projectImagesOriginal?.originalPosition[idx],
      id:
        projectImagesOriginal.id + projectImagesOriginal?.originalPosition[idx],
    }));
    const projectImagesOrder = get(ProjectImagesOrderAtom);
    const imagesSorted = projectImagesOrder.map((idx) => images[idx]);
    const imagesToShow = [
      imagesSorted[imagesSorted.length - 1],
      ...imagesSorted.slice(0, 2),
    ];
    return {
      direction: get(ProjectImagesDirectionAtom),
      images: images,
      order: projectImagesOrder,
      sorted: imagesToShow,
    };
  },
  (_, set, arg: EnumDirection) => {
    switch (arg) {
      case "LEFT":
        set(ProjectImagesDirectionAtom, arg);
        set(ProjectImagesOrderAtom, (order) => [...order, order[0]].slice(1));
        break;
      case "RIGHT":
        set(ProjectImagesDirectionAtom, arg);
        set(ProjectImagesOrderAtom, (order) =>
          [order[order.length - 1], ...order].slice(0, -1)
        );
        break;
    }
  }
);
