import React from 'react';
import styled from 'styled-components';
import Logo from '../Icons/Logo';
import Navbar from './Navbar/Navbar';

const Header = styled.header`
  background-color: #F5F1EE;
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderApp = () => (
  <Header>
    <Logo/>
    <Navbar />
  </Header>
);

export default HeaderApp;
