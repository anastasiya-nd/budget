import styled from 'styled-components';

export const SelectWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectLabel = styled.div`
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 4px;
`;

export const SelectValue = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e7e7e9;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  padding-left: 8px;
  width: 100%;
  box-sizing: border-box;
  color: ${({ active }) => (active ? '#000' : '#b2b2b2')};
`;

export const SelectContentWrap = styled.div`
  position: absolute;
  z-index: 10;
  top: 100%;
  left: 0;
  background: #fff;
  width: 100%;
  box-shadow: 0px 4px 8px rgba(22, 61, 53, 0.12);
  border-radius: 4px;
  padding: 8px 0;
  display: ${({ variant }) => (variant ? 'block' : 'none')};
  height: 120px;
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
  width: 24px;
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
