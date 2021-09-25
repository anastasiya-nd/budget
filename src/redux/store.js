import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import rootSaga from './sagas';

const saga = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(rootSaga);

export default store;
