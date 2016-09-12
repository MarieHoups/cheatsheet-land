import React from 'react';

const Fieldset = (props) => (
  <fieldset>
    <legend>{props.name}</legend>
    <input type="checkbox" id={`expand-${props.name}`}/>
    <label htmlFor={`expand-${props.name}`}></label>
    {props.children}
  </fieldset>
)

export default Fieldset;
