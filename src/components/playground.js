import React from 'react';
import Shape from './panels/shape';
import ControlPanel from './panels/controlPanel';
import Sidebar from './panels/sidebar';
import Layers from './panels/layers';
import Update from 'react-addons-update';

class Playground extends React.Component {
  constructor() {
    super();
    this.state = {
      selection: { boxShadow_id:0, backgroundImage_id: 0 },
      currentShape: {
        background: '#EC185D',
        width: 10,
        height: 10,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderStyle: 'none',
        borderColor: 'rgba(255, 255, 255, 0)',
        boxShadow: [{ x: 0, y: 0, blur: 0, spread: 0, colorShadow: '#000' }],
        backgroundImage: [{
          type: 'linear',
          angle: '',
          color: 'rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)',
          position: '100'
        }]
      },
      thumbnails: []
    };

    this._saveShape = this._saveShape.bind(this);
    this._clearShapes = this._clearShapes.bind(this);
  }

  componentDidMount() {
    const shapes = this._retrieveStoredShapes();
    this.setState({thumbnails: shapes});
  }
  _applyStyle(newstyle) {
    const newState = Update(this.state,
      {currentShape: {$merge: newstyle}
    });
    this.setState(newState);
  }
  _add(property, obj) {
    const layers = this.state.currentShape[property].concat(obj);
    const selected = this.state.selection;
    selected[`${property}_id`] = layers.length-1;
    const newState = Update(this.state, { currentShape: { [property]: {$set: layers}},selection:{$set: selected}});
    this.setState(newState);
  }
  _select(property, index) {
    const selected = Object.assign({}, this.state.selection);
    selected[`${property}_id`] = index;
    const newState = Update(this.state, { selection: { $set: selected }});
    this.setState(newState);
  }
  _handleComplexInput(key, property, value) {
    const shape = Object.assign({}, this.state.currentShape[property][this.state.selection[`${property}_id`]]);
    shape[key] = value;
    /* See https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015 */
    const newState = Update(this.state, { currentShape: { [property]: { [this.state.selection[`${property}_id`]]: {$set: shape}}}});
    this.setState(newState);
  }
  _handleBasicInput(property, value) {
    const shape = Object.assign({}, this.state.currentShape);
    shape[property] = value;
    this._applyStyle(shape);
  }
  _retrieveStoredShapes() {
    const shapes = localStorage.getItem('shapes');
    if (shapes) {
      return JSON.parse(shapes);
    }
    return [];
  }
  _saveShape() {
    const shapes = this._retrieveStoredShapes();
    shapes.push(computeStyle(this.state.currentShape));
    localStorage.setItem('shapes', JSON.stringify(shapes));
    this._displayShapes();
    return true;
  }
  _clearShapes() {
    localStorage.removeItem('shapes');
    this.setState({thumbnails: []});
    this._displayShapes();
  }
  _displayShapes() {
    const shapes = this._retrieveStoredShapes();
    this.setState({thumbnails: shapes});
  }
  render() {
    const shape = this.state.currentShape;
    const formatedStyle = computeStyle(shape);

    return (
      <div className="playground">
        <ControlPanel
          inputValues={shape}
          selected={this.state.selection}
          handleBasicInput={(property) => this._handleBasicInput.bind(this, property)}
          handleComplexInput={(key, property) => this._handleComplexInput.bind(this, key, property)}
        />
        <section className="shape">
          <Layers
            backgroundImage={shape.backgroundImage}
            boxShadow={shape.boxShadow}
            selection={this.state.selection}
            onAddBoxShadow={this._add.bind(this, "boxShadow", { x: 0, y: 0, blur: 0, spread: 0, colorShadow: '#000' })}
            onAddGradient={this._add.bind(this, "backgroundImage", { type: '', angle: '', color: '', position: '' })}
            onSelect={(property, index) => this._select.bind(this, property, index)}
          />
          <button className="btn-save" onClick={this._saveShape}>Save me!</button>
          <Shape shapeStyle={formatedStyle} />
        </section>
        <Sidebar
          snippet={formatedStyle}
          thumbnails={this.state.thumbnails}
          onClear={this._clearShapes}
        />
      </div>
    );
  }
}

export default Playground;

const formatProperty = function (property, value) {
  switch(property) {
    case 'boxShadow':
    return `${value.x}em ${value.y}em ${value.blur}em ${value.spread}em ${value.colorShadow}`;
    case 'backgroundImage':
    return `${value.type}-gradient(${value.color} ${value.position || 100}%)`;
    case 'color':
    case 'background':
    case 'borderStyle':
    case 'borderColor':
      return value;
    default: return `${value}em`;
  }
}

const computeStyle = function (stateObj) {
  const style = Object.assign({}, stateObj);

  for (let obj in style) {
    if (typeof style[obj] === 'object') {
      let concatable = [];
      style[obj].map(function(layer) {
        concatable.push(formatProperty(obj, layer));
      });
      style[obj] = concatable.join(',\n  ')
    } else {
      style[obj] = formatProperty(obj, style[obj]);
    }
  }
  return style;
}
