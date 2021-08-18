import styled from 'styled-components';
import Button from '../Button';

export const LabelsPopoverWrap = styled.div`
  padding: 0 16px;
`;

export const LabelsContainer = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const LabelWrap = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: #f5f1ee;
  width: fit-content;
  margin: 4px 4px 4px 0;
`;

export const Label = styled.span`
  padding: 4px 8px;
`;

export const Input = styled.input`
  max-width: 170px;
  height: 34px;
  flex-shrink: 1;
  border: none;
  &::placeholder {
    font-size: 14px;
  }
  &:focus {
    outline: none;
  }
`;

export const DeleteButton = styled.button`
  line-height: 0;
  background-color: #e3deda;
  padding: 4px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
`;

export const ButtonItem = styled(Button)`
  min-width: 90px;
  margin-top: 8px;
`;
