import React, { useState } from 'react';
import Popover from '../Popover/Popover';
import DeleteIcon from '../Icons/DeleteIcon'
import * as Styled from './styles'

const LabelsPopover = () => {
  const [labels, setLabels] = useState([]);

  const addLabel = (e) => {
    if (e.key === 'Enter') {
      setLabels([...labels, e.target.value]);
      e.target.value = '';
    }
  }

  const deleteLabel = (deletingLabel) => {
    const newLabels = labels.filter(label => label !== deletingLabel);
    setLabels(newLabels);
  }

  return (
    <Popover popoverLabel='Labels'>
      <Styled.LabelsPopoverWrap>
        <Styled.LabelsContainer>
          {labels.map((label) => (
            <Styled.LabelWrap key={label}>
              <Styled.Label>
                {label}
              </Styled.Label>
              <Styled.DeleteButton
                data-delete
                type='button'
                onClick={() => deleteLabel(label)}
              >
                <DeleteIcon />
              </Styled.DeleteButton>
            </Styled.LabelWrap>
          ))}
          <Styled.Input
            type='text'
            placeholder='Type and press enter'
            onKeyDown={addLabel}/>
        </Styled.LabelsContainer>
        <Styled.ButtonItem text='Apply' onClick={() => console.log(1)}/>
      </Styled.LabelsPopoverWrap>
    </Popover>
  )
};

export default LabelsPopover;
