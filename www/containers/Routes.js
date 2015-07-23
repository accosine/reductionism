import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';

import Menu from './Menu';
import CounterApp from './CounterApp.js';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={Menu}>
          <Route path="/counter" component={CounterApp} />
        </Route>
      </Router>
    );
  }
}

