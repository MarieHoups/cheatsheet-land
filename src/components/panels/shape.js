import React from 'react';
import Draggable from 'react-draggable';

const Shape = (props) => {

  return (
    <Draggable>
      <div style={props.shapeStyle}></div>
    </Draggable>
  );
}

export default Shape;
