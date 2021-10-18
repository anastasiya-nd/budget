import React from 'react';
import Popover from '../Popover/Popover';
import * as Styled from './styles';

const CategoryPopover = ({categoryValue, setCategory, getSpendingValues}) => { //eslint-disable-line
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

export default CategoryPopover;
