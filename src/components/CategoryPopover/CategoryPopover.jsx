import React from 'react'
import Popover from '../Popover/Popover';
import CategogyPopoverContent from './CategoryPopoverContent';

const CategoryPopover = () => (
  <Popover popoverLabel='Category'>
    <CategogyPopoverContent/>
  </Popover>
);

export default CategoryPopover;
