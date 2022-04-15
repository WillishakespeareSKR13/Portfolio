export type Intersec = IntersectionObserverEntry[];
export type Inter = IntersectionObserverEntry;
export type Target = HTMLDivElement;
export type IObserver = (
  array?: RefObject<Target>[],
  callback?: (entry: Inter, target: Target) => void,
  opts?: IntersectionObserverInit
) => [entries: Intersec, obs: IntersectionObserver | null];
