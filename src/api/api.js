import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

const spendings = {
  getSpendings(page, perPage) {
    return instance.get('/spendings', {
      params: {
        page,
        perPage,
      },
    });
  },
  deleteSpending(id) {
    return instance.delete(`/spendings/${id}`);
  },
  postSpending(spending) {
    return instance.post('/spendings', spending);
  },
};

export default spendings;
