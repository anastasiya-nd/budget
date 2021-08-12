import React, { useState } from 'react';

const CategoryPopover = () => {
  const categories = ['shopping', 'entertainment', 'car', 'bills', 'food', 'home', 'education', 'other'];
  const placeholder = '';
  const labelPopover = 'Category';

  const [categoryValue, setCategory] = useState('');

  return (
    <div>
      <div>{ placeholder || labelPopover }</div>
      <div>
        <ul>
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      </div>
    </div>
  )

}

export default CategoryPopover;
