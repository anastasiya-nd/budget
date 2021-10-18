import 'regenerator-runtime/runtime';
import { takeLatest, takeLeading, put, call, all } from 'redux-saga/effects';
import spendings from '../api';
import { REQUEST_SPENDINGS_PENDING, DELETE_SPENDING_PENDING, POST_SPENDING_PENDING } from './types';
import {
  requestSpendingsSuccess,
  requestSpendingsError,
  deleteSpendingSuccess,
  deleteSpendingError,
  postSpendingError,
  postSpendingSuccess,
} from './actions';

function* getSpendingsWorker(action) {
  try {
    const { page, perPage, category, labels, start, end } = action.payload;
    const response = yield call(
      spendings.getSpendings,
      page,
      perPage,
      category,
      labels,
      start,
      end
    );
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

function* postSpendingWorker(data) {
  try {
    const response = yield call(spendings.postSpending, data.payload.spending);
    yield put(postSpendingSuccess(response.data));
  } catch (error) {
    yield put(postSpendingError());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(REQUEST_SPENDINGS_PENDING, getSpendingsWorker),
    takeLeading(DELETE_SPENDING_PENDING, deleteSpendingWorker),
    takeLatest(POST_SPENDING_PENDING, postSpendingWorker),
  ]);
}
