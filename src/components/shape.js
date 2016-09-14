import React from 'react';
import Draggable from 'react-draggable';

class Shape extends React.Component{
  render() {
    return (
      <Draggable>
        <div style={Object.assign({},this.props.shapeStyle)} selected={this.props.selected}></div>
      </Draggable>
    );
  }
}

export default Shape;
