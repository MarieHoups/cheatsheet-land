var React = require('react');

var ColorInput = React.createClass({
  getInitialState: function() {
    return {
      color: this.props.color || '#000'
    };
  },
  handleChange: function() {
    this.props.onUserInput(this.refs.colorInput.value);
    this.setState({color: this.refs.colorInput.value})
    },
  render: function() {
    return (
      <label className="lbl-hex">{this.props.name}
        <input
          type="text"
          value={this.state.color}
          ref="colorInput"
          onChange={this.handleChange}
        />
      </label>
    );
  }
});

module.exports = ColorInput;
