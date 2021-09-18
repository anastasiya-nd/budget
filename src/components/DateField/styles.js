import styled from 'styled-components';
import Calendar from '../Calendar';
import {
  ArrowButton,
  CalendarHeader,
  CalendarTableContent,
  CalendarTableHeader,
} from '../Calendar/styles';

export const FieldWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const FieldLabel = styled.div`
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 4px;
`;

export const FieldValue = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  border: 1px solid #e7e7e9;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  padding-left: 8px;
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

export const DateCalendar = styled(Calendar)`
  /* font-size: 10px;
  ${CalendarTableHeader} {
    grid-template-columns: repeat(7, 28px);
    grid-template-rows: 20px;
  }
  ${CalendarTableContent} {
    grid-template-columns: repeat(7, 28px);
    grid-template-rows: repeat(6, 20px);
  }
  ${CalendarHeader} {
    height: 28px;
  }
  ${ArrowButton} {
    width: 28px;
  } */
`;
