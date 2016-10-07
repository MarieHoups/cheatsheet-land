import React from 'react';

const ColorRow = (props) => {

  const hsl = `hsl(${props.children.h}, ${props.children.s}%, ${props.children.l}%)`;
  const rowStyle = {
    color: setTextColor(props.children.l),
    background: props.children.hex
  };

  return (
    <tr style={rowStyle}>
      <td>{props.children.name}</td>
      <td>{props.children.hex}</td>
      <td>{hsl}</td>
    </tr>
  );
};

const setTextColor = (lightness) => lightness > 45 ? "#333" : "#eee";

export default ColorRow;
