import React, { useState } from 'react';
import DeleteIcon from '../Icons/DeleteIcon';
import * as Styled from './styles';

const Content = () => {
  const [labels, setLabels] = useState([]);

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
      <Styled.ButtonItem text="Apply" onClick={() => console.log(1)} />
    </Styled.LabelsPopoverWrap>
  );
};

export default Content;
