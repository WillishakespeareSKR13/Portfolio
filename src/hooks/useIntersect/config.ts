import { Dispatch, SetStateAction } from "react";
import { Intersec } from "./types";

export const defOpts = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
} as IntersectionObserverInit;

export const LoadObserver = (
  state: Dispatch<SetStateAction<Intersec>>,
  opts = defOpts
) =>
  typeof window !== "undefined"
    ? new IntersectionObserver((entries) => state(entries), opts)
    : null;
