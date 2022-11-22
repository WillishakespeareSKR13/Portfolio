import { atom } from "jotai";
import { ColorsAtom } from "./colors";
import { KeyAtom } from "./key";

export const PrimaryColorAtom = atom((get) => {
  const colors = get(ColorsAtom);
  const key = get(KeyAtom);
  return colors[key];
});

export const SecondaryColorAtom = atom((get) => {
  const colors = get(ColorsAtom);
  const key = get(KeyAtom);
  const keyMore = key + 1;
  return keyMore >= colors.length ? colors[0] : colors[keyMore];
});
