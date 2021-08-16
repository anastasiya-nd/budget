import styled from 'styled-components';
import Button from '../Button';

export const CategoryWrap = styled.ul`
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

export const CategoryItem = styled.li`
  list-style-type: none;
  font-size: 14px;
  line-height: 16px;
  padding: 8px 16px;
  background: ${({ isActive }) => (isActive ? '#F5F1EE ' : 'transparent')};
  &:hover {
    cursor: pointer;
    background: #f9f7f5;
  }
`;

export const ButtonWrap = styled.div`
  padding: 0 16px;
  margin-top: 8px;
`;

export const ButtonItem = styled(Button)`
  width: 100%;
`;
