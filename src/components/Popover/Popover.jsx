import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Arrow from '../Icons/Arrow';

const Popover = React.memo(({ popoverLabel, children }) => {
  const [isOpen, toggleIsOpen] = useState(false);
  const node = useRef(null);
  // && !e.target.closest('[data-delete]')

  useEffect(() => {
    const handleClickOutside=(e)=> {
      console.log(e.target)
      if (node.current && !node.current.contains(e.target)) {
        console.log('handleClickOutside')
        toggleIsOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    }
  })

  const changeIsOpen = () => {
    toggleIsOpen(true)
  } ::
  console.log('state ', isOpen)

  return (
    <Styled.PopoverWrap>
      <Styled.PopoverLabel onClick={changeIsOpen}>
        <span>{popoverLabel}</span>
        <Styled.ArrowWrap variant={isOpen}>
          <Arrow/>
        </Styled.ArrowWrap>
      </Styled.PopoverLabel>
      <Styled.PopoverContentWrap variant={isOpen}  ref={node}>
        {children}
      </Styled.PopoverContentWrap>
    </Styled.PopoverWrap>
  )
});

Popover.propTypes = {
  popoverLabel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default Popover;
