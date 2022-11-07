import { shape } from "../../api/_mock_/test.utils";
import * as appActions from "./app.actions";
import appReducer, { initialState } from "./app.reducer";
import { AppActionTypes, AppState } from "./types";
describe("app.reducer", () => {
  describe("passReducers", () => {
    describe.each([
      [{}, appActions.menuInit(), {}],
      [{}, appActions.orderInit({} as any), {}],
      [initialState, appActions.menuInit(), initialState],
      [initialState, appActions.orderInit({} as any), initialState],
      // @ts-ignore
      [initialState, appActions.menuInit("init"), initialState],
    ] as Array<[AppState, AppActionTypes, AppState]>)(
      "with initialState %j \n\t when action %s is dispatched",
      (currentState, actionType, expected) => {
        it("should pass through reducer", () =>
          expect(appReducer(currentState, actionType)).toEqual(expected));
      }
    );
  });
  describe("writeToDraft", () => {
    describe.each(
      [
        [{}, undefined, {}],
        [initialState, undefined, { ...initialState, menu: undefined }],
        [initialState, "menu", { ...initialState, menu: "menu" }],
      ].map(([_, param, __]) => [
        _,
        appActions.menu(param as any),
        __,
      ]) as Array<[AppState, AppActionTypes, AppState]>
    )(
      "with initialState %j \n\t when action %s is dispatched",
      (currentState, actionType, expected) => {
        it(`should change state to ${shape(expected)}`, () =>
          expect(appReducer(currentState, actionType)).toEqual(expected));
      }
    );

    describe.each(
      [
        [{}, undefined, {}],
        [initialState, undefined, { ...initialState, order: undefined }],
        [initialState, "order", { ...initialState, order: "order" }],
      ].map(([_, param, __]) => [
        _,
        appActions.order(param as any),
        __,
      ]) as Array<[AppState, AppActionTypes, AppState]>
    )(
      "with initialState %j \n\t when action %s is dispatched",
      (currentState, actionType, expected) => {
        it(`should change state to ${shape(expected)}`, () =>
          expect(appReducer(currentState, actionType)).toEqual(expected));
      }
    );
  });
});
