import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './styles';

const NumberField = ({ label }) => {
  const [value, setValue] = useState(0);
  return (
    <>
      {label && <Label htmlFor="amount">{label}</Label>}
      <Input
        id="amount"
        type="number"
        name="amount"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

NumberField.propTypes = {
  label: PropTypes.string,
};

NumberField.defaultProps = {
  label: '',
};

export default NumberField;
