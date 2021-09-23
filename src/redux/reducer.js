import { REQUEST_SPENDINGS_SUCCESS } from './types';

const initialState = {
  spendings: [],
  pagination: {
    total: undefined,
    page: 1,
    perPage: 5,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SPENDINGS_SUCCESS:
      return {
        ...state,
        spendings: [...action.spendings],
        pagination: { ...action.pagination },
      };
    default:
      return state;
  }
};

export default reducer;
