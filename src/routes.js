import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Layout from './layout';

import TableContainer from './components/tableContainer';
import Notebook from './components/notebook';
import Playground from './components/playground';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <Route path='color-table' component={TableContainer} />
      <Route path='notebook' component={Notebook} />
      <Route path='playground' component={Playground} />
    </Route>
  </Router>
);

export default routes;
