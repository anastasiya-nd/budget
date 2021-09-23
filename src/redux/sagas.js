import 'regenerator-runtime/runtime';
import { takeEvery, put, call, all } from 'redux-saga/effects';
import spendings from '../api/api';
import { REQUEST_SPENDINGS_PENDING } from './types';
import { requestSpendingsSuccess, requestSpendingsError } from './actions';

function* getSpendingsWorker(data) {
  try {
    const response = yield call(spendings.getSpendings, data.page, data.perPage);
    yield put(requestSpendingsSuccess(response.data.spendings, response.data.pagination));
  } catch (error) {
    yield put(requestSpendingsError());
  }
}

export default function* rootSaga() {
  yield all([takeEvery(REQUEST_SPENDINGS_PENDING, getSpendingsWorker)]);
}
