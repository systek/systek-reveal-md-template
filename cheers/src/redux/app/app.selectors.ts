import { createSelector } from "reselect";
import { RootState } from "../root.reducer";
import { selectFromRoot } from "../utils";
import { AppState } from "./types";

import { getMenu as apiMenu } from "../../api/api";
import { MenuDTO } from "../../api";

export const getAppState = (state: RootState): AppState =>
  selectFromRoot(state, "App");
export const getOrder = createSelector(getAppState, ({ order }) => order);
export const getMenu = createSelector(getAppState, ({ menu }) => menu);
export const getCost = createSelector(getOrder, apiMenu, (order, menu) =>
  Object.entries(order || {}).reduce(
    (curr, [key, val]) => curr + (menu[key as keyof MenuDTO] || 0) * (val || 0),
    0
  )
);
