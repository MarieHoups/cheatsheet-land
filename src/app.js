var React = require('react'),
    ReactDOM = require('react-dom');

var TableContainer = require('./components/tableContainer'),
    ColorTable = require('./components/colorTable'),
    SearchInput = require('./components/searchInput');
//var routes = require('./routes');

ReactDOM.render( <TableContainer/>, document.getElementById('container'), function() {
  console.timeEnd('react-app')
});
