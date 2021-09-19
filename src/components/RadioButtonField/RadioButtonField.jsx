import React from 'react';
import PropTypes from 'prop-types';
import { ButtonInput, ButtonLabel, RadioButton, RadioButtonWrap } from './styles';

const RadioButtonField = ({ inputs, active, onChange, className }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <RadioButtonWrap className={className}>
      {inputs.map((input) => (
        <RadioButton key={input.id}>
          <ButtonInput
            id={input.id}
            type="radio"
            name="currency"
            onChange={handleInputChange}
            value={input.value}
          />
          <ButtonLabel htmlFor={input.id} active={active === input.value}>
            {input.label}
          </ButtonLabel>
        </RadioButton>
      ))}
    </RadioButtonWrap>
  );
};

RadioButtonField.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

RadioButtonField.defaultProps = {
  className: '',
};

export default RadioButtonField;
