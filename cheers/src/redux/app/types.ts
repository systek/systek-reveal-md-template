import { Async, OrderDTO, PlacedOrder } from "../../api";

import { ActionTypes } from "../types";

export interface AppState {
  readonly menu: Async.Menu;
  readonly order: Async.Order;
}

export enum AppActions {
  MENU_INIT = "APP_MENU_INIT",
  MENU = "APP_MENU",
  ORDER = "APP_ORDER",
  ORDER_INIT = "APP_ORDER_INIT",
}

export interface AppActionData {
  menu: Async.Menu;
  order: Async.Order;
  placedOrder: PlacedOrder;
}

export type AppActionTypes = ActionTypes<AppActions, AppActionData>;
