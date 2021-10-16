import {
  REQUEST_SPENDINGS_PENDING,
  REQUEST_SPENDINGS_SUCCESS,
  REQUEST_SPENDINGS_ERROR,
  DELETE_SPENDING_PENDING,
  DELETE_SPENDING_SUCCESS,
  DELETE_SPENDING_ERROR,
} from './types';

export const requestSpendingsSuccess = (spendings, pagination) => {
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

export const deleteSpendingPending = (id) => {
  return {
    type: DELETE_SPENDING_PENDING,
    payload: {
      id,
    },
  };
};

export const deleteSpendingSuccess = (id) => {
  return {
    type: DELETE_SPENDING_SUCCESS,
    payload: {
      id,
    },
  };
};

export const deleteSpendingError = () => {
  return {
    type: DELETE_SPENDING_ERROR,
  };
};
