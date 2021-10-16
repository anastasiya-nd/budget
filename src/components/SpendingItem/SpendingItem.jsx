import React from 'react';
import PropTypes from 'prop-types';
import Food from '../Icons/Food';
import Shopping from '../Icons/Shopping';
import Entertainment from '../Icons/Entertainment';
import Car from '../Icons/Car';
import Bills from '../Icons/Bills';
import Home from '../Icons/Home';
import Education from '../Icons/Education';
import Other from '../Icons/Other';
import DeleteIcon24 from '../Icons/DeleteIcon24';
import EditIcon from '../Icons/EditIcon';
import * as Styled from './styles';

const SpendingItem = ({ category, note, labels, createdAt, amount, currency, id, onDelete }) => {
  const shortMonthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const getIcon = (categoryName) => {
    switch (categoryName) {
      case 'Food':
        return <Food />;
      case 'Shopping':
        return <Shopping />;
      case 'Entertainment':
        return <Entertainment />;
      case 'Car':
        return <Car />;
      case 'Bills':
        return <Bills />;
      case 'Home':
        return <Home />;
      case 'Education':
        return <Education />;
      case 'Other':
        return <Other />;
      default:
        return null;
    }
  };
  const getFormatDate = (date) => {
    const formatDate = new Date(date);
    return `${
      shortMonthNames[formatDate.getMonth()]
    } ${formatDate.getDate()}, ${formatDate.getFullYear()}`;
  };
  const deleteSpending = (spendingID) => {
    onDelete(spendingID);
  };

  return (
    <Styled.Spending>
      <Styled.IconWrap variant={category.toLowerCase()}>{getIcon(category)}</Styled.IconWrap>
      <Styled.CategoryWrap>
        <Styled.CategoryName>{category}</Styled.CategoryName>
        {note && <Styled.Description>{note}</Styled.Description>}
      </Styled.CategoryWrap>
      {!!labels.length && (
        <Styled.LabelWrap>
          <Styled.Label>{labels[0]}</Styled.Label>
          {labels[1] && <Styled.Label>{labels[1]}</Styled.Label>}
          {labels.length > 2 && (
            <Styled.HiddenLabelsNumber title={labels}>
              +{labels.length - 2}
            </Styled.HiddenLabelsNumber>
          )}
        </Styled.LabelWrap>
      )}
      <Styled.DateAndAmountWrap>
        <Styled.Date>{getFormatDate(createdAt)}</Styled.Date>
        <Styled.Amount>
          {amount} {currency}
        </Styled.Amount>
      </Styled.DateAndAmountWrap>
      <Styled.ButtonWrap>
        <Styled.SpendingButton type="button">
          <EditIcon />
        </Styled.SpendingButton>
        <Styled.SpendingButton type="button" onClick={() => deleteSpending(id)}>
          <DeleteIcon24 />
        </Styled.SpendingButton>
      </Styled.ButtonWrap>
    </Styled.Spending>
  );
};

SpendingItem.propTypes = {
  category: PropTypes.string.isRequired,
  note: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.string),
  createdAt: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

SpendingItem.defaultProps = {
  note: '',
  labels: [],
};

export default SpendingItem;
