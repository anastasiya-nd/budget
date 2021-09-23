import { GET_SPENDINGS } from './types';

const initialState = {
  spendings: [],
  pagination: {
    total: undefined,
    page: 1,
    perPage: 10,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPENDINGS:
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
