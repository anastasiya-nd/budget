import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './styles';

const LabelsField = ({ label, placeholder }) => {
  // const [inputValue, setInputValue] = useState(value);

  return (
    <div>
      {label && <Label htmlFor="amount">{label}</Label>}
      <Input id="amount" type="text" name="amount" placeholder={placeholder} />
    </div>
  );
};

LabelsField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  // onChange: PropTypes.func.isRequired,
};

LabelsField.defaultProps = {
  label: '',
  placeholder: 'Add label name',
};

export default LabelsField;
