import {
  REQUEST_SPENDINGS_PENDING,
  REQUEST_SPENDINGS_SUCCESS,
  REQUEST_SPENDINGS_ERROR,
  DELETE_SPENDING_PENDING,
  DELETE_SPENDING_SUCCESS,
  DELETE_SPENDING_ERROR,
  POST_SPENDING_PENDING,
  POST_SPENDING_SUCCESS,
  POST_SPENDING__ERROR,
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

export const deleteSpendingError = (message) => {
  return {
    type: DELETE_SPENDING_ERROR,
    payload: {
      message,
    },
  };
};

export const postSpendingPending = (spending) => {
  return {
    type: POST_SPENDING_PENDING,
    payload: {
      spending,
    },
  };
};

export const postSpendingSuccess = (spending) => {
  return {
    type: POST_SPENDING_SUCCESS,
    payload: {
      spending,
    },
  };
};

export const postSpendingError = () => {
  return {
    type: POST_SPENDING__ERROR,
  };
};
