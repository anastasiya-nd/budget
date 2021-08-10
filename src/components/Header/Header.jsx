import React from 'react';
import Logo from '../Icons/Logo';
import Navbar from './Navbar/Navbar';
import HeaderItem from './styles';


const Header = () => (
  <HeaderItem>
    <Logo/>
    <Navbar />
  </HeaderItem>
);

export default Header;
