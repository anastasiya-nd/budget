import React, { useState } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import CategoryPopover from '../../components/CategoryPopover';
import LabelsPopover from '../../components/LabelsPopover';
// import Select from '../../components/Select';
import SpendingItem from '../../components/SpendingItem';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import RadioButtonField from '../../components/RadioButtonField';

const Home = () => {
  const spendingsArray = [
    {
      category: 'food',
      note: 'fish, bread, eggs, milk, bread, ice-cream',
      labels: ['Mall', 'Party', 'Mall', 'Party'],
      createdAt: 'Sep 29, 2019',
      amount: 25.0,
      currency: 'BYN',
      id: 'faf2',
    },
    {
      category: 'shopping',
      note: 't-shirt, jacket, cup, keyboard',
      labels: [],
      createdAt: 'Sep 22, 2020',
      amount: 100.0,
      currency: 'BYN',
      id: 'fdwf',
    },
    {
      category: 'bills',
      note: 'internet, phone, electricity, water',
      labels: ['Home'],
      createdAt: 'Sep 22, 2020',
      amount: 60.5,
      currency: 'BYN',
      id: 'fdcfe',
    },
  ];
  const [isOpenModal, toggleModal] = useState(false);

  const handleOpenModal = () => {
    toggleModal(true);
  };

  const handleCloseModal = () => {
    toggleModal(false);
  };

  // const categories = [
  //   'Shopping',
  //   'Entertainment',
  //   'Car',
  //   'Bills',
  //   'Food',
  //   'Home',
  //   'Education',
  //   'Other',
  // ];

  const currencyData = [
    { id: '1', key: 'byn', value: 'BYN' },
    { id: '2', key: 'rub', value: 'RUB' },
    { id: '3', key: 'usd', value: 'USD' },
    { id: '4', key: 'eur', value: 'EUR' },
  ];
  const [currency, setCurrency] = useState('');
  const onChange = (val) => {
    setCurrency(val);
  };

  return (
    <section>
      <RadioButtonField inputs={currencyData} active={currency} onChange={onChange} />
      <Calendar />
      {isOpenModal && (
        <Modal title="New spending" onClose={handleCloseModal}>
          <>Modal content</>
        </Modal>
      )}
      <LabelsPopover />
      <CategoryPopover />
      <Button text="Add new spending +" onClick={handleOpenModal} />
      {/* <Select label="Category" placeholder="Select a spending category" options={categories} /> */}
      {spendingsArray.map((s) => (
        <SpendingItem
          key={s.id}
          category={s.category}
          note={s.note}
          labels={s.labels}
          createdAt={s.createdAt}
          amount={s.amount}
          currency={s.currency}
        />
      ))}
    </section>
  );
};

export default Home;
