import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Arrow from '../Icons/Arrow';
import { useClickOutside } from '../../hooks/hooks';

const Popover = React.memo(({ popoverLabel, children }) => {
  const node = useRef(null);
  const [isOpen, toggleIsOpen] = useState(false);

  const changeIsOpen = () => {
    toggleIsOpen(!isOpen);
  };

  const onClose = () => {
    toggleIsOpen(false);
  };

  useClickOutside(node, onClose);

  return (
    <Styled.PopoverWrap ref={node}>
      <Styled.PopoverLabel onClick={changeIsOpen}>
        <span>{popoverLabel}</span>
        <Styled.ArrowWrap variant={isOpen}>
          <Arrow />
        </Styled.ArrowWrap>
      </Styled.PopoverLabel>
      <Styled.PopoverContentWrap variant={isOpen}>{children}</Styled.PopoverContentWrap>
    </Styled.PopoverWrap>
  );
});

Popover.propTypes = {
  popoverLabel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Popover;
