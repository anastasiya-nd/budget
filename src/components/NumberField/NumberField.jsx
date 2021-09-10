import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './styles';

const NumberField = ({ label, value, onChange }) => {
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
