import { capitalize } from "./string";

describe("string utils", () => {
  describe.each([
    [undefined, ""],
    [null, ""],
    [1, ""],
    [false, ""],
    ["", ""],
    ["string", "String"],
    ["string swing", "String swing"],
  ] as Array<[string, string]>)("capitalize(%s)", (props, expected) => {
    it(`should return "${expected}"`, () =>
      expect(capitalize(props)).toBe(expected));
  });
});
