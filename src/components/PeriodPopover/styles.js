import styled from 'styled-components';
import Calendar from '../Calendar';
import Button from '../Button';

export const CalendarWrap = styled.div`
  background-color: #fff;
`;

export const DateWrap = styled.div`
  display: flex;
`;

export const PeriodCalendar = styled(Calendar)`
  font-size: 14px;
`;

export const ButtonItem = styled(Button)`
  min-width: 90px;
  margin-top: 8px;
`;
