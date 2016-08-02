var React = require('React');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Layout = require('./layout');

var TableContainer = require('./components/tableContainer');
var Notebook = require('./components/notebook');
var Playground = require('./components/playground');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <Route path='color-table' component={TableContainer} />
      <Route path='notebook' component={Notebook} />
      <Route path='playground' component={Playground} />
    </Route>
  </Router>
  );

module.exports = routes;
