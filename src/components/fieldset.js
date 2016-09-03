import React from 'react';

const Fieldset = (props) => (
  <fieldset>
    <legend>{props.name}</legend>
    {props.children}
  </fieldset>
)

export default Fieldset;
