import React from 'react';
import { NavUl, NavItem, NavItemLink } from './styles';

const Navbar = () => (
  <nav>
    <NavUl>
      <NavItem>
        <NavItemLink to='/'>Home</NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to='/'>About us</NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to='/'>Contacts</NavItemLink>
      </NavItem>
    </NavUl>
  </nav>
)

export default Navbar;
