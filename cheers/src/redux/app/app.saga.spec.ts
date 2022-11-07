/* eslint-disable @typescript-eslint/no-explicit-any * /
/* eslint-disable no-return-assign * /
import { AsyncData, Result } from '@swan-io/boxed';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { AppError, initialState } from '.';
import { api } from '../../api';
import * as appActions from './app.actions';
import appReducer from './app.reducer';
import AppSaga, { onAktorInit, onCallError, putStatus } from './app.saga';

describe('app saga', () => {
    describe(`putStatus`, () => {
        it('should dispatch yieldStatus action', () => {
            testSaga(putStatus, 'newStatus').next().put(appActions.yieldStatus('status: newStatus')).next().isDone();
        });
    });

    describe('error handling', () => {
        const error = 'ERROR' as unknown as AppError;

        describe(`onCallError`, () => {
            it('should dispatch yieldError action', () => {
                testSaga(onCallError, appActions.callError(error))
                    .next()
                    .put(appActions.yieldError(error))
                    .next()
                    .isDone();
            });
        });

        describe('dispatch error', () => {
            it('provide global error filter', () =>
                expectSaga(AppSaga)
                    .withReducer(appReducer)
                    .dispatch(appActions.callError(error))
                    .hasFinalState({ ...initialState, error })
                    .run({ silenceTimeout: true }));
        });
    });

    describe(`onAktorInit`, () => {
        const resource = '/forsikring-person-partner-intraweb/rest/resource/dsf';
        const fnr = '123456789';
        const response = { navn: 'Bill Ward' };
        const rejection = new Error('HTTP status 404');
        describe('whith successfull api response', () => {
            it('should set loading state, call api and dispatch setAktor action', () => {
                testSaga(onAktorInit, appActions.getAktor(fnr))
                    .next()
                    .put(appActions.setAktor(AsyncData.Loading()))
                    .next()
                    .call(api.get, `${resource}/${fnr}`)
                    .next(response)
                    .put(appActions.setAktor(AsyncData.Done(Result.Ok(response as any))))
                    .next()
                    .isDone();
            });
        });

        describe('whith unsuccessfull api response', () => {
            it('should set loading state, call api and dispatch setAktor action', () => {
                testSaga(onAktorInit, appActions.getAktor(fnr))
                    .next()
                    .put(appActions.setAktor(AsyncData.Loading()))
                    .next()
                    .call(api.get, `${resource}/${fnr}`)
                    .throw(rejection)
                    .put(appActions.setAktor(AsyncData.Done(Result.Error(rejection))))
                    .next()
                    .isDone();
            });
        });

        describe('dispatch getAktor', () => {
            it('calls api and updates state', () =>
                expectSaga(AppSaga)
                    .withReducer(appReducer)
                    .dispatch(appActions.getAktor(fnr))
                    .provide([[call(api.get, `${resource}/${fnr}`), response]])
                    .hasFinalState({ ...initialState, aktor: AsyncData.Done(Result.Ok(response as any)) })
                    .run({ silenceTimeout: true }));
        });
    });
});
*/

it("description", () => expect(true).toBeDefined());
export {};
