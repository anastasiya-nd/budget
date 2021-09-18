import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Arrow from '../Icons/Arrow';
import { useClickOutside } from '../../hooks/hooks';
import { monthNames } from '../Calendar/constants';

const DateField = ({ fieldLabel, placeholder, activeDate, onChange }) => {
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
      {fieldLabel && <Styled.FieldLabel>{fieldLabel}</Styled.FieldLabel>}
      <Styled.FieldWrap ref={node}>
        <Styled.FieldValue onClick={changeIsOpen} active={activeDate}>
          <span>{(activeDate && getSelectedDate()) || placeholder}</span>
          <Styled.ArrowWrap variant={isOpen}>
            <Arrow />
          </Styled.ArrowWrap>
        </Styled.FieldValue>
        <Styled.CalendarWrap variant={isOpen}>
          <Styled.DateCalendar periodStart={activeDate} setPeriodStart={onChange} maxCurrentDate />
        </Styled.CalendarWrap>
      </Styled.FieldWrap>
    </div>
  );
};

DateField.propTypes = {
  fieldLabel: PropTypes.string,
  placeholder: PropTypes.string,
  activeDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]), //eslint-disable-line
  onChange: PropTypes.func.isRequired,
};

DateField.defaultProps = {
  fieldLabel: '',
  placeholder: '',
};

export default DateField;
