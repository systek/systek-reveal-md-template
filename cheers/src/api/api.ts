/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as storage from "./storage";
type RequestResponse<T> = T;

export const del = async (url: string): Promise<RequestResponse<void>> =>
  storage.remove(url);

export const get = async <T>(url: string): Promise<RequestResponse<T>> =>
  storage.get(url);

export const post = async <T>(
  url: string,
  body?: unknown
): Promise<RequestResponse<T>> => storage.set(url, body as any);
