import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Button from '../Button';

const NewSpendingForm = ({ onClose }) => {
  const categories = [
    'Shopping',
    'Entertainment',
    'Car',
    'Bills',
    'Food',
    'Home',
    'Education',
    'Other',
  ];
  const [category, setCategory] = useState(''); //eslint-disable-line
  const handleChangeCategory = (val) => {
    setCategory(val);
  };

  const [amount, setAmount] = useState(0);
  const handleChangeAmount = (val) => {
    setAmount(val);
  };

  const currencyData = [
    { id: '1', value: 'byn', label: 'BYN' },
    { id: '2', value: 'rub', label: 'RUB' },
    { id: '3', value: 'usd', label: 'USD' },
    { id: '4', value: 'eur', label: 'EUR' },
  ];
  const [currency, setCurrency] = useState('');
  const handleChangeCurrency = (val) => {
    setCurrency(val);
  };

  const [note, setNote] = useState('');
  const handleChangeNote = (val) => {
    setNote(val);
  };

  const [labels, setLabels] = useState(['Other']);
  const handleDeleteLabel = (deletingLabel) => {
    const newLabels = labels.filter((label) => label !== deletingLabel);
    setLabels(newLabels);
  };
  const handleChangeLabel = (val) => {
    setLabels([...labels, val]);
  };

  const [periodStart, setPeriodStart] = useState('');
  const handleChangePeriodStart = (date) => {
    setPeriodStart(date);
  };

  return (
    <Styled.Form>
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
          activeDate={periodStart}
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
        <Button text="Save" type="submit" onClick={() => console.log(1)} />
      </Styled.ButtonWrap>
    </Styled.Form>
  );
};

NewSpendingForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NewSpendingForm;
