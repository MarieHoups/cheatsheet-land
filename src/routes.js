import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Layout from './layout';

import TableContainer from './components/tableContainer';
import Notebook from './components/notebook';
import Playground from './components/playground';

import { Provider } from 'react-redux';
import store from './store';
import connector from './connector';

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Layout}>
        <Route path='color-table' component={connector(TableContainer)} />
        <Route path='notebook' component={Notebook} />
        <Route path='playground' component={Playground} />
      </Route>
    </Router>
  </Provider>
);

export default routes;
