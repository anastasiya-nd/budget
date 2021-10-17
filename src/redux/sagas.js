import 'regenerator-runtime/runtime';
import { takeLatest, takeLeading, put, call, all } from 'redux-saga/effects';
import spendings from '../api';
import { REQUEST_SPENDINGS_PENDING, DELETE_SPENDING_PENDING } from './types';
import {
  requestSpendingsSuccess,
  requestSpendingsError,
  deleteSpendingSuccess,
  deleteSpendingError,
} from './actions';

function* getSpendingsWorker(data) {
  try {
    const response = yield call(spendings.getSpendings, data.payload.page, data.payload.perPage);
    yield put(requestSpendingsSuccess(response.data.spendings, response.data.pagination));
  } catch (error) {
    yield put(requestSpendingsError());
  }
}

function* deleteSpendingWorker(action) {
  try {
    yield call(spendings.deleteSpending, action.payload.id);
    yield put(deleteSpendingSuccess(action.payload.id));
  } catch (error) {
    yield put(deleteSpendingError(error.message));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(REQUEST_SPENDINGS_PENDING, getSpendingsWorker),
    takeLeading(DELETE_SPENDING_PENDING, deleteSpendingWorker),
  ]);
}
