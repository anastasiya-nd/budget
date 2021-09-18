import styled from 'styled-components';

export const Textarea = styled.textarea`
  border: 1px solid #e7e7e9;
  border-radius: 3px;
  color: #000;
  font-size: 12px;
  line-height: 16px;
  padding: 5px 8px;
  display: block;
  height: 64px;
  width: 100%;
  resize: none;
  &::placeholder {
    color: #b2b2b2;
  }
`;

export const FieldLabel = styled.label`
  display: block;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 4px;
`;
