import React, { useState } from 'react';
import CategoryPopover from '../../components/CategoryPopover';
import LabelsPopover from '../../components/LabelsPopover';
import SpendingItem from '../../components/SpendingItem';
import NumberField from '../../components/NumberField';

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

  const [amount, setAmount] = useState(0);
  const onChange = (val) => {
    setAmount(val);
  };

  return (
    <section>
      <NumberField label="Amount" onChange={onChange} value={amount} />
      <LabelsPopover />
      <CategoryPopover />
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
