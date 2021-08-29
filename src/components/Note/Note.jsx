import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Textarea, Label } from './styles';

const Note = ({ label, placeholder }) => {
  const [value, setValue] = useState('');

  return (
    <>
      {label && <Label htmlFor="note">{label}</Label>}
      <Textarea
        id="note"
        name="note"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
};

Note.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

Note.defaultProps = {
  label: '',
  placeholder: '',
};

export default Note;
