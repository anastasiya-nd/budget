import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Home from './components/Home';

const App = () => (
  <>
    <Header />
    <main>
      <Switch>
        <Route path='/about-us' component={AboutUs} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/' component={Home}/>
      </Switch>
    </main>
  </>
)

export default App;
