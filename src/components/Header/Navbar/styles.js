import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavUl = styled.ul`
  display: flex;
  padding: 0;
`;

export const NavItem = styled.li`
  list-style-type: none;
  margin-left: 40px;
`;

export const NavItemLink = styled(NavLink)`
  font-size: 18px;
  line-height: 16px;
  text-decoration: none;
  color: #000;
`;
