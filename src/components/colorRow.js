var React = require('react');

var ColorRow = React.createClass({
  getInitialState: function() {
    return {
        color: setTextColor(this.props.children.l),
        background: this.props.children.hex
    };
  },
  render: function() {
    var hsl = 'hsl(' + this.props.children.h + ', ' + this.props.children.s + '%, ' + this.props.children.l + '%)';
    return (
      <tr style={this.state}>
        <td>{this.props.children.name}</td>
        <td>{this.props.children.hex}</td>
        <td>{hsl}</td>
      </tr>
    );
  }
});

function setTextColor(lightness) {
  return lightness > 45 ? "#333" : "#eee";
}

module.exports = ColorRow;
