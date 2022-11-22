import { ColorsAtom } from "@Src/jotai/colors";
import { KeyAtom } from "@Src/jotai/key";
import { useTheme } from "@stacklycore/ui";
import { useAtom } from "jotai";
import { useEffect } from "react";

const useChangeKey = () => {
  const { theme } = useTheme();
  const [colors, setColors] = useAtom(ColorsAtom);
  const [selectKey, setSelectKey] = useAtom(KeyAtom);

  useEffect(
    () => setColors(Object.values(theme?.general?.color ?? {})),
    [theme]
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectKey((key) => (key >= colors.length - 1 ? 0 : key + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [selectKey, colors]);
};

export default useChangeKey;
