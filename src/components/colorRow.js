import React from 'react';

class ColorRow extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      color: setTextColor(this.props.children.l),
      background: this.props.children.hex
    };
  }

  render() {
    var hsl = 'hsl(' + this.props.children.h + ', ' + this.props.children.s + '%, ' + this.props.children.l + '%)';
    return (
      <tr style={this.state}>
        <td>{this.props.children.name}</td>
        <td>{this.props.children.hex}</td>
        <td>{hsl}</td>
      </tr>
    );
  }
}

function setTextColor(lightness) {
  return lightness > 45 ? "#333" : "#eee";
}

export default ColorRow;
