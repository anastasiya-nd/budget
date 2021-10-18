import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '../Icons/DeleteIcon';
import * as Styled from './styles';

const Content = ({ labels, setLabels, getSpending }) => {
  const addLabel = (e) => {
    const inputValue = e.target.value.trim();
    if (e.keyCode === 13 && inputValue) {
      setLabels([...labels, inputValue]);
      e.target.value = '';
    }
  };

  const deleteLabel = (deletingLabel) => {
    const newLabels = labels.filter((label) => label !== deletingLabel);
    setLabels(newLabels);
  };

  return (
    <Styled.LabelsPopoverWrap>
      <Styled.LabelsContainer>
        {labels.map((label, index) => (
          // eslint-disable-next-line
          <Styled.LabelWrap key={index}>
            <Styled.Label>{label}</Styled.Label>
            <Styled.DeleteButton data-delete type="button" onClick={() => deleteLabel(label)}>
              <DeleteIcon />
            </Styled.DeleteButton>
          </Styled.LabelWrap>
        ))}
        <Styled.Input type="text" placeholder="Type and press enter" onKeyDown={addLabel} />
      </Styled.LabelsContainer>
      <Styled.ButtonItem text="Apply" onClick={getSpending} />
    </Styled.LabelsPopoverWrap>
  );
};

Content.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  setLabels: PropTypes.func.isRequired,
  getSpending: PropTypes.func.isRequired,
};

export default Content;
