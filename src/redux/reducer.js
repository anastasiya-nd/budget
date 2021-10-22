import {
  REQUEST_SPENDINGS_PENDING,
  REQUEST_SPENDINGS_SUCCESS,
  REQUEST_SPENDINGS_ERROR,
  DELETE_SPENDING_SUCCESS,
  DELETE_SPENDING_ERROR,
  DELETE_SPENDING_PENDING,
  POST_SPENDING_PENDING,
  POST_SPENDING_SUCCESS,
  POST_SPENDING_ERROR,
  UPDATE_SPENDING_PENDING,
  UPDATE_SPENDING_SUCCESS,
  UPDATE_SPENDING_ERROR,
  REQUEST_ALL_SPENDINGS_PENDING,
  REQUEST_ALL_SPENDINGS_SUCCESS,
  REQUEST_ALL_SPENDINGS_ERROR,
} from './types';

const initialState = {
  allSpendings: [],
  spendings: [],
  pagination: {
    total: undefined,
    page: 1,
    perPage: 5,
  },
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SPENDINGS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_SPENDINGS_SUCCESS:
      return {
        ...state,
        spendings: action.payload.spendings,
        pagination: action.payload.pagination,
        isLoading: false,
      };
    case REQUEST_SPENDINGS_ERROR:
      return {
        ...state,
        isLoading: false,
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
    case POST_SPENDING_PENDING:
      return {
        ...state,
        loading: true,
      };
    case POST_SPENDING_SUCCESS:
      return {
        ...state,
        spendings: [action.payload.spending, ...state.spendings],
        loading: false,
      };
    case POST_SPENDING_ERROR:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_SPENDING_PENDING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SPENDING_SUCCESS:
      return {
        ...state,
        spendings: state.spendings.map((spending) => {
          if (spending._id === action.payload.id) { //eslint-disable-line
            return { ...action.payload.spending };
          }
          return spending;
        }),
        loading: false,
      };
    case UPDATE_SPENDING_ERROR:
      return {
        ...state,
        loading: false,
      };
    case REQUEST_ALL_SPENDINGS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_ALL_SPENDINGS_SUCCESS:
      return {
        ...state,
        allSpendings: action.payload.allSpendings,
        loading: false,
      };
    case REQUEST_ALL_SPENDINGS_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
