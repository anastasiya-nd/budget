import {
  REQUEST_SPENDINGS_PENDING,
  REQUEST_SPENDINGS_SUCCESS,
  REQUEST_SPENDINGS_ERROR,
} from './types';

const initialState = {
  spendings: [],
  pagination: {
    total: undefined,
    page: 1,
    perPage: 1,
  },
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SPENDINGS_SUCCESS:
      return {
        ...state,
        spendings: action.payload.spendings,
        pagination: action.payload.pagination,
        loading: false,
      };
    case REQUEST_SPENDINGS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_SPENDINGS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
