import { AsyncData } from "@swan-io/boxed";
import { passReducer, reducerForProducers, writeToDraft } from "../utils";
import { AppActions, AppActionTypes, AppState } from "./types";

export const initialState: AppState = {
  menu: AsyncData.NotAsked(),
  order: AsyncData.NotAsked(),
};

const appReducer = reducerForProducers<AppState, AppActionTypes, AppActions>(
  initialState,
  {
    [AppActions.MENU_INIT]: passReducer,
    [AppActions.MENU]: writeToDraft("menu"),
    [AppActions.ORDER_INIT]: passReducer,
    [AppActions.ORDER]: writeToDraft("order"),
  }
);

export default appReducer;
