import {
  REQUEST_SPENDINGS_PENDING,
  REQUEST_SPENDINGS_SUCCESS,
  REQUEST_SPENDINGS_ERROR,
  DELETE_SPENDING_PENDING,
  DELETE_SPENDING_SUCCESS,
  DELETE_SPENDING_ERROR,
  POST_SPENDING_PENDING,
  POST_SPENDING_SUCCESS,
  POST_SPENDING_ERROR,
  UPDATE_SPENDING_PENDING,
  UPDATE_SPENDING_SUCCESS,
  UPDATE_SPENDING_ERROR,
  REQUEST_CHART_DATA_PENDING,
  REQUEST_CHART_DATA_SUCCESS,
  REQUEST_CHART_DATA_ERROR,
} from './types';

export const requestSpendingsPending = (page, perPage, category, labels, start, end) => {
  return {
    type: REQUEST_SPENDINGS_PENDING,
    payload: {
      page,
      perPage,
      category,
      labels,
      start,
      end,
    },
  };
};

export const requestSpendingsSuccess = (spendings, pagination) => {
  return {
    type: REQUEST_SPENDINGS_SUCCESS,
    payload: {
      spendings,
      pagination,
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
    type: POST_SPENDING_ERROR,
  };
};

export const updateSpendingPending = (id, spending) => {
  return {
    type: UPDATE_SPENDING_PENDING,
    payload: {
      id,
      spending,
    },
  };
};

export const updateSpendingSuccess = (id, spending) => {
  return {
    type: UPDATE_SPENDING_SUCCESS,
    payload: {
      id,
      spending,
    },
  };
};

export const updateSpendingError = () => {
  return {
    type: UPDATE_SPENDING_ERROR,
  };
};

export const requestChartDataPending = (year) => {
  return {
    type: REQUEST_CHART_DATA_PENDING,
    payload: {
      year,
    },
  };
};

export const requestChartDataSuccess = (chartData) => {
  return {
    type: REQUEST_CHART_DATA_SUCCESS,
    payload: {
      chartData,
    },
  };
};

export const requestChartDataError = () => {
  return {
    type: REQUEST_CHART_DATA_ERROR,
  };
};
