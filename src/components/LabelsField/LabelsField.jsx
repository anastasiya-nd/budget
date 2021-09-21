import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, FieldLabel, PlusButton, Label, LabelsWrap, DeleteButton } from './styles';
import Plus from '../Icons/Plus';
import LabelClear from '../Icons/LabelClear';

const LabelsField = ({ fieldLabel, placeholder, labels, onChange, onDelete, className }) => {
  const [labelValue, setLabelValue] = useState('');

  const addLabel = () => {
    const inputValue = labelValue.trim();
    if (inputValue) {
      onChange(inputValue);
      setLabelValue('');
    }
  };

  const deleteLabel = (deletingLabel) => {
    onDelete(deletingLabel);
  };

  const handleInputChange = (e) => {
    setLabelValue(e.target.value);
  };

  return (
    <div className={className}>
      {fieldLabel && <FieldLabel htmlFor="label">{fieldLabel}</FieldLabel>}
      <LabelsWrap>
        <PlusButton type="button" onClick={addLabel}>
          <Plus />
        </PlusButton>
        <Input
          id="label"
          type="text"
          name="label"
          value={labelValue}
          placeholder={placeholder}
          onChange={handleInputChange}
        />
        {!!labels.length &&
          labels.map((label, index) => (
            // eslint-disable-next-line
            <Label key={index}>
              {label}
              <DeleteButton type="button" onClick={() => deleteLabel(label)}>
                <LabelClear />
              </DeleteButton>
            </Label>
          ))}
      </LabelsWrap>
    </div>
  );
};

LabelsField.propTypes = {
  fieldLabel: PropTypes.string,
  placeholder: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  className: PropTypes.string,
};

LabelsField.defaultProps = {
  fieldLabel: '',
  placeholder: 'Add label name',
  labels: [],
  className: '',
};

export default LabelsField;
