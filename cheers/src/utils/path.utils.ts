import { COLON, UrlParam } from "./types";

type Replacer = [RegExp, string];
export const trailingSlash: Replacer = [/\/+$/, ""];
export const doubleSlashes: Replacer = [/(?<!:)\/+/g, "/"];
export const build = (...path: string[]): string =>
  ["", ...path].join("/").replace(...doubleSlashes);
export const colonize = (key: UrlParam): string => `${COLON}${key}`;
export const asUrlParam = (key: UrlParam): string => (key ? colonize(key) : "");
