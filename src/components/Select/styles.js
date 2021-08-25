import styled from 'styled-components';

export const SelectWrap = styled.div`
  position: relative;
`;

export const SelectLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
`;

export const SelectContentWrap = styled.div`
  position: absolute;
  z-index: 10;
  top: 100%;
  left: 0;
  background: #fff;
  width: fit-content;
  box-shadow: 0px 4px 8px rgba(22, 61, 53, 0.12);
  border-radius: 4px;
  padding: 8px 0 16px;
  display: ${({ variant }) => (variant ? 'block' : 'none')};
  height: 160px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 16px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.16);
    width: 6px;
    border-radius: 8px;
    border-right: 5px solid #fff;
    border-left: 5px solid #fff;
  }
`;

export const ArrowWrap = styled.div`
  transition: 0.2s;
  height: 24px;
  transform: ${({ variant }) => (variant ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const OptionItem = styled.li`
  font-size: 14px;
  line-height: 16px;
  padding: 8px 16px;
  background: ${({ isActive }) => (isActive ? '#F5F1EE ' : 'transparent')};
  &:hover {
    cursor: pointer;
    background: #f9f7f5;
  }
`;
