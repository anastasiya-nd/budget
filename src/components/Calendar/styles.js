import styled from 'styled-components';

const commonStylesOfRowWrap = `
  width: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(7, 36px);
`;

export const CalendarWrap = styled.div`
  max-width: 272px;
  font-size: 14px;
  line-height: 16px;
`;

export const CalendarHeader = styled.div`
  background-color: #f5f1ee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
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
  &:disabled {
    background-color: #cdcdcd;
  }
`;

export const CalendarHeaderDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* font-size: 14px;
  line-height: 16px; */
`;

export const CalendarTableHeader = styled.div`
  ${commonStylesOfRowWrap}
  grid-template-rows: 28px;
  place-items: center center;
  color: #777676;
  font-weight: 700;
`;

export const CalendarTableContent = styled.div`
  ${commonStylesOfRowWrap}
  grid-template-rows: repeat(6, 28px);
  place-items: stretch;
`;

export const CalendarDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
