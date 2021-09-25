import 'regenerator-runtime/runtime';
import { takeLatest, put, call, all } from 'redux-saga/effects';
import spendings from '../api';
import { REQUEST_SPENDINGS_PENDING } from './types';
import { requestSpendingsSuccess, requestSpendingsError } from './actions';

function* getSpendingsWorker(data) {
  try {
    const response = yield call(spendings.getSpendings, data.payload.page, data.payload.perPage);
    yield put(requestSpendingsSuccess(response.data.spendings, response.data.pagination));
  } catch (error) {
    yield put(requestSpendingsError());
  }
}

export default function* rootSaga() {
  yield all([takeLatest(REQUEST_SPENDINGS_PENDING, getSpendingsWorker)]);
}
