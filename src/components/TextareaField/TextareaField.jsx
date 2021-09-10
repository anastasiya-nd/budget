import React from 'react';
import PropTypes from 'prop-types';
import { Textarea, Label } from './styles';

const TextareaField = ({ label, placeholder, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      {label && <Label htmlFor="note">{label}</Label>}
      <Textarea id="note" name="note" onChange={handleInputChange} placeholder={placeholder} />
    </div>
  );
};

TextareaField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextareaField.defaultProps = {
  label: '',
  placeholder: '',
};

export default TextareaField;
