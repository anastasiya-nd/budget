import {
  REQUEST_SPENDINGS_PENDING,
  REQUEST_SPENDINGS_SUCCESS,
  REQUEST_SPENDINGS_ERROR,
  DELETE_SPENDING_SUCCESS,
  DELETE_SPENDING_ERROR,
  DELETE_SPENDING_PENDING,
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
    case DELETE_SPENDING_PENDING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SPENDING_SUCCESS:
      return {
        ...state,
        spendings: state.spendings.filter((spending) => spending._id !== action.payload.id), // eslint-disable-line
        loading: false,
      };
    case DELETE_SPENDING_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
