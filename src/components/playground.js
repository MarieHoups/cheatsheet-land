import React from 'react';
import Shape from './panels/shape';
import ControlPanel from './panels/controlPanel';
import Sidebar from './panels/sidebar';

class Playground extends React.Component {
  constructor() {
    super();
    this.state = {
      baseShape: {
        background: '#EC185D',
        width: '10em',
        height: '10em'
      },
      bShadow: { x: 0, y: 0, blur: 0, spread: 0, colorShadow: '' },
      gradient: {
        type: '',
        angle: '',
        color: '',
        position: ''
      },
      thumbnails: []
    };
  }
  componentDidMount() {
    var shapes = this._getAllShapes();
    this.setState({thumbnails: shapes});
  }
  _handleUserInput(property, value) {
    let style, propertyName;
    const shadowValues = ["x","y","blur","spread", "colorShadow"];
    const gradientValues = ["type", "angle", "color", "position"];

    if (gradientValues.includes(property) || shadowValues.includes(property)) {
      let concatable = [];
      style = gradientValues.includes(property) ? this.state.gradient : this.state.bShadow;
      propertyName = gradientValues.includes(property) ? 'backgroundImage' : 'boxShadow';
      style[property] = interpolate(property, value);

      for (let p in style) {
        concatable.push(style[p]);
      }

      let newstyle = this.state.baseShape;
      newstyle[propertyName] = concatable
                                .filter((v) => v !== '')
                                .join(' ')
                                .replace(/\(\s(.*$)/, '($1)');
      this.setState(newstyle);
    } else {
      style = this.state.baseShape;
      style[property] = interpolate(property, value);
    }
    this.setState(style);
  }
  _getAllShapes() {
    var shapes = localStorage.getItem('shapes');
    if (shapes) {
      return JSON.parse(shapes);
    }
    return [];
  }
  _saveShape() {
    var shapes = this._getAllShapes();
    var style = this.state.baseShape;
    shapes.push(style);
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
    var shapes = this._getAllShapes();
    this.setState({thumbnails: shapes});
  }
  render() {
    const shape = this.state.baseShape;

    return (
      <div className="playground">
        <ControlPanel defaultValue={shape} onUserInput={(property) => this._handleUserInput.bind(this, property)} />
        <section className="shape">
          <button onClick={this._saveShape.bind(this)}>Save me!</button>
          <Shape shapeStyle={this.state.baseShape} />
        </section>
        <Sidebar snippet={shape} thumbnails={this.state.thumbnails} onClear={this._clearShapes.bind(this)} />
      </div>
    );
  }
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
