import React from 'react';

const Layers = (props) => (
  <div className="layer-container">
    <div className="layer-row">
    <button onClick={props.onAddGradient}>Add gradient</button>
    {props.backgroundImage.map((s, i) => (
      <div
        onClick={props.onSelect('backgroundImage', i)}
        className={props.selection.backgroundImage_id === i ? 'thumb is-active' : 'thumb'}
        style={{backgroundImage: `${s.type}-gradient(${s.color})`}}
        key={i}>
      </div>))}
    </div>
    <div className="layer-row">
    <button onClick={props.onAddBoxShadow}>Add shadow</button>
    {props.boxShadow.map((s, i) => (
      <div
        onClick={props.onSelect('boxShadow', i)}
        className={props.selection.boxShadow_id === i ? 'thumb is-active' : 'thumb'}
        style={{backgroundColor: `${s.colorShadow}`}}
        key={i}>
      </div>))}
    </div>
  </div>
);

export default Layers;
