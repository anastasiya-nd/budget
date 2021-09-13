import React from 'react';
import PropTypes from 'prop-types';
import { Textarea, Label } from './styles';

const TextareaField = ({ label, value, placeholder, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      {label && <Label htmlFor="note">{label}</Label>}
      <Textarea
        id="note"
        name="note"
        onChange={handleInputChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

TextareaField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextareaField.defaultProps = {
  label: '',
  value: '',
  placeholder: '',
};

export default TextareaField;
