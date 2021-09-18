import React from 'react';
import PropTypes from 'prop-types';
import { Textarea, FieldLabel } from './styles';

const TextareaField = ({ fieldLabel, value, placeholder, onChange, className }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={className}>
      {fieldLabel && <FieldLabel htmlFor="note">{fieldLabel}</FieldLabel>}
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
  fieldLabel: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

TextareaField.defaultProps = {
  fieldLabel: '',
  value: '',
  placeholder: '',
  className: '',
};

export default TextareaField;
