/* eslint-disable testing-library/no-render-in-setup */
import { AsyncData } from "@swan-io/boxed";
import { render as testRender, screen } from "@testing-library/react";
import { DeepPartial } from "redux";
import Customer, { Props, TestId } from "./Customer";

jest
  .mock("./Order", () => ({
    __esModule: true,
    Order: (props: any) => <div data-testid={props["data-testid"]}></div>,
  }))
  .mock("./Served", () => ({
    __esModule: true,
    Served: (props: any) => <div data-testid={props["data-testid"]}></div>,
  }));

describe("Customer Component", () => {
  let props: DeepPartial<Props>;
  const setup = (extend: DeepPartial<Props> = {}) =>
    (props = {
      ...{
        order: AsyncData.NotAsked(),
        orderAction: jest.fn(),
        menu: {},
      },
      ...props,
      ...extend,
    } as Props);

  const render = () => testRender(<Customer {...(props as Props)} />);

  beforeEach(setup);

  describe.each([
    [AsyncData.NotAsked(), TestId.order],
    [AsyncData.Loading(), TestId.loading],
    [AsyncData.Done({}), TestId.served],
  ] as Array<[Props["order"], TestId]>)(
    "when order is %j",
    (order, visibleComponent) => {
      beforeEach(() => {
        setup({ order });
        render();
      });

      it.each(
        Object.values(TestId).filter(
          (val) => val !== visibleComponent && val !== TestId.header
        )
      )("component %s should not be rendered", (id: TestId) =>
        expect(screen.queryByTestId(id)).toBeNull()
      );

      it.each(Object.values(TestId).filter((val) => val === visibleComponent))(
        "component %s should be rendered",
        (id: TestId) => expect(screen.getByTestId(id)).toBeInTheDocument()
      );
    }
  );
});
