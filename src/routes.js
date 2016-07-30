var React = require('React');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Layout = require('./layout');

var TableContainer = require('./components/tableContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <Route path='color-table' component={TableContainer} />
    </Route>
  </Router>
  );

module.exports = routes;
