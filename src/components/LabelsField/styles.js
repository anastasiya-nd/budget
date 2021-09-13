import styled from 'styled-components';

export const Input = styled.input`
  border: 1px dotted #e7e7e9;
  border-radius: 4px;
  color: #000;
  font-size: 12px;
  line-height: 16px;
  padding: 3px 8px;
  display: block;
  max-width: 110px;
  box-sizing: border-box;
  margin-left: 8px;
  margin-bottom: 8px;
`;

export const FieldLabel = styled.label`
  display: block;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 4px;
`;

export const PlusButton = styled.button`
  border: 1px dotted #e7e7e9;
  border-radius: 50%;
  width: 22px;
  height: 22px;
`;

export const DeleteButton = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b3d7e2;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: 0.15s;
`;

export const Label = styled.div`
  position: relative;
  background-color: #9bd0e1;
  border-radius: 4px;
  width: fit-content;
  padding: 4px 8px;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  margin-left: 8px;
  margin-bottom: 8px;
  box-sizing: border-box;
  &:hover ${DeleteButton} {
    cursor: pointer;
    z-index: 10;
  }
`;

export const LabelsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;
