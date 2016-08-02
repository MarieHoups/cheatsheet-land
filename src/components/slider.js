var React = require('react');

var Slider = React.createClass({
  getInitialState: function() {
    return {
      currentValue: this.props.initialValue || 0
    };
  },
  handleChange: function(e) {
    this.props.onUserInput(this.refs.rangeInput.value);
    this.setState({currentValue: this.refs.rangeInput.value})
  },
  render: function() {
    return (
      <div>
      <form>
        <input
          type="range"
          value={this.state.currentValue}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          ref="rangeInput"
          onChange={this.handleChange}
        />
      </form>
      </div>
    );
  }
});

module.exports = Slider;
