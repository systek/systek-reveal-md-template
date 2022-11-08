/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { getCost, getMenu, getOrder } from "./app.selectors";
import { AppState } from "./types";
import * as api from "../../api/api";
import MockUtil from "../../../gist/jest.utils";
import { MenuDTO, OrderDTO } from "../../api";

jest.mock("../../api/api");
const apiMock = MockUtil<typeof api>(jest).requireMock("../../api/api");

describe.each([
  [{}, undefined],
  [{ order: undefined }, undefined],
  [{ order: {} }, {}],
] as Array<[AppState, any]>)("when AppState is %j", (App, expected) => {
  it(`getOrder should return ${JSON.stringify(expected)}}`, () =>
    expect(getOrder({ App })).toEqual(expected));
});

describe.each([
  [{}, undefined],
  [{ menu: undefined }, undefined],
  [{ menu: {} }, {}],
] as Array<[AppState, any]>)("when AppState is %j", (App, expected) => {
  it(`getMenu should return ${JSON.stringify(expected)}}`, () =>
    expect(getMenu({ App })).toEqual(expected));
});

describe.each([
  [{}, {}, 0],
  [{ ipa: 1 }, { ipa: 30 }, 30],
  [{ ipa: 1, lager: 0 }, { ipa: 50 }, 50],
  [{ ipa: 1, lager: 2 }, { ipa: 50, lager: 90 }, 230],
  [{ ipa: 1, lager: 2, porter: 3 }, { ipa: 50, lager: 60, porter: 90 }, 440],
] as Array<[OrderDTO, MenuDTO, number]>)(
  "when order is %j\n\t and menu is %j",
  (order, menu, expected) => {
    beforeEach(() => {
      apiMock.getMenu?.mockReturnValue(menu);
    });
    it(`getCost should return ${JSON.stringify(expected)}`, () =>
      expect(getCost({ App: { order } as any })).toEqual(expected));
  }
);
