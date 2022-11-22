import { atom } from "jotai";
import { KeyAtom } from "./key";

export const Labels = ["React", "React Native", "Next.js", "UI/UX", "Node.js"];

export const SelectAtom = atom((get) => {
  const key = Labels[get(KeyAtom)];
  return key;
});
