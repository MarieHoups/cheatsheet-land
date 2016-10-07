import React from 'react';

const Fieldset = (props) => (
  <fieldset>
    <legend>{props.name}</legend>
    <div className="fieldset">
      <input type="checkbox" id={`expand-${props.name}`}/>
      <label htmlFor={`expand-${props.name}`}></label>
      {props.children}
    </div>
  </fieldset>
)

export default Fieldset;
