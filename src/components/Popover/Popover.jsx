import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Arrow from '../Icons/Arrow';
import { useClickOutside } from '../../hooks/hooks';

const Popover = React.memo(({ popoverLabel, children }) => {
  const node = useRef(null);
  const [isOpen, changeIsOpen] = useClickOutside(node);

  return (
    <Styled.PopoverWrap>
      <Styled.PopoverLabel onClick={changeIsOpen}>
        <span>{popoverLabel}</span>
        <Styled.ArrowWrap variant={isOpen}>
          <Arrow />
        </Styled.ArrowWrap>
      </Styled.PopoverLabel>
      <Styled.PopoverContentWrap variant={isOpen} ref={node}>
        {children}
      </Styled.PopoverContentWrap>
    </Styled.PopoverWrap>
  );
});

Popover.propTypes = {
  popoverLabel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Popover;
