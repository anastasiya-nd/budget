import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

const spendings = {
  getSpendings(page, perPage, category, labels, start, end) {
    return instance.get('/spendings', {
      params: {
        page,
        perPage,
        category,
        labels,
        start,
        end,
      },
    });
  },
  deleteSpending(id) {
    return instance.delete(`/spendings/${id}`);
  },
  postSpending(spending) {
    return instance.post('/spendings', spending);
  },
  updateSpending(id, spending) {
    return instance.patch(`/spendings/${id}`, spending);
  },
  getChartData(year) {
    return instance.get('/chart', {
      params: {
        year,
      },
    });
  },
};

export default spendings;
