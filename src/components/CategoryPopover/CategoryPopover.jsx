import React, { useState } from 'react';
import Popover from '../Popover/Popover';
import * as Styled from './styles';

const CategoryPopover = () => {
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
  const [categoryValue, setValue] = useState('');

  const setCategory = (category) => {
    setValue(category);
  };

  return (
    <Popover popoverLabel="Category">
      <>
        <Styled.CategoryWrap>
          {categories.map((category) => (
            <Styled.CategoryItem
              key={category}
              isActive={categoryValue === category}
              onClick={() => setCategory(category)}
            >
              {category}
            </Styled.CategoryItem>
          ))}
        </Styled.CategoryWrap>
        <Styled.ButtonWrap>
          <Styled.ButtonItem text="Apply" onClick={() => console.log(categoryValue)} />
        </Styled.ButtonWrap>
      </>
    </Popover>
  );
};

export default CategoryPopover;
