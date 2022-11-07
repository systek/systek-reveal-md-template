/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

export declare module Storage {
  export type Set = <T>(key: string, val: T) => Promise<T>;
  export type Get = <T>(key: string, or?: T) => Promise<T>;
  export type Remove = (key: string) => Promise<void>;
}

const asPromised = async <T>(cb: () => T): Promise<T> =>
  new Promise((resolve, reject) => {
    try {
      resolve(cb());
    } catch (error) {
      reject(error);
    }
  });

export const set: Storage.Set = async <T>(key: string, val: T) =>
  asPromised(() => {
    window?.localStorage?.setItem(key, JSON.stringify(val, null, 2));
    return val;
  });

export const remove: Storage.Remove = (key: string) => {
  window?.localStorage?.removeItem(key);
  return Promise.resolve(undefined);
};

export const get: Storage.Get = <T>(key: string, or?: T): any =>
  asPromised(() =>
    window?.localStorage?.getItem(key) ? window?.localStorage?.getItem(key) : or
  );
