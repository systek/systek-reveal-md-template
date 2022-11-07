import { Async, PlacedOrder } from "../../api";
import { AppActions, AppActionTypes } from "./types";

export const menuInit = (): AppActionTypes => ({ type: AppActions.MENU_INIT });
export const menu = (menu: Async.Menu): AppActionTypes => ({
  type: AppActions.MENU,
  menu,
});

export const orderInit = (placedOrder: PlacedOrder): AppActionTypes => ({
  type: AppActions.ORDER_INIT,
  placedOrder,
});

export const moreBeer = (): AppActionTypes => ({
  type: AppActions.ORDER_MORE_BEER,
});

export const payBill = (): AppActionTypes => ({
  type: AppActions.PAY_BILL,
});

export const order = (order: Async.Order): AppActionTypes => ({
  type: AppActions.ORDER,
  order,
});
