var React = require('react');
var SearchInput = require('./SearchInput'),
    ColorTable = require('./ColorTable');

var TableContainer = React.createClass({
  getInitialState: function() {
    return {
      filterText: ''
    };
  },

  handleUserInput: function(filterText) {
    this.setState({
      filterText: filterText
    });
  },
  render: function() {
    return (
      <div>
        <SearchInput
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <ColorTable
          url="https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json"
          colors={this.props.data}
          filterText={this.state.filterText}/>
      </div>
    );
  }
});

module.exports = TableContainer;
