var React = require('react');

var SearchInput = React.createClass({
    handleChange: function() {
    this.props.onUserInput(this.refs.filterTextInput.value);
    },
  render: function() {
    return (
      <form>
        <input
          className="search"
          type="text"
          placeholder="Search by name..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
        </form>
    );
  }
});

module.exports = SearchInput;
