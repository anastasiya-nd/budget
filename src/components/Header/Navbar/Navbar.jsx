import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  ul {
    display: flex;
    padding: 0;
  }
  ul li {
    list-style-type: none;
    margin-left: 40px;
  }
  ul li a {
    font-size: 18px;
    line-height: 16px;
    text-decoration: none;
    color: #000;
  }
`

const Navbar = () => (
  <Nav>
    <ul>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/'>About us</NavLink>
      </li>
      <li>
        <NavLink to='/'>Contacts</NavLink>
      </li>
    </ul>
  </Nav>
)

export default Navbar;
