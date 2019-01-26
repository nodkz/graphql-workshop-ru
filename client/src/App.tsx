import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import AppRoutes from './AppRoutes';
import Menu from './menu/Menu';
import ApolloClient from 'apollo-client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';

const browserHistory = createBrowserHistory();

interface Props {
  client: ApolloClient<NormalizedCacheObject>;
}

class App extends Component<Props> {
  public render() {
    const { client } = this.props;

    return (
      <ApolloProvider client={client}>
        <Router history={browserHistory}>
          <div style={{ paddingTop: '10px' }}>
            <Menu />
            <AppRoutes />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
