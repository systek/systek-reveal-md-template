/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, put, takeEvery } from "redux-saga/effects";
import { AppActions } from "./types";
// import { serialize } from '../../utils';

function* onInit() {
  yield put({ type: "HJELP" });
}

export function* AppSaga() {
  yield all([takeEvery(AppActions.INIT, onInit)]);
}

export default AppSaga;
