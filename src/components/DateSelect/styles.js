import styled from 'styled-components';
import Calendar from '../Calendar';
import {
  ArrowButton,
  CalendarHeader,
  CalendarTableContent,
  CalendarTableHeader,
} from '../Calendar/styles';

export const SelectWrap = styled.div`
  position: relative;
  max-width: 280px;
`;

export const SelectLabel = styled.div`
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 4px;
`;

export const SelectValue = styled.div`
  font-size: 10px;
  display: flex;
  align-items: center;
  border: 1px solid #e7e7e9;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  padding-left: 8px;
  max-width: 280px;
  color: ${({ active }) => (active ? '#000' : '#b2b2b2')};
`;

export const SelectContentWrap = styled.div`
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

export const OptionItem = styled.li`
  padding: 4px 12px;
  background: ${({ isActive }) => (isActive ? '#F5F1EE ' : 'transparent')};
  &:hover {
    cursor: pointer;
    background: #f9f7f5;
  }
`;

export const DateCalendar = styled(Calendar)`
  font-size: 10px;
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
  }
`;
