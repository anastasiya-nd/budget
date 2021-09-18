import React from 'react';
import PropTypes from 'prop-types';
import { FieldLabel, ButtonInput, ButtonLabel, RadioButton, RadioButtonWrap } from './styles';

const RadioButtonField = ({ fieldLabel, inputs, active, onChange, className }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className={className}>
      {fieldLabel && <FieldLabel htmlFor="amount">{fieldLabel}</FieldLabel>}
      <RadioButtonWrap>
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
    </div>
  );
};

RadioButtonField.propTypes = {
  fieldLabel: PropTypes.string,
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

RadioButtonField.defaultProps = {
  fieldLabel: '',
  className: '',
};

export default RadioButtonField;
