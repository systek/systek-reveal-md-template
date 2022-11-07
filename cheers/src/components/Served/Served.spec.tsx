/* eslint-disable testing-library/no-render-in-setup */
import { DeepPartial } from "redux";
import { AsyncData, Result } from "@swan-io/boxed";
import { render as testRender, screen } from "@testing-library/react";
import Served from "./Served";
import { Props, TestId } from "./types";
import { OrderDTO } from "../../api";
describe("Served Component", () => {
  let props: DeepPartial<Props>;
  const setup = (extend: DeepPartial<Props> = {}) =>
    (props = {
      ...props,
      ...extend,
    } as Props);

  const render = () => testRender(<Served {...(props as Props)} />);

  beforeEach(setup);
  afterEach(jest.restoreAllMocks);
  afterEach(jest.resetAllMocks);

  it("description", () => expect(true).toBeDefined());

  describe("when order is ok", () => {
    beforeEach(() => {
      setup({ order: Result.Ok({ ipa: 3, lager: 2, cost: 90 } as OrderDTO) });
      render();
    });

    it("should render served order", () => {
      expect(screen.getByTestId(TestId.ok)).toBeInTheDocument();
      expect(screen.getByTestId(TestId.ok)?.textContent).toContain(
        "Here's your 3 ipas and your 2 lagers, sir"
      );
    });
    it("should render no error message", () =>
      expect(screen.queryByTestId(TestId.error)).toBeNull());
  });

  describe("when order fails", () => {
    beforeEach(() => {
      setup({
        order: Result.Error("I think you had to many for tonight, sir") as any,
      });
      render();
    });

    it("should render served order", () =>
      expect(screen.queryByTestId(TestId.ok)).toBeNull());

    it("should render no error message", () => {
      expect(screen.getByTestId(TestId.error)).toBeInTheDocument();
      expect(screen.getByTestId(TestId.error)?.textContent).toContain(
        "I think you had to many for tonight, sir"
      );
    });
  });
});
