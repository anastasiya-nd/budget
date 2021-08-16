import React, { useState } from 'react'
import * as Styled from './styles';
import Popover from '../Popover/Popover';
// import Button from '../Button'

const CategoryPopover = () => {
  const categories = ['Shopping', 'Entertainment', 'Car', 'Bills', 'Food', 'Home', 'Education', 'Other'];

  const [categoryValue, setValue] = useState('');

  const setCategory = (e) => {
    setValue(e.target.dataset.value);
  };

  return (
    <Popover popoverLabel='Category'>
      <>
        <Styled.CategoryWrap>
          {categories.map(category => (
            <Styled.CategoryItem
              key={category}
              data-value={category}
              isActive={categoryValue === category}
              onClick={(e) => setCategory(e)}>
              {category}
            </Styled.CategoryItem>
          ))}
        </Styled.CategoryWrap>
        <Styled.ButtonItem text='Apply' onClick={() => console.log(categoryValue)}/>
      </>
    </Popover>
  )
}

export default CategoryPopover;
