/* eslint-disable testing-library/no-render-in-setup */
import { MockUtil } from "../../gist/jest.utils";

import { render as testRender, screen } from "@testing-library/react";
import { DeepPartial } from "redux";
import { ApplicationState } from "../redux";
import { AppActions, AppActionTypes, initialState } from "../redux/app";
import * as appSelectors from "../redux/app/app.selectors";
import {
  AppContainer,
  mapDispatchToProps,
  mapStateToProps,
  Props,
  TestId,
} from "./App";
import { AsyncData } from "@swan-io/boxed";
import { shape } from "../api/_mock_/test.utils";
jest.mock("../redux/app/app.selectors").mock("../components/Customer", () => ({
  __esModule: true,
  default: (props: any) => <div data-testid={props["data-testid"]}></div>,
}));

const mocks = MockUtil<typeof appSelectors>(jest).requireMocks(
  "../redux/app/app.selectors"
);

describe("App Container", () => {
  afterEach(jest.restoreAllMocks);
  afterEach(jest.resetAllMocks);

  describe("mapStateToProps", () => {
    let state: ApplicationState;

    beforeEach(
      () => (state = { ...{ App: { ...initialState } } } as ApplicationState)
    );
    let props: Partial<Props>;
    beforeEach(() => {
      mocks.getOrder?.mockReturnValue("order_value");
      mocks.getMenu?.mockReturnValue("menu_value");
      props = mapStateToProps(state);
    });

    it("delegates work to selectors", () => {
      expect(mocks.getOrder).toHaveBeenCalledWith(state);
      expect(mocks.getMenu).toHaveBeenCalledWith(state);
    });

    it("has assigned values", () => {
      expect(Object.entries(props)).toEqual([
        ["order", "order_value"],
        ["menu", "menu_value"],
      ]);
    });
  });
  describe("mapDispatchToProps", () => {
    let dispatch: jest.Mock;

    it("has assigned values", () => {
      expect(Object.keys(mapDispatchToProps(jest.fn()))).toEqual([
        "orderAction",
        "moreBeer",
        "payBill",
        "init",
      ]);
    });

    describe("orderAction", () => {
      beforeEach(() => {
        dispatch = jest.fn();
        (mapDispatchToProps(dispatch) as any).orderAction("placedOrder");
      });

      it("dispatches order", () => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toBeCalledWith({
          placedOrder: "placedOrder",
          type: AppActions.ORDER_INIT,
        });
      });
    });

    describe.each([
      ["init", { type: AppActions.MENU_INIT }],
      ["moreBeer", { type: AppActions.ORDER_MORE_BEER }],
      ["orderAction", { type: AppActions.ORDER_INIT }],
      ["payBill", { type: AppActions.PAY_BILL }],
    ] as Array<[keyof Props, AppActionTypes]>)(
      "when action %s is called",
      (action, expected) => {
        beforeEach(() => {
          dispatch = jest.fn();
          (mapDispatchToProps(dispatch) as any)[action]();
        });
        it(`should dispatch actionType ${shape(expected)}`, () => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toBeCalledWith(expected);
        });
      }
    );
  });

  describe("AppContainer", () => {
    let props: DeepPartial<Props>;
    const setup = (extend: DeepPartial<Props> = {}) =>
      (props = {
        ...{ init: jest.fn(), menu: AsyncData.NotAsked() },
        ...props,
        ...extend,
      } as Props);

    const render = () => testRender(<AppContainer {...(props as Props)} />);
    beforeEach(() => {
      setup();
      render();
    });

    it("should render Customer Component", () =>
      expect(screen.getByTestId(TestId.customer)).toBeInTheDocument());

    it("should run init when rendered", () =>
      expect(props.init).toHaveBeenCalledTimes(1));
  });
});
