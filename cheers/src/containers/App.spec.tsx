import { MockUtil } from "../../gist/jest.utils";
import { Props } from "../components/Customer";
import { ApplicationState } from "../redux";
import * as appSelectors from "../redux/app/app.selectors";
import { AppActions, initialState } from "../redux/app";
import { mapDispatchToProps, mapStateToProps } from "./App";

jest.mock("../redux/app/app.selectors");

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

    describe("orderAction", () => {
      beforeEach(() => {
        dispatch = jest.fn();

        (mapDispatchToProps(dispatch) as any).orderAction("order");
      });

      it("dispatches order", () => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toBeCalledWith({
          order: "order",
          type: AppActions.ORDER,
        });
      });
    });
  });
});
