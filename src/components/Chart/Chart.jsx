import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { requestChartDataPending } from '../../redux/actions';
import { getChartData } from '../../redux/selectors';
import { ChartWrap } from './style';

const Chart = () => {
  let other;
  let shopping;
  let entertainment;
  let car;
  let bills;
  let food;
  let home;
  let education;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const chartData = useSelector(getChartData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestChartDataPending(currentYear));
  }, []);

  const getCategoryAmounts = (categoryName) => {
    return chartData.find((categoryItems) => categoryItems.category === categoryName).amounts;
  };

  if (chartData.length !== 0) {
    other = getCategoryAmounts('other');
    shopping = getCategoryAmounts('shopping');
    entertainment = getCategoryAmounts('entertainment');
    car = getCategoryAmounts('car');
    bills = getCategoryAmounts('bills');
    food = getCategoryAmounts('food');
    home = getCategoryAmounts('home');
    education = getCategoryAmounts('education');
  }

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
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        // display: false,
        ticks: {
          color: '#B2B2B2',
          font: {
            size: 12,
          },
        },
      },
      y: {
        stacked: true,
        display: false,
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <ChartWrap>
      <Bar data={data} options={options} />
    </ChartWrap>
  );
};

export default Chart;
