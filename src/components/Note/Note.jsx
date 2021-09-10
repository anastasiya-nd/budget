import React from 'react';
import PropTypes from 'prop-types';
import { Textarea, Label } from './styles';

const Note = ({ label, placeholder, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      {label && <Label htmlFor="note">{label}</Label>}
      <Textarea id="note" name="note" onChange={handleInputChange} placeholder={placeholder} />
    </>
  );
};

Note.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Note.defaultProps = {
  label: '',
  placeholder: '',
};

export default Note;
