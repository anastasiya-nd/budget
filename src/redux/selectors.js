export const getSpendings = (state) => state.spendings;

export const getPagination = (state) => state.pagination;

export const getLoadingValue = (state) => state.isLoading;

export const getSpendingById = (state, id) => state.spendings.find((s) => s._id === id); //eslint-disable-line

export const getChartData = (state) => state.chartData;
