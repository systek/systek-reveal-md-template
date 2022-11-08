/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import { DeepPartial } from "redux";
import Order from "./Order";

import {
  fireEvent,
  render as testRender,
  screen,
} from "@testing-library/react";
import { Props, TestId } from "./types";
import { AsyncData, Result } from "@swan-io/boxed";
describe("Customer Component", () => {
  let props: DeepPartial<Props>;
  const orderAction = jest.fn();
  const setup = (extend: DeepPartial<Props> = {}) =>
    (props = {
      ...{
        orderAction,
        menu: AsyncData.NotAsked(),
      },
      ...props,
      ...extend,
    } as Props);

  const getAll = (container: Element, selector: string) =>
    Array.from(container.querySelectorAll(selector));
  const render = () => testRender(<Order {...(props as Props)} />);
  beforeEach(setup);

  describe("before order is placed", () => {
    beforeEach(() => render());

    describe("menu", () => {
      describe("before loaded", () => {
        it("should not be rendered", () =>
          expect(screen.queryByTestId(TestId.menu)).toBeNull());
      });

      describe("after loaded", () => {
        beforeEach(() => {
          setup({
            menu: AsyncData.Done(Result.Ok({ ipa: 13, lager: 14 })),
          });
          render();
        });

        it("should be rendered", () =>
          expect(screen.getAllByTestId(TestId.menu).at(0)).toBeInTheDocument());
        it("should be rendered with 2 items", () =>
          expect(
            getAll(screen.getAllByTestId(TestId.menu).at(0)!, "li")
          ).toHaveLength(2));

        it("should be rendered with 2 different items", () =>
          expect(
            getAll(screen.getAllByTestId(TestId.menu).at(0)!, "li").map(
              (li) => li.textContent
            )
          ).toEqual(["Ipa: 13,-", "Lager: 14,-"]));
      });
    });

    describe("form", () => {
      it("should be rendered", () =>
        expect(screen.getByTestId(TestId.order)).toBeInTheDocument());

      it("should be rendered with 2 input fields", () =>
        expect(getAll(screen.getByTestId(TestId.order), "input")).toHaveLength(
          2
        ));

      it("should be rendered submit button", () =>
        expect(getAll(screen.getByTestId(TestId.order), "button")).toHaveLength(
          1
        ));

      describe("on submit", () => {
        beforeEach(() => {
          let [beer, amount] = getAll(
            screen.getByTestId(TestId.order),
            "input"
          ) as HTMLInputElement[];
          beer.value = "ipa";
          amount.value = "2";
          fireEvent(
            getAll(screen.getByTestId(TestId.order), "button").at(0) as any,
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
          );
        });
        it("should call orderAction", () => {
          expect(orderAction).toBeCalledTimes(1);
          expect(orderAction).toHaveBeenCalledWith({ ipa: "2" });
        });
      });
    });
  });
});
