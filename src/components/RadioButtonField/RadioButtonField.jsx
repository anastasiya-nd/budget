import React from 'react';
import PropTypes from 'prop-types';
import { ButtonInput, ButtonLabel, RadioButton, RadioButtonWrap } from './styles';

const RadioButtonField = ({ inputs, active, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <RadioButtonWrap>
      {inputs.map((input) => (
        <RadioButton key={input}>
          <ButtonInput
            id={input}
            type="radio"
            name="currency"
            onChange={handleInputChange}
            value={input}
          />
          <ButtonLabel htmlFor={input} active={active === input}>
            {input}
          </ButtonLabel>
        </RadioButton>
      ))}
    </RadioButtonWrap>
  );
};

RadioButtonField.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButtonField;
