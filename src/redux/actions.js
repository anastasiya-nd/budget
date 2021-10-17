import {
  REQUEST_SPENDINGS_PENDING,
  REQUEST_SPENDINGS_SUCCESS,
  REQUEST_SPENDINGS_ERROR,
  DELETE_SPENDING_PENDING,
  DELETE_SPENDING_SUCCESS,
  DELETE_SPENDING_ERROR,
  PUT_SPENDING_PENDING,
  PUT_SPENDING_SUCCESS,
  PUT_SPENDING__ERROR,
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

export const putSpendingPending = (spending) => {
  return {
    type: PUT_SPENDING_PENDING,
    payload: {
      spending,
    },
  };
};

export const putSpendingSuccess = (spending) => {
  return {
    type: PUT_SPENDING_SUCCESS,
    payload: {
      spending,
    },
  };
};

export const putSpendingError = () => {
  return {
    type: PUT_SPENDING__ERROR,
  };
};
