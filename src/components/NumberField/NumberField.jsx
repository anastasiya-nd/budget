import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './styles';

const NumberField = ({ label, value, onChange }) => {
  // const [value, setValue] = useState(defaultValue);

  const handleInputChange = (e) => {
    // setValue(e.target.value);
    onChange(+e.target.value);
  };

  return (
    <>
      {label && <Label htmlFor="amount">{label}</Label>}
      <Input id="amount" type="number" name="amount" value={value} onChange={handleInputChange} />
    </>
  );
};

NumberField.propTypes = {
  label: PropTypes.string,
  // defaultValue: PropTypes.number,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

NumberField.defaultProps = {
  label: '',
  // defaultValue: 0,
};

export default NumberField;
