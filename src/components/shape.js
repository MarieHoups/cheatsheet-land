import React from 'react';

class Shape extends React.Component{
  render() {
    return (
      <div>
      <aside></aside>
      <div style={Object.assign({},this.props.shapeStyle)}></div>
      </div>
    );
  }
}

export default Shape;
