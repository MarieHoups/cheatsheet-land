import React from 'react';
import Shape from './panels/shape';
import ControlPanel from './panels/controlPanel';
import Sidebar from './panels/sidebar';
import Update from 'react-addons-update';

class Playground extends React.Component {
  constructor() {
    super();
    this.state = {
      currentShape: {
        background: '#EC185D',
        width: '10em',
        height: '10em'
      },
      boxShadow: { x: 0, y: 0, blur: 0, spread: 0, colorShadow: '' },
      backgroundImage: {
        type: '',
        angle: '',
        color: '',
        position: ''
      },
      thumbnails: []
    };
  }
  componentDidMount() {
    const shapes = this._retrieveStoredShapes();
    this.setState({thumbnails: shapes});
  }
  _applyStyle(newstyle) {
    const newState = Update(this.state, {
      currentShape: {$set: newstyle}
    });
    this.setState(newState);
  }
  _handleComplexInput(key, property, value) {
    const propToUpdate = this.state[property];
    const shape = this.state.currentShape;
    propToUpdate[key] = interpolate(key, value);
    shape[property] = concat(propToUpdate);
    this._applyStyle(shape);
  }
  _handleBasicInput(property, value) {
    const shape = this.state.currentShape;
    shape[property] = interpolate(property, value);
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
    const shape = this.state.currentShape;
    shapes.push(shape);
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

    return (
      <div className="playground">
        <ControlPanel
          defaultValue={shape}
          handleBasicInput={(property) => this._handleBasicInput.bind(this, property)}
          handleComplexInput={(key, property) => this._handleComplexInput.bind(this, key, property)}
        />
        <section className="shape">
          <button onClick={this._saveShape.bind(this)}>Save me!</button>
          <Shape shapeStyle={this.state.currentShape} />
        </section>
        <Sidebar
          snippet={shape}
          thumbnails={this.state.thumbnails}
          onClear={this._clearShapes.bind(this)}
        />
      </div>
    );
  }
}

const concat = function(properties) {
  const concatable = [];
  for (let single in properties) {
      concatable.push(properties[single]);
    }
  return concatable.filter((v) => v !== '')
                   .join(' ')
                   .replace(/\(\s(.*$)/, '($1)');
}

const interpolate = function (property, value) {
  switch(property) {
    case 'color':
    case 'colorShadow':
    case 'background':
    case 'borderStyle':
    case 'borderColor':
      return value;
    case 'type':
      return `${value}-gradient(`;
    case 'angle':
      return `${value}deg,`;
    case 'position':
      return `${value}%`;
    default: return `${value}em`;
  }
}

export default Playground;
