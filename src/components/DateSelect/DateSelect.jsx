import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Arrow from '../Icons/Arrow';
import { useClickOutside } from '../../hooks/hooks';
import { monthNames } from '../Calendar/constants';

const DateSelect = ({ fieldLabel, placeholder, activeDate, onChange }) => {
  const node = useRef(null);
  const [isOpen, toggleIsOpen] = useState(false);

  const changeIsOpen = () => {
    toggleIsOpen(!isOpen);
  };

  const onClose = () => {
    toggleIsOpen(false);
  };

  useClickOutside(node, onClose);
  const getSelectedDate = () => {
    return `${
      monthNames[activeDate.getMonth()]
    } ${activeDate.getDate()}, ${activeDate.getFullYear()}`;
  };

  return (
    <div>
      {fieldLabel && <Styled.SelectLabel>{fieldLabel}</Styled.SelectLabel>}
      <Styled.SelectWrap ref={node}>
        <Styled.SelectValue onClick={changeIsOpen} active={activeDate}>
          <span>{(activeDate && getSelectedDate()) || placeholder}</span>
          <Styled.ArrowWrap variant={isOpen}>
            <Arrow />
          </Styled.ArrowWrap>
        </Styled.SelectValue>
        <Styled.SelectContentWrap variant={isOpen}>
          <Styled.DateCalendar periodStart={activeDate} setPeriodStart={onChange} />
        </Styled.SelectContentWrap>
      </Styled.SelectWrap>
    </div>
  );
};

DateSelect.propTypes = {
  fieldLabel: PropTypes.string,
  placeholder: PropTypes.string,
  activeDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]), //eslint-disable-line
  onChange: PropTypes.func.isRequired,
};

DateSelect.defaultProps = {
  fieldLabel: '',
  placeholder: '',
};
export default DateSelect;
