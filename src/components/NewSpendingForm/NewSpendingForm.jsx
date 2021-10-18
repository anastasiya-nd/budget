import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Button from '../Button';
import { postSpendingPending } from '../../redux/actions';
import { getSpendings } from '../../redux/selectors';

const NewSpendingForm = ({ onClose, id }) => {
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
  const [category, setCategory] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('');
  const [note, setNote] = useState('');
  const [labels, setLabels] = useState([]);
  const spending = useSelector(getSpendings).find((item) => item._id === id); //eslint-disable-line
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!spending && spending.category) {
      if (spending.category) {
        setCategory(spending.category);
      }
      if (spending.createdAt) {
        const formatDate = new Date(spending.createdAt);
        setCreatedAt(formatDate);
      }
      if (spending.amount) {
        setAmount(+spending.amount);
      }
      if (spending.currency) {
        setCurrency(spending.currency);
      }
      if (spending.note) {
        setNote(spending.note);
      }
      if (spending.labels.length > 0) {
        setLabels(spending.labels);
      }
    }
  }, [spending]);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = {
      category,
      createdAt,
      amount,
      currency,
      note,
      labels,
    };
    if (!fields.category || !fields.createdAt || !fields.amount || !fields.currency) {
      console.log('Required fields');
    } else {
      if (spending) {
        console.log('update query');
      } else {
        dispatch(postSpendingPending(fields));
      }
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
  spending: PropTypes.object, //eslint-disable-line
  id: PropTypes.string,
};

NewSpendingForm.defaultProps = {
  id: '',
};

export default NewSpendingForm;
