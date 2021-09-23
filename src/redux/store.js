import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from './sagas';

const saga = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  applyMiddleware(saga),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

saga.run(rootSaga);

export default store;
