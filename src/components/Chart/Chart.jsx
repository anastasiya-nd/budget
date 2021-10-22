import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { requestAllSpendingsPending } from '../../redux/actions';
import { getAllSpendings } from '../../redux/selectors';

const Chart = () => {
  const allSpendings = useSelector(getAllSpendings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAllSpendingsPending());
  }, []);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const getCategoryItems = (categoryName, items) => {
    return items.filter((i) => i.category === categoryName);
  };

  const getSpendingsforMonth = (year, categoryName) => {
    const items = getCategoryItems(categoryName, allSpendings);
    const arr = [];
    for (let i = 0; i < 12; i++) { //eslint-disable-line
      let sum = 0;
      items.forEach((item) => {
        if (
          new Date(item.createdAt).getFullYear() === year &&
          new Date(item.createdAt).getMonth() === i
        ) {
          if (item.currency === 'usd') {
            sum += item.amount * 2.5;
          }
          if (item.currency === 'rub') {
            sum += item.amount * 0.034;
          }
          if (item.currency === 'eur') {
            sum += item.amount * 2.8;
          }
          if (item.currency === 'byn') {
            sum += item.amount;
          }
        }
      });
      arr[i] = sum;
    }
    return arr;
  };

  const other = getSpendingsforMonth(currentYear, 'other');
  const shopping = getSpendingsforMonth(currentYear, 'shopping');
  const entertainment = getSpendingsforMonth(currentYear, 'entertainment');
  const car = getSpendingsforMonth(currentYear, 'car');
  const bills = getSpendingsforMonth(currentYear, 'bills');
  const food = getSpendingsforMonth(currentYear, 'food');
  const home = getSpendingsforMonth(currentYear, 'home');
  const education = getSpendingsforMonth(currentYear, 'education');

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Other',
        data: other,
        backgroundColor: '#5652BA',
      },
      {
        label: 'Shopping',
        data: shopping,
        backgroundColor: '#BE8C5F',
      },
      {
        label: 'Entertainment',
        data: entertainment,
        backgroundColor: '#FF6B74',
      },
      {
        label: 'Car',
        data: car,
        backgroundColor: '#EF8151',
      },
      {
        label: 'Bills',
        data: bills,
        backgroundColor: '#24695C',
      },
      {
        label: 'Food',
        data: food,
        backgroundColor: '#DFC4C0',
      },
      {
        label: 'Home',
        data: home,
        backgroundColor: '#B7AD56',
      },
      {
        label: 'Education',
        data: education,
        backgroundColor: '#00A9CE',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Chart;
