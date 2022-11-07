import { paths } from "..";

type Paths = typeof paths;
type Keys = keyof typeof paths;
export const flatten = (subSet: Paths | Paths[Keys]): string[] =>
  Object.values(subSet as Record<string, string>).flatMap((path) =>
    typeof path === "string" ? path : flatten(path)
  );

export const shape = (obj: Object) => JSON.stringify(obj, null, 0);
