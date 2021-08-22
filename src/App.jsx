import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Header from './components/Header';
import Home from './pages/Home';
import { Main } from './styles';

const App = () => (
  <>
    <Header />
    <Main>
      <Switch>
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/" component={Home} />
      </Switch>
    </Main>
  </>
);

export default App;
