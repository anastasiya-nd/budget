import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Header from './components/Header';
import Home from './pages/Home';
import { Main, GlobalStyle } from './styles';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Main>
        <Switch>
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/" component={Home} />
        </Switch>
      </Main>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
