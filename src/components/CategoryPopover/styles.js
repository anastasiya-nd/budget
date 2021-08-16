import styled from 'styled-components';
import Button from '../Button';

export const CategoryWrap = styled.ul`
  padding: 4px 0;
  margin: 0;
  min-width: 110px;
`;

export const CategoryItem = styled.li`
  list-style-type: none;
  font-size: 14px;
  line-height: 16px;
  padding: 4px 12px;
  font-weight: ${({ isActive }) => (isActive ? 700 : 400)};
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonItem = styled(Button)`
  width: 100%;
  color: red;
`;
