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
export const order = (order: Async.Order): AppActionTypes => ({
  type: AppActions.ORDER,
  order,
});
