import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Arrow from '../Icons/Arrow';
import { useClickOutside } from '../../hooks/hooks';
import { monthNames } from '../Calendar/constants';
import Calendar from '../Calendar';

const DateField = ({ fieldLabel, placeholder, activeDate, onChange }) => {
  const currentDate = new Date();
  const minSelectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, 1);
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
    <div styles="{width: 100%}">
      {fieldLabel && <Styled.FieldLabel>{fieldLabel}</Styled.FieldLabel>}
      <Styled.FieldWrap ref={node}>
        <Styled.FieldValue onClick={changeIsOpen} active={activeDate}>
          <span>{(activeDate && getSelectedDate()) || placeholder}</span>
          <Styled.ArrowWrap variant={isOpen}>
            <Arrow />
          </Styled.ArrowWrap>
        </Styled.FieldValue>
        <Styled.CalendarWrap variant={isOpen}>
          <Calendar
            periodStart={activeDate}
            setPeriodStart={onChange}
            minSelectedDate={minSelectedDate}
            maxSelectedDate={currentDate}
          />
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
