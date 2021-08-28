import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Arrow from '../Icons/Arrow';
import { useClickOutside } from '../../hooks/hooks';

const Select = ({ label, placeholder, defaultValue, options }) => {
  const [activeOption, setActiveOption] = useState(defaultValue);
  const node = useRef(null);
  const [isOpen, toggleIsOpen] = useState(false);

  const chooseOption = (option) => {
    setActiveOption(option);
    toggleIsOpen(false);
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
        <Styled.SelectValue onClick={changeIsOpen} activeOption={activeOption}>
          <span>{activeOption || defaultValue || placeholder}</span>
          <Styled.ArrowWrap variant={isOpen}>
            <Arrow />
          </Styled.ArrowWrap>
        </Styled.SelectValue>
        <Styled.SelectContentWrap variant={isOpen}>
          <ul>
            {options.map((option) => (
              <Styled.OptionItem
                key={option}
                isActive={activeOption === option}
                onClick={() => chooseOption(option)}
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
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultValue: PropTypes.string,
};

Select.defaultProps = {
  placeholder: 'select placeholder',
  defaultValue: '',
  label: '',
};

export default Select;
