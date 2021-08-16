import styled from 'styled-components';
import Button from '../Button';

export const CategoryWrap = styled.ul`
  padding: 8px 0px;
  margin: 0;
  // min-width: 110px;
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

export const ButtonItem = styled(Button)`
  font-size: 16px;
`;
