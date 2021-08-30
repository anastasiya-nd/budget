import React from 'react';
import { NavUl, NavItem, NavItemLink } from './styles';

const Navbar = () => (
  <nav>
    <NavUl>
      <NavItem>
        <NavItemLink to="/">Home</NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to="/about-us">About us</NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to="/contacts">Contacts</NavItemLink>
      </NavItem>
    </NavUl>
  </nav>
);

export default Navbar;
