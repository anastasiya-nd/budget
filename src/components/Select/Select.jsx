import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Arrow from '../Icons/Arrow';
import { useClickOutside } from '../../hooks/hooks';

const Select = ({ label, placeholder, options, onChange, active }) => {
  const node = useRef(null);
  const [isOpen, toggleIsOpen] = useState(false);

  const onChoose = (option) => {
    toggleIsOpen(false);
    onChange(option);
  };

  const changeIsOpen = () => {
    toggleIsOpen(!isOpen);
  };

  const onClose = () => {
    toggleIsOpen(false);
  };

  useClickOutside(node, onClose);

  return (
    <>
      {label && <Styled.SelectLabel>{label}</Styled.SelectLabel>}
      <Styled.SelectWrap ref={node}>
        <Styled.SelectValue onClick={changeIsOpen} active={active}>
          <span>{active || placeholder}</span>
          <Styled.ArrowWrap variant={isOpen}>
            <Arrow />
          </Styled.ArrowWrap>
        </Styled.SelectValue>
        <Styled.SelectContentWrap variant={isOpen}>
          <ul>
            {options.map((option, index) => (
              <Styled.OptionItem
                key={index}  //eslint-disable-line
                isActive={active === option}
                onClick={() => onChoose(option)}
              >
                {option}
              </Styled.OptionItem>
            ))}
          </ul>
        </Styled.SelectContentWrap>
      </Styled.SelectWrap>
    </>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  onChange: PropTypes.func.isRequired,
  active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Select.defaultProps = {
  placeholder: 'select placeholder',
  active: '',
  label: '',
};

export default Select;
