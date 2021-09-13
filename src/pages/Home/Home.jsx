import React, { useState } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import CategoryPopover from '../../components/CategoryPopover';
import LabelsPopover from '../../components/LabelsPopover';
// import Select from '../../components/Select';
import SpendingItem from '../../components/SpendingItem';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import RadioButtonField from '../../components/RadioButtonField';
import TextareaField from '../../components/TextareaField';
import NumberField from '../../components/NumberField';
import LabelsField from '../../components/LabelsField';

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
    { id: '1', value: 'byn', label: 'BYN' },
    { id: '2', value: 'rub', label: 'RUB' },
    { id: '3', value: 'usd', label: 'USD' },
    { id: '4', value: 'eur', label: 'EUR' },
  ];
  const [currency, setCurrency] = useState('');
  const onChange = (val) => {
    setCurrency(val);
  };
  const [note, setNote] = useState(''); // eslint-disable-line

  const handleChangeNote = (val) => {
    setNote(val);
  };
  const [amount, setAmount] = useState(0);
  const handleChangeAmount = (val) => {
    setAmount(val);
  };

  const [labels, setLabels] = useState(['Other']);

  const onDelete = (deletingLabel) => {
    const newLabels = labels.filter((label) => label !== deletingLabel);
    setLabels(newLabels);
  };

  const onChange = (val) => {
    setLabels([...labels, val]);
  };

  console.log(labels);

  return (
    <section>
      <RadioButtonField inputs={currencyData} active={currency} onChange={handleChangeNote} />
      <TextareaField
        label="Note"
        placeholder="Type spending description here"
        value={note}
        onChange={onChange}
      />
      <NumberField label="Amount" onChange={handleChangeAmount} value={amount} />
      <LabelsField
        fieldLabel="Labels"
        placeholder="Add label name"
        labels={labels}
        onChange={onChange}
        onDelete={onDelete}
      />
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
