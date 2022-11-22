import { useEffect } from "react";
import { atom, useAtom } from "jotai";

const scrollAtom = atom(0);

type ICall = (scroll: number) => void;

const useScroll = (callback?: ICall) => {
  const [scroll, setScroll] = useAtom(scrollAtom);
  useEffect(() => {
    const onScroll = () => {
      setScroll(window.pageYOffset);
      callback?.(window.pageYOffset);
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return { scroll };
};

export default useScroll;
