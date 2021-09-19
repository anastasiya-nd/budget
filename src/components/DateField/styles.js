import styled from 'styled-components';

export const FieldWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const FieldLabel = styled.div`
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 4px;
`;

export const FieldValue = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  border: 1px solid #e7e7e9;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  padding-left: 8px;
  box-sizing: border-box;
  width: 100%;
  color: ${({ active }) => (active ? '#000' : '#b2b2b2')};
`;

export const CalendarWrap = styled.div`
  position: absolute;
  z-index: 10;
  top: 100%;
  left: 0;
  background: #fff;
  padding: 8px 0;
  display: ${({ variant }) => (variant ? 'block' : 'none')};
`;

export const ArrowWrap = styled.div`
  transition: 0.2s;
  height: 24px;
  transform: ${({ variant }) => (variant ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
