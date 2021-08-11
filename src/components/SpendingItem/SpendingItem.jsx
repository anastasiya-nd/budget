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
import * as Styled from './styles';

const SpendingItem = (props) => {
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

  const { category, note, labels, createdAt, amount, currency } = props;

  return (
      <Styled.Spending>
        {getIcon(category)}
        <Styled.CategoryWrap>
          <Styled.CategoryName>{category}</Styled.CategoryName>
          {note && <Styled.Description>{note}</Styled.Description>}
        </Styled.CategoryWrap>
        {!!labels.length && (
          <Styled.LabelWrap>
            <Styled.Label>{labels[0]}</Styled.Label>
            {labels[1] && <Styled.Label>{labels[1]}</Styled.Label>}
            {labels.length > 2 &&
              <Styled.HiddenLabelsNumber>+{labels.length - 2}</Styled.HiddenLabelsNumber>}
          </Styled.LabelWrap>
        )}
        <Styled.DateAndAmountWrap>
          <Styled.Date>{createdAt}</Styled.Date>
          <Styled.Amount>{amount} {currency}</Styled.Amount>
        </Styled.DateAndAmountWrap>
      </Styled.Spending>
  )
}

SpendingItem.propTypes = {
  category: PropTypes.string.isRequired,
  note: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.string),
  createdAt: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
};

SpendingItem.defaultProps = {
  note: '',
  labels: []
};

export default SpendingItem;
