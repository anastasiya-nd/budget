import React, { useState } from 'react';
import * as Styled from './styles';
import Arrow from '../Icons/Arrow';

const CategoryPopover = () => {
  const categories = ['shopping', 'entertainment', 'car', 'bills', 'food', 'home', 'education', 'other'];
  const placeholder = '';
  const popoverLabel = 'Category';

  const [categoryValue, setCategory] = useState('');

  const [isOpen, toggleIsOpen] = useState(false);

  return (
    <Styled.PopoverWrap>
      <Styled.PopoverLabel onClick={() => toggleIsOpen(!isOpen)}>
        <span>{ placeholder || popoverLabel }</span>
        <Styled.ArrowWrap isOpen={isOpen}>
          <Arrow/>
        </Styled.ArrowWrap>
      </Styled.PopoverLabel>
      <Styled.PopoverContentWrap isOpen={isOpen}>
        <Styled.CategoryWrap>
          {categories.map(category => (
            <Styled.CategoryItem key={category}>
              <Styled.CategoryInput
                id={category}
                name='category'
                type='radio'
                value={category}
                defaultChecked={false}
                onClick={(e) => setCategory(e.target.value) }/>
              <Styled.CategoryLabel htmlFor={category}>
                {category}
              </Styled.CategoryLabel>
            </Styled.CategoryItem>
          ))}
        </Styled.CategoryWrap>
        <button type='button' onClick={() => console.log(categoryValue)}>Apply</button>
      </Styled.PopoverContentWrap>
    </Styled.PopoverWrap>
  )

}

export default CategoryPopover;
