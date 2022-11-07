export const COLON = ":";

export enum UrlParam {
  ordernr = "ordernr",
  receiptnr = "receiptnr",
}

export interface Root {
  root: string;
}
export type WithRoot<T> = T & Root;

export type TypeMap<K> = {
  [P in keyof K]: K[P] extends Record<string, unknown> ? TypeMap<K[P]> : string;
} & { root?: string };
