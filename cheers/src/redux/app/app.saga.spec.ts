import { AsyncData, Result } from "@swan-io/boxed";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import { call } from "redux-saga/effects";
import {
  api,
  MenuDTO,
  OrderDTO,
  paths,
  PlacedOrder,
  __secretOrderUrl,
} from "../../api";
import { menu, menuInit, moreBeer, order, orderInit } from "./app.actions";
import appReducer, { initialState } from "./app.reducer";
import AppSaga, { onMenuInit, onOrderInit, onPayBill } from "./app.saga";

const menuDto: MenuDTO = { ipa: 20, lager: 30, porter: 40 };
const placedOrder: PlacedOrder = { porter: 1 };
const orderDto = {
  porter: 1,
  cost: 40,
} as OrderDTO;

const serializedOrderUrl = __secretOrderUrl;
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
    describe("success", () => {
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

    describe("fails", () => {
      const rejectionMessage = "We do not have ipa";
      it("should fetch menu and put to state", () => {
        testSaga(onOrderInit, orderInit(placedOrder))
          .next()
          .put(order(AsyncData.Loading()))
          .next()
          .call(api.post, serializedOrderUrl, placedOrder)
          .throw(rejectionMessage as any)
          .put(order(AsyncData.Done(Result.Error(rejectionMessage))))
          .next()
          .isDone();
      });
    });
  });

  describe(`onPayBilllInit`, () => {
    it("should fetch receipt and reset state", () => {
      testSaga(onPayBill)
        .next()
        .call(api.del, serializedOrderUrl)
        .next()
        .put(moreBeer())
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
