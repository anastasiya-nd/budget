import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './styles';

const NumberField = ({ label, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const validateInputValue = () => {
    const val = parseFloat(inputValue);
    setInputValue(val);
    onChange(val);
  };

  return (
    <>
      {label && <Label htmlFor="amount">{label}</Label>}
      <Input
        id="amount"
        type="text"
        name="amount"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={validateInputValue}
      />
    </>
  );
};

NumberField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

NumberField.defaultProps = {
  label: '',
};

export default NumberField;
