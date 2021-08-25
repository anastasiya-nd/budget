import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Arrow from '../Icons/Arrow';

const Select = ({ placeholder, options }) => {
  const [activeOption, setActiveOption] = useState('');
  const [isOpen, toggleIsOpen] = useState(false);
  const node = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current && !node.current.contains(e.target)) {
        toggleIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const changeIsOpen = () => {
    toggleIsOpen(!isOpen);
  };

  const chooseOption = (option) => {
    setActiveOption(option);
    toggleIsOpen(!isOpen);
  };

  return (
    <Styled.SelectWrap ref={node}>
      <Styled.SelectLabel onClick={changeIsOpen}>
        <span>{activeOption || placeholder}</span>
        <Styled.ArrowWrap variant={isOpen}>
          <Arrow />
        </Styled.ArrowWrap>
      </Styled.SelectLabel>
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
  );
};

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
