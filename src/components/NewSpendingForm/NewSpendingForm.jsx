import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Button from '../Button';
import { postSpendingPending } from '../../redux/actions';

const NewSpendingForm = ({ onClose }) => {
  const categories = [
    'shopping',
    'entertainment',
    'car',
    'bills',
    'food',
    'home',
    'education',
    'other',
  ];
  const currencyData = [
    { id: '1', value: 'byn', label: 'BYN' },
    { id: '2', value: 'rub', label: 'RUB' },
    { id: '3', value: 'usd', label: 'USD' },
    { id: '4', value: 'eur', label: 'EUR' },
  ];
  const [category, setCategory] = useState(''); //eslint-disable-line
  const [createdAt, setCreatedAt] = useState('');
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('');
  const [note, setNote] = useState('');
  const [labels, setLabels] = useState([]);
  const dispatch = useDispatch();
  const fieldNames = { category, createdAt, amount, currency, note, labels };

  const handleChangeCategory = (val) => {
    setCategory(val);
  };

  const handleChangePeriodStart = (date) => {
    setCreatedAt(date);
  };

  const handleChangeAmount = (val) => {
    setAmount(val);
  };

  const handleChangeCurrency = (val) => {
    setCurrency(val);
  };

  const handleChangeNote = (val) => {
    setNote(val);
  };

  const handleDeleteLabel = (deletingLabel) => {
    const newLabels = labels.filter((label) => label !== deletingLabel);
    setLabels(newLabels);
  };

  const handleChangeLabel = (val) => {
    setLabels([...labels, val]);
  };

  const setSpendingValues = () => {
    return Object.fromEntries(Object.entries(fieldNames).filter(([key, value]) => value)); //eslint-disable-line
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const spendingValues = setSpendingValues();
    if (
      !spendingValues.category ||
      !spendingValues.createdAt ||
      !spendingValues.amount ||
      !spendingValues.currency
    ) {
      console.log('Required fields');
    } else {
      dispatch(postSpendingPending(spendingValues));
      onClose();
    }
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.FormContent>
        <Styled.CategorySelect
          fieldLabel="Category"
          placeholder="Select a spending category"
          options={categories}
          onChange={handleChangeCategory}
          active={category}
        />
        <Styled.Date
          fieldLabel="Date"
          placeholder="Select a spending date"
          activeDate={createdAt}
          onChange={handleChangePeriodStart}
        />
        <Styled.Amount fieldLabel="Amount" onChange={handleChangeAmount} value={amount} />
        <Styled.Currency inputs={currencyData} active={currency} onChange={handleChangeCurrency} />
        <Styled.Note
          fieldLabel="Note"
          placeholder="Type spending description here"
          value={note}
          onChange={handleChangeNote}
        />
        <Styled.Labels
          fieldLabel="Labels"
          placeholder="Add label name"
          labels={labels}
          onChange={handleChangeLabel}
          onDelete={handleDeleteLabel}
        />
      </Styled.FormContent>
      <Styled.ButtonWrap>
        <Button text="Close" variant="secondary" onClick={onClose} />
        <Button text="Save" type="submit" />
      </Styled.ButtonWrap>
    </Styled.Form>
  );
};

NewSpendingForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NewSpendingForm;
