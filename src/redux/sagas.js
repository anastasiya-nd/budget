import 'regenerator-runtime/runtime';
import { takeLatest, takeLeading, put, call, all } from 'redux-saga/effects';
import spendings from '../api';
import {
  REQUEST_SPENDINGS_PENDING,
  DELETE_SPENDING_PENDING,
  POST_SPENDING_PENDING,
  UPDATE_SPENDING_PENDING,
  REQUEST_ALL_SPENDINGS_PENDING,
} from './types';
import {
  requestSpendingsSuccess,
  requestSpendingsError,
  deleteSpendingSuccess,
  deleteSpendingError,
  postSpendingError,
  postSpendingSuccess,
  updateSpendingSuccess,
  updateSpendingError,
  requestAllSpendingsSuccess,
  requestAllSpendingsError,
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

function* updateSpendingWorker(action) {
  try {
    const response = yield call(
      spendings.updateSpending,
      action.payload.id,
      action.payload.spending
    );
    yield put(updateSpendingSuccess(action.payload.id, response.data));
  } catch (error) {
    yield put(updateSpendingError());
  }
}
function* getAllSpendingsWorker(action) {
  try {
    const response = yield call(spendings.getSpendings, action.payload.category);
    yield put(requestAllSpendingsSuccess(response.data.spendings));
  } catch (error) {
    yield put(requestAllSpendingsError());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(REQUEST_SPENDINGS_PENDING, getSpendingsWorker),
    takeLeading(DELETE_SPENDING_PENDING, deleteSpendingWorker),
    takeLatest(POST_SPENDING_PENDING, postSpendingWorker),
    takeLatest(UPDATE_SPENDING_PENDING, updateSpendingWorker),
    takeLatest(REQUEST_ALL_SPENDINGS_PENDING, getAllSpendingsWorker),
  ]);
}
