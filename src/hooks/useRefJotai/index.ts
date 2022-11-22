import { atom, useSetAtom, useAtomValue } from "jotai";
import { atomFamily } from "jotai/utils";
import { useEffect, useRef } from "react";

type IRefs = {
  [key: string]: {
    id: string;
    ref: React.MutableRefObject<any>;
  };
};
export const RefsAtom = atom({} as IRefs);
export const RefsArrayAtom = atom((get) => Object.values(get(RefsAtom)));
export const RefByKey = atomFamily((key: string) =>
  atom((get) => get(RefsAtom)[key]?.ref)
);
const useRefJotai = (key = "") => {
  const ref = useRef<HTMLDivElement>(null);
  const setRefs = useSetAtom(RefsAtom);
  const refByKey = useAtomValue(RefByKey(key));
  const refsArray = useAtomValue(RefsArrayAtom);
  useEffect(() => {
    if (ref && key !== "") {
      setRefs((prev) => ({
        ...prev,
        [key]: {
          id: key,
          ref,
        },
      }));
    }
  }, [ref]);

  return {
    ref: refByKey ?? ref,
    refs: refsArray,
  };
};

export default useRefJotai;
