import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './styles';

const TextInput = ({ label, value }) => {
  return (
    <div>
      {label && <Label htmlFor="amount">{label}</Label>}
      <Input id="amount" type="number" name="amount" value={value} />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
};

TextInput.defaultProps = {
  label: '',
  value: 0,
};

export default TextInput;
