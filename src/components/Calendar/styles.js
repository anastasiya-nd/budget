import styled from 'styled-components';

const commonStylesCols = `
  width: 36px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const CalendarWrap = styled.div`
  max-width: 272px;
  border: 1px solid red;
`;

export const CalendarHeader = styled.div`
  background-color: #f5f1ee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
`;

export const TableRow = styled.tr`
  display: flex;
  padding: 0 10px;
  font-size: 14px;
  line-height: 16px;
`;

export const TableHeaderRow = styled(TableRow)`
  color: #777676;
`;

export const TableHeaderCol = styled.th`
  ${commonStylesCols}
`;

export const TableCol = styled.td`
  ${commonStylesCols}
  ${({ variant }) => variant === 'otherMonth' && `color: #b2b2b2;`}
  ${({ isActive }) =>
    isActive &&
    `
    background-color: #24695C;
    color: #fff;
  `}
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #145b4e;
    color: #fff;
  }
`;

export const ArrowButton = styled.button`
  width: 40px;
  height: 100%;
  line-height: 1;
  background-color: transparent;
  border: none;
  flex-shrink: 0;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #e3deda;
  }
`;

export const CalendarHeaderDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  line-height: 16px;
`;
