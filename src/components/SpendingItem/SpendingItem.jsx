import React from 'react';
import Food from '../Icons/Food';
import Shopping from '../Icons/Shopping';
import Entertainment from '../Icons/Entertainment';
import Car from '../Icons/Car';
import Bills from '../Icons/Bills';
import Home from '../Icons/Home';
import Education from '../Icons/Education';
import Other from '../Icons/Other';
import * as Styled from './styles';


const SpendingItem = () => {
  const spendings = [
    {
      category: 'food',
      note: 'fish, bread, eggs, milk, bread, ice-cream',
      labels: ['Mall', 'Party', 'Mall', 'Party'],
      createdAt: 'Sep 29, 2019',
      amount: '25.00',
      currency: 'BYN',
      id: 'faf2'
    },
    {
      category: 'shopping',
      note: 't-shirt, jacket, cup, keyboard',
      createdAt: 'Sep 22, 2020',
      amount: '100.00',
      currency: 'BYN',
      id: 'fdwf'
    },
    {
      category: 'bills',
      note: 'internet, phone, electricity, water',
      labels: ['Home'],
      createdAt: 'Sep 22, 2020',
      amount: '60.50',
      currency: 'BYN',
      id: 'fdcfe'
    },
  ];

  const getIcon = (category) => {
    switch (category) {
      case 'food':
        return <Food />;
      case 'shopping':
        return <Shopping />;
      case 'entertainment':
        return <Entertainment />;
      case 'car':
        return <Car />;
      case 'bills':
        return <Bills />;
      case 'home':
        return <Home />;
      case 'education':
        return <Education />;
      case 'other':
        return <Other />;
      default:
        return null;
    }
  }

  return (
    spendings.map(s => (
      <Styled.Spending key={s.id}>
        {getIcon(s.category)}
        <Styled.CategoryWrap>
          <Styled.CategoryName>{s.category}</Styled.CategoryName>
          {s.note && <Styled.Description>{s.note}</Styled.Description>}
        </Styled.CategoryWrap>
        {s.labels && (
          <Styled.LabelWrap>
            <Styled.Label>{s.labels[0]}</Styled.Label>
            {s.labels[1] ? <Styled.Label>{s.labels[1]}</Styled.Label> : null}
            {s.labels.length > 2 ?
              <Styled.HiddenLabelsNumber>+{s.labels.length - 2}</Styled.HiddenLabelsNumber>
              : null}
          </Styled.LabelWrap>
        )}
        <Styled.DateAndAmountWrap>
          <Styled.Date>{s.createdAt}</Styled.Date>
          <Styled.Amount>{s.amount} {s.currency}</Styled.Amount>
        </Styled.DateAndAmountWrap>
      </Styled.Spending>
    ))
  )
}

export default SpendingItem;
