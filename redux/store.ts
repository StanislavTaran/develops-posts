import {  Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import reducer, { State } from './rootReducer';
import rootSaga from './rootSaga';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore: MakeStore<State> = (context: Context) => {

  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: reducer,
    middleware: [sagaMiddleware],
    devTools: true,
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<State>(makeStore, { debug: true });
