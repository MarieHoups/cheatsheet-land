import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import Layout from './layout';

import TableContainer from './components/tableContainer';
import Playground from './components/playground';

import { Provider } from 'react-redux';
import store from './store';
import connector from './connector';

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Layout}>
        <IndexRedirect to="/playground" />
        <Route path='color-table' component={connector(TableContainer)} />
        <Route path='playground' component={Playground} />
      </Route>
    </Router>
  </Provider>
);

export default routes;
