import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Arrow from '../Icons/Arrow';

const Popover = ({ popoverLabel, ...other }) => {
  const [isOpen, toggleIsOpen] = useState(false);
  const node = useRef();

  const handleClickOutside = (e) => {
    if (!node.current.contains(e.target) && !e.target.closest('[data-delete]')) {
      toggleIsOpen(false);
    }
  }

  const changeIsOpen = () => {
    toggleIsOpen(!isOpen)
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [])

  return (
    <Styled.PopoverWrap ref={node}>
      <Styled.PopoverLabel onClick={changeIsOpen}>
        <span>{popoverLabel}</span>
        <Styled.ArrowWrap isOpen={isOpen}>
          <Arrow/>
        </Styled.ArrowWrap>
      </Styled.PopoverLabel>
      <Styled.PopoverContentWrap isOpen={isOpen}>
        {other.children}
      </Styled.PopoverContentWrap>
    </Styled.PopoverWrap>
  )
};

Popover.propTypes = {
  popoverLabel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default Popover;
