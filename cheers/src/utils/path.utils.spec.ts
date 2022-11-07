import { build } from "./path.utils";

describe("path utils", () => {
  describe.each([
    [[], ""],
    [[""], "/"],
    [["path"], "/path"],
    [["path", "to"], "/path/to"],
    [["path", "//", "to"], "/path/to"],
  ])("build(%o)", (paths: string[], expected: string) => {
    it(`should result in expected`, () =>
      expect(build(...paths)).toEqual(expected));
  });
});
