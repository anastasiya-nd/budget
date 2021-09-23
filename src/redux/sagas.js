import 'regenerator-runtime/runtime';
import { takeEvery, put, call, all } from '@redux-saga/core/effects';
import spendings from '../api/api';
import { REQUEST_SPENDINGS } from './types';
import { getSpendings } from './actions';

function* getSpendingsWorker(data) {
  const response = yield call(spendings.getSpendings, data.page, data.perPage);
  yield put(getSpendings(response.data.spendings, response.data.pagination));
}

function* getSpendingsWatcher() {
  yield takeEvery(REQUEST_SPENDINGS, getSpendingsWorker);
}

export default function* rootSaga() {
  yield all([getSpendingsWatcher()]);
}
