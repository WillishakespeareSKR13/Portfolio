import { ColorsAtom } from "@Src/jotai/colors";
import { KeyAtom } from "@Src/jotai/key";
import { useTheme } from "@stacklycore/ui";
import { useAtom } from "jotai";
import { useEffect } from "react";
import useTimer from "../useTimer";

const useChangeKey = () => {
  const { theme } = useTheme();
  const [colors, setColors] = useAtom(ColorsAtom);
  const [_, setSelectKey] = useAtom(KeyAtom);

  useEffect(
    () => setColors(Object.values(theme?.general?.color ?? {})),
    [theme]
  );

  const { setTimer, timer } = useTimer({
    key: "CHANGECOLOR",
    end: 10,
    callback: () => {
      setSelectKey((prev) => (prev + 1) % colors.length);
      setTimer(() => 0);
    },
  });
  return { setTimer, timer };
};

export default useChangeKey;
