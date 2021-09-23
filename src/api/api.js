import axios from 'axios';

const spendings = {
  getSpendings(page = 1, perPage = 10) {
    return axios.get('http://localhost:3000/api/v1/spendings', {
      params: {
        page,
        perPage,
      },
    });
  },
};

export default spendings;
