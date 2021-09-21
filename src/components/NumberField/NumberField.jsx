import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, FieldLabel } from './styles';

const NumberField = ({ fieldLabel, value, onChange, className }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const validateInputValue = () => {
    let val = parseFloat(inputValue);
    if (isNaN(val)) { // eslint-disable-line
      val = '';
      setInputValue(val);
    } else {
      setInputValue(val);
      onChange(val);
    }
  };

  return (
    <div className={className}>
      {fieldLabel && <FieldLabel htmlFor="amount">{fieldLabel}</FieldLabel>}
      <Input
        id="amount"
        type="text"
        name="amount"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={validateInputValue}
      />
    </div>
  );
};

NumberField.propTypes = {
  fieldLabel: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

NumberField.defaultProps = {
  fieldLabel: '',
  className: '',
};

export default NumberField;
