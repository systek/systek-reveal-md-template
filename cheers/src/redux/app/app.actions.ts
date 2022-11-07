import { Async } from "../../api";
import { AppActions, AppActionTypes } from "./types";

export const init = (): AppActionTypes => ({ type: AppActions.INIT });
export const menu = (menu: Async.Menu): AppActionTypes => ({
  type: AppActions.MENU,
  menu,
});

export const order = (order: Async.Order): AppActionTypes => ({
  type: AppActions.ORDER,
  order,
});
