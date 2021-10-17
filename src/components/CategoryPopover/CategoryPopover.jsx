import React from 'react';
import PropTypes from 'prop-types';
import Popover from '../Popover/Popover';
import * as Styled from './styles';

const CategoryPopover = ({ categoryValue, setCategory, getSpendingValues }) => {
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

  return (
    <Popover popoverLabel="Category">
      <>
        <Styled.CategoryWrap>
          {categories.map((category, index) => (
            <Styled.CategoryItem
              key={index}  //eslint-disable-line
              isActive={categoryValue === category}
              onClick={() => setCategory(category)}
            >
              {category}
            </Styled.CategoryItem>
          ))}
        </Styled.CategoryWrap>
        <Styled.ButtonWrap>
          <Styled.ButtonItem text="Apply" onClick={getSpendingValues} />
        </Styled.ButtonWrap>
      </>
    </Popover>
  );
};

CategoryPopover.propTypes = {
  categoryValue: PropTypes.string,
  setCategory: PropTypes.func.isRequired,
  getSpendingValues: PropTypes.func.isRequired,
};

CategoryPopover.defaultProps = {
  categoryValue: '',
};

export default CategoryPopover;
