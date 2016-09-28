import React from 'react';
import Draggable from 'react-draggable';

const Shape = (props) => (
  <Draggable>
    <div style={Object.assign({}, props.shapeStyle)} selected={props.selected}></div>
  </Draggable>
);

export default Shape;
