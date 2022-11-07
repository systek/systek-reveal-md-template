import { Async } from "../../api";

import { ActionTypes } from "../types";

export interface AppState {
  readonly menu: Async.Menu;
  readonly order: Async.Order;
}

export enum AppActions {
  INIT = "APP_INIT",
  MENU = "APP_MENU",
  ORDER = "APP_ORDER",
}

export interface AppActionData {
  init?: string;
  menu: Async.Menu;
  order: Async.Order;
}

export type AppActionTypes = ActionTypes<AppActions, AppActionData>;
