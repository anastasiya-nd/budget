import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/Logo.svg'
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
    <img src={logo} alt="budget-app" />
    <Navbar />
  </Header>
);

export default HeaderApp;
