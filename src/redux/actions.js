import {
  REQUEST_SPENDINGS_PENDING,
  REQUEST_SPENDINGS_SUCCESS,
  REQUEST_SPENDINGS_ERROR,
} from './types';

export const requestSpendingsSuccess = (spendings, pagination) => { //eslint-disable-line
  return {
    type: REQUEST_SPENDINGS_SUCCESS,
    payload: {
      spendings,
      pagination,
    },
  };
};

export const requestSpendingsPending = (page, perPage) => {
  return {
    type: REQUEST_SPENDINGS_PENDING,
    payload: {
      page,
      perPage,
    },
  };
};

export const requestSpendingsError = () => {
  return {
    type: REQUEST_SPENDINGS_ERROR,
  };
};
