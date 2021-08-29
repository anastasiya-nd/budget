import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './styles';

const TextInput = ({ label }) => {
  const [currentValue, setValue] = useState(0);
  return (
    <>
      {label && <Label htmlFor="amount">{label}</Label>}
      <Input
        id="amount"
        type="number"
        name="amount"
        value={currentValue}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
};

TextInput.defaultProps = {
  label: '',
};

export default TextInput;
