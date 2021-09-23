import { GET_SPENDINGS, REQUEST_SPENDINGS } from './types';

export const getSpendings = (spendings, pagination) => { //eslint-disable-line
  return {
    type: GET_SPENDINGS,
    spendings,
    pagination,
  };
};

export const requestSpendings = (page, perPage) => {
  return {
    type: REQUEST_SPENDINGS,
    page,
    perPage,
  };
};
