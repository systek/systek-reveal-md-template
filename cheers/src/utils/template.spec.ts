import { render } from "./template";

describe("render template", () => {
  describe.each([
    ["", undefined as any, ""],
    ["", {}, ""],
    ["", { animal: "Fox" }, ""],
    ["{{animal}}", { animal: "Fox" }, "Fox"],
    [
      "The {{ animal }} jumps over the {{ object }}",
      { animal: "Fox", object: "Brook" },
      "The Fox jumps over the Brook",
    ],
    [
      "The {{ animal }} jumps over the {{ object }}",
      { animal: "Hare", object: "Fox" },
      "The Hare jumps over the Fox",
    ],
  ] as Array<[string, Record<string, string | number>, string]>)(
    "object %p",
    (template, data, expected) => {
      it(`should be rendered as "${expected}" into template "${template}"`, () => {
        expect(render(template, data)).toEqual(expected);
      });
    }
  );
});
