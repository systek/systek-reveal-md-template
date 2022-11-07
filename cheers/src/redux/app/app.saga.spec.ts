/* eslint-disable @typescript-eslint/no-explicit-any * /
/* eslint-disable no-return-assign */
import { AsyncData, Result } from "@swan-io/boxed";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import { call } from "redux-saga/effects";
import { api, MenuDTO, OrderDTO, paths, PlacedOrder } from "../../api";
import { menuInit, menu, order, orderInit } from "./app.actions";
import appReducer, { initialState } from "./app.reducer";
import AppSaga, { onMenuInit, onOrderInit } from "./app.saga";

const menuDto: MenuDTO = { ipa: 20, lager: 30, porter: 40 };
const placedOrder: PlacedOrder = { porter: 1 };
const orderDto = {
  porter: 1,
  cost: 40,
} as OrderDTO;

const serializedOrderUrl = "/order/123";
describe("app saga", () => {
  describe(`onMenuInit`, () => {
    it("should fetch menu and put to state", () => {
      testSaga(onMenuInit)
        .next()
        .put(menu(AsyncData.Loading()))
        .next()
        .call(api.get, paths.menu)
        .next(menuDto)
        .put(menu(AsyncData.Done(Result.Ok(menuDto))))
        .next()
        .isDone();
    });
  });

  describe(`onOrderInit`, () => {
    it("should fetch menu and put to state", () => {
      testSaga(onOrderInit, orderInit(placedOrder))
        .next()
        .put(order(AsyncData.Loading()))
        .next()
        .call(api.post, serializedOrderUrl, placedOrder)
        .next(orderDto)
        .put(order(AsyncData.Done(Result.Ok(orderDto))))
        .next()
        .isDone();
    });
  });

  describe("dispatch actions", () => {
    describe("onMenuInit()", () => {
      it("should call api and updates state", () =>
        expectSaga(AppSaga)
          .withReducer(appReducer)
          .dispatch(menuInit())
          .provide([[call(api.get, paths.menu), menuDto]])
          .hasFinalState({
            ...initialState,
            menu: AsyncData.Done(Result.Ok(menuDto)),
          })
          .run({ silenceTimeout: true }));
    });
    describe("onOrderInit()", () => {
      it("should call api and updates state", () =>
        expectSaga(AppSaga)
          .withReducer(appReducer)
          .dispatch(orderInit(placedOrder))
          .provide([
            [call(api.post, serializedOrderUrl, placedOrder), orderDto],
          ])
          .hasFinalState({
            ...initialState,
            order: AsyncData.Done(Result.Ok(orderDto)),
          })
          .run({ silenceTimeout: true }));
    });
  });
});
