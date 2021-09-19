import styled from 'styled-components';

export const RadioButtonWrap = styled.div`
  display: flex;
`;

export const RadioButton = styled.div`
  min-height: 28px;
  display: flex;
  &:not(:last-of-type) {
    margin-right: 4px;
  }
`;

export const ButtonLabel = styled.label`
  background-color: ${({ active }) => (active ? '#24695c' : '#f5f1ee')};
  border: 1px solid #f5f1ee;
  box-sizing: border-box;
  border-radius: 3px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  padding: 5px 7px;
  color: ${({ active }) => (active ? '#fff' : '#000')};
`;

export const ButtonInput = styled.input`
  display: none;
`;
