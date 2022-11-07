export const render = (template: string, data: Object) =>
  Object.entries({ ...data }).reduce(
    (res, [key, value]) =>
      res.replace(
        new RegExp(`{{\\s*${key}\\s*}}`, "gi"),
        value as unknown as string
      ),
    template || ""
  );
