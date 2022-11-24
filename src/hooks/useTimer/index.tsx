import { atom, useAtom, useSetAtom } from "jotai";
import { atomFamily } from "jotai/utils";
import { useEffect } from "react";

type Props = {
  key?: string;
  start?: number;
  end?: number;
  ms?: number;
  callback?: () => void;
};

type LoadsAtomType = {
  [key: string]: boolean;
};

type TimersAtomType = {
  [key: string]: {
    start: number;
    end: number;
    ms: number;
    timer: number;
    key: string;
    callback: () => void;
  };
};

const timersAtom = atom({} as TimersAtomType);

const timerAtom = atomFamily((key: string) => {
  const timerAtom = atom(
    (get) => get(timersAtom)[key],
    (_, set, arg: (prev: number) => number) => {
      set(timersAtom, (prev) => ({
        ...prev,
        [key]: {
          ...prev[key],
          timer: arg(prev[key].timer),
        },
      }));
    }
  );
  return timerAtom;
});

const useTimer = (props: Props) => {
  const { start, end, ms, callback, key = "NONE" } = props;
  const setTimers = useSetAtom(timersAtom);
  useEffect(() => {
    setTimers((prev) => ({
      ...prev,
      [key]: {
        key,
        start: start ?? 0,
        end: end ?? 0,
        ms: ms ?? 1000,
        timer: 0,
        callback: callback ?? (() => {}),
      },
    }));
  }, []);

  const [timer, setTimer] = useAtom(timerAtom(key));

  useEffect(() => {
    if (!timer || timer?.timer > timer?.end) return;
    const intervalTimer = setInterval(() => {
      if (timer.timer === timer.end) {
        callback?.();
        clearTimeout(intervalTimer);
      } else {
        setTimer((prev) => prev + 1);
      }
    }, timer.ms);

    return () => clearInterval(intervalTimer);
  }, [timer]);

  return {
    timer,
    setTimer,
    load: timer?.timer === timer?.end,
  };
};

export default useTimer;
