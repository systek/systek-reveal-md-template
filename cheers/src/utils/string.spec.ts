import { capitalize } from "./string";

describe("string utils", () => {
  describe.each([
    [undefined, ""],
    ["", ""],
    ["string", "String"],
    ["string swing", "String swing"],
  ] as Array<[string, string]>)("capitalize(%s)", (props, expected) => {
    it(`should be "${expected}"`, () =>
      expect(capitalize(props)).toBe(expected));
  });
});
