'use strict';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import store from './store';

import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Settings from './components/Settings';
import Offers from './components/Offers';
import OfferDetail from './components/OfferDetail';

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="offerDetail/:id" component={OfferDetail} />
        <Route path="settings" component={Settings} />
        <Route path="offers" component={Offers} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
