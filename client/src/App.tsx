import React, { Component } from 'react';
import './App.css';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import AppRoutes from './AppRoutes';
import Menu from './menu/Menu';

const browserHistory = createBrowserHistory();

class App extends Component {
  public render() {
    return (
      <Router history={browserHistory}>
        <div style={{ paddingTop: '10px' }}>
          <Menu />
          <AppRoutes />
        </div>
      </Router>
    );
  }
}

export default App;
