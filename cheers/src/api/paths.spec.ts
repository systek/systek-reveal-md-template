import { paths } from "./paths";
import { flatten, shape } from "./_mock_/test.utils";

describe("api paths", () => {
  const expectedPath = {
    order: {
      "/": "/order/:ordernr",
      cancel: "/order/:ordernr/cancel",
      receipt: "/receipt/:receiptnr",
    },
  };
  it(`paths should have shape of ${shape(expectedPath)}`, () =>
    expect(paths).toEqual(expectedPath));

  const flattedPath = [
    "/order/:ordernr",
    "/order/:ordernr/cancel",
    "/receipt/:receiptnr",
  ];
  it(`flatten paths should have shape of ${shape(flattedPath)}`, () =>
    expect(flatten(paths).sort()).toEqual(flattedPath));
});
