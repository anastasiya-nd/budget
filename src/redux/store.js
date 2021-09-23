import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reducer from './reducer';
import rootSaga from './sagas';

const saga = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(saga));

saga.run(rootSaga);
window.store = store;

export default store;
