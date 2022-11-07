/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AsyncData, Result } from "@swan-io/boxed";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { menu, moreBeer, order } from "./app.actions";
import { api, MenuDTO, OrderDTO, paths, __secretOrderUrl } from "../../api";
import { AppActions, AppActionTypes } from "./types";
import { UrlParam } from "../../utils/types";

const orderSerializer = (path: string, orderNr: string) =>
  path.replace(":" + UrlParam.ordernr, orderNr);

export function* onMenuInit() {
  yield put(menu(AsyncData.Loading()));
  let menuDto: MenuDTO = yield call(api.get, paths.menu);

  if (!!menuDto) {
    yield put(menu(AsyncData.Done(Result.Ok(menuDto))));
  } else {
    yield put(menu(AsyncData.Done(Result.Error("No menu"))));
  }
}

export function* onPayBill() {
  yield call(api.del, __secretOrderUrl);
  yield put(moreBeer());
}

export function* onOrderInit({ placedOrder }: AppActionTypes) {
  yield put(order(AsyncData.Loading()));
  try {
    const orderDto: OrderDTO = yield call(
      api.post,
      orderSerializer(paths.order["/"], "123"),
      placedOrder
    );

    yield put(order(AsyncData.Done(Result.Ok(orderDto))));
  } catch (error) {
    yield put(order(AsyncData.Done(Result.Error(error))));
  }
}

export function* AppSaga() {
  yield all([
    takeEvery(AppActions.MENU_INIT, onMenuInit),
    takeEvery(AppActions.ORDER_INIT, onOrderInit),
    takeEvery(AppActions.PAY_BILL, onPayBill),
  ]);
}

export default AppSaga;
