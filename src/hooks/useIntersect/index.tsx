import { useEffect, useMemo, useState } from "react";
import { LoadObserver } from "./config";
import { Intersec, IObserver, Target } from "./types";

const useIntersect: IObserver = (array, callback, opts) => {
  const [entries, setEntries] = useState<Intersec>([]);
  const observer = useMemo(() => LoadObserver(setEntries, opts), [opts]);

  useEffect(() => {
    if (observer) observer?.disconnect();
    array?.map(
      (ref) => ref?.ref?.current && observer?.observe(ref?.ref?.current)
    );
    return () => observer?.disconnect();
  }, [observer, array]);

  useEffect(() => {
    entries?.map((entry) => {
      const target = entry.target as Target;
      callback?.(entry, target);
    });
  }, [observer, entries, callback]);

  return [entries, observer];
};

export default useIntersect;
