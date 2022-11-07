import { createSelector } from "reselect";
import { RootState } from "../root.reducer";
import { selectFromRoot } from "../utils";
import { AppState } from "./types";

export const getAppState = (state: RootState): AppState =>
  selectFromRoot(state, "App");

export const getOrder = createSelector(getAppState, ({ order }) => order);
export const getMenu = createSelector(getAppState, ({ menu }) => menu);
